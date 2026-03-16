const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function toMins(t) { const [h,m] = t.split(':').map(Number); return h*60+m; }
function fmt(t) {
  const [h,m] = t.split(':').map(Number);
  return (h%12||12) + ':' + m.toString().padStart(2,'0') + ' ' + (h>=12?'PM':'AM');
}
function today() { return DAYS[new Date().getDay()]; }

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// Auto-join toggle
const autoToggle = document.getElementById('auto-toggle');
chrome.storage.local.get('autoJoin', ({ autoJoin }) => { autoToggle.checked = autoJoin !== false; });
autoToggle.addEventListener('change', () => { chrome.storage.local.set({ autoJoin: autoToggle.checked }); });

async function getClasses() {
  return new Promise(r => chrome.storage.local.get('classes', ({ classes }) => r(classes || [])));
}

function getStatus(cls) {
  if (cls.day !== today()) return 'other';
  const cur = new Date().getHours()*60 + new Date().getMinutes();
  const s = toMins(cls.start), e = toMins(cls.end);
  if (cur >= s && cur < e) return 'live';
  if (cur < s && s-cur <= 15) return 'soon';
  if (cur >= e) return 'past';
  return 'upcoming';
}

function makeCard(cls, showDay) {
  const st = getStatus(cls);
  const cardCls = st === 'live' ? 'live' : st === 'soon' ? 'soon' : '';
  const meta = showDay ? cls.day + ' · ' + fmt(cls.start) + ' – ' + fmt(cls.end) : fmt(cls.start) + ' – ' + fmt(cls.end);
  const btnCls = (st==='live'||st==='soon') ? 'active' : 'passive';
  const btnTxt = st==='live' ? 'Join Now' : st==='past' ? 'Ended' : 'Join';
  const dis = st==='past' ? 'disabled' : '';
  return '<div class="class-card ' + cardCls + '">' +
    '<div class="time-badge">' + fmt(cls.start) + '</div>' +
    '<div class="class-info"><div class="class-name">' + cls.subject + '</div><div class="class-meta">' + meta + '</div></div>' +
    '<button class="join-btn ' + btnCls + '" ' + dis + ' data-join-id="' + cls.id + '">' + btnTxt + '</button>' +
  '</div>';
}

async function renderToday() {
  const classes = await getClasses();
  const todayName = today();
  document.getElementById('today-label').textContent = todayName;
  const container = document.getElementById('today-classes');
  const dot = document.getElementById('status-dot');
  const list = classes.filter(c => c.day === todayName).sort((a,b) => toMins(a.start)-toMins(b.start));

  if (!list.length) {
    container.innerHTML = '<div class="empty-state">No classes for today.<br><br>Go to <strong>Setup</strong> tab → open your portal → click "Scrape classes".</div>';
    dot.style.background = '#555'; return;
  }
  const hasLive = list.some(c => getStatus(c) === 'live');
  const hasSoon = list.some(c => getStatus(c) === 'soon');
  dot.style.background = hasLive ? '#1D9E75' : hasSoon ? '#BA7517' : '#555';
  container.innerHTML = list.map(c => makeCard(c, false)).join('');
  document.getElementById('footer-note').textContent = classes.length + ' class' + (classes.length!==1?'es':'') + ' saved';
}

async function renderAll() {
  const classes = await getClasses();
  const container = document.getElementById('all-classes');
  if (!classes.length) { container.innerHTML = '<div class="empty-state">No classes yet.</div>'; return; }
  const byDay = {};
  DAYS.forEach(d => byDay[d] = []);
  classes.forEach(c => { if (byDay[c.day]) byDay[c.day].push(c); });
  let html = '';
  DAYS.filter(d => d !== 'Sunday').forEach(d => {
    const list = byDay[d].sort((a,b) => toMins(a.start)-toMins(b.start));
    if (!list.length) return;
    html += '<div class="all-day-label">' + d + '</div>';
    html += list.map(c => makeCard(c, false)).join('');
  });
  container.innerHTML = html;
}

function manualJoin(id) {
  chrome.storage.local.get('classes', ({ classes }) => {
    const cls = (classes||[]).find(c => c.id === id);
    if (cls) { chrome.runtime.sendMessage({ type: 'MANUAL_JOIN', cls }); window.close(); }
  });
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-join-id]');
  if (btn && !btn.disabled) manualJoin(btn.dataset.joinId);
});

// Open portal button
document.getElementById('open-portal-btn').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://ecampus.upes.ac.in' });
  setStatus('Portal opened! Navigate to your timetable page, then click the button above.', 'info');
});

// Main scrape button — scrapes the currently active tab
document.getElementById('scrape-btn').addEventListener('click', async () => {
  const btn = document.getElementById('scrape-btn');
  btn.disabled = true;
  btn.textContent = 'Reading page...';
  setStatus('', '');

  const result = await chrome.runtime.sendMessage({ type: 'INJECT_SCRAPER' });

  btn.disabled = false;
  btn.textContent = 'Scrape classes from open portal tab';

  if (result && result.ok && result.classes && result.classes.length) {
    chrome.storage.local.set({ classes: result.classes });
    setStatus('Found ' + result.classes.length + ' class(es)! Check Today tab.', 'ok');
    renderToday(); renderAll();
  } else if (result && result.ok) {
    setStatus('No classes found on this page. Make sure you can see "Enter Online Classroom" links.', 'err');
  } else {
    setStatus(result && result.error ? result.error : 'Error reading page.', 'err');
  }
});

function setStatus(msg, type) {
  const el = document.getElementById('scrape-status');
  el.textContent = msg;
  el.className = 'status-msg ' + type;
}

function clearAll() {
  if (confirm('Clear all saved classes?')) {
    chrome.storage.local.remove('classes', () => { renderToday(); renderAll(); });
  }
}

document.getElementById('clear-btn').addEventListener('click', clearAll);

renderToday();
renderAll();
