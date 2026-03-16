// UPES Class Auto-Joiner - Background Service Worker

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create('schedule_checker', { periodInMinutes: 1 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'schedule_checker') checkAndJoinClasses();
});

async function checkAndJoinClasses() {
  const { classes = [], autoJoin = true } = await chrome.storage.local.get(['classes', 'autoJoin']);
  if (!autoJoin || !classes.length) return;
  const now = new Date();
  const today = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][now.getDay()];
  const cur = now.getHours() * 60 + now.getMinutes();
  for (const cls of classes) {
    if (cls.day !== today) continue;
    const diff = toMins(cls.start) - cur;
    if (diff <= 0 && diff > -2) {
      const key = 'joined_' + cls.id + '_' + now.toDateString();
      const res = await chrome.storage.session.get(key);
      if (!res[key]) {
        await chrome.storage.session.set({ [key]: true });
        openTeamsLink(cls);
      }
    }
  }
}

function openTeamsLink(cls) {
  chrome.notifications.create('notif_' + cls.id, {
    type: 'basic', iconUrl: 'icon48.png',
    title: 'Joining: ' + cls.subject,
    message: 'Auto-opening ' + cls.subject + ' now...',
    priority: 2
  });
  chrome.tabs.create({ url: cls.link, active: true });
}

function toMins(t) {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'MANUAL_JOIN') {
    openTeamsLink(msg.cls);
    sendResponse({ ok: true });
  }
  if (msg.type === 'SCRAPE_RESULT') {
    // Classes sent from content script running on the actual portal page
    if (msg.classes && msg.classes.length) {
      chrome.storage.local.set({ classes: msg.classes });
    }
    sendResponse({ ok: true });
  }
  if (msg.type === 'GET_TAB_URL') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      sendResponse({ url: tabs[0] ? tabs[0].url : '' });
    });
    return true;
  }
  if (msg.type === 'INJECT_SCRAPER') {
    // Inject scraper into the currently active portal tab
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      const tab = tabs[0];
      if (!tab) { sendResponse({ ok: false, error: 'No active tab found.' }); return; }
      if (!tab.url || (!tab.url.includes('upes.ac.in') && !tab.url.includes('ecampus'))) {
        sendResponse({ ok: false, error: 'Please open your iCampus portal first, then click this button.' });
        return;
      }
      try {
        const results = await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: scrapeCurrentPage
        });
        const classes = (results && results[0] && results[0].result) || [];
        sendResponse({ ok: true, classes });
      } catch(e) {
        sendResponse({ ok: false, error: e.message });
      }
    });
    return true;
  }
});

// ── Runs on the ALREADY OPEN iCampus page the user is viewing ─────────────────
function scrapeCurrentPage() {
  function parseTo24(t) {
    t = (t || '').trim();
    const ampm = t.match(/AM|PM/i);
    const parts = t.replace(/AM|PM/i, '').trim().split(':');
    let h = parseInt(parts[0]) || 0, m = parseInt(parts[1]) || 0;
    if (ampm) {
      if (/PM/i.test(ampm[0]) && h !== 12) h += 12;
      if (/AM/i.test(ampm[0]) && h === 12) h = 0;
    }
    return h.toString().padStart(2,'0') + ':' + m.toString().padStart(2,'0');
  }

  const classes = [];
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // PRIMARY: target exact iCampus class "session-link"
  const sessionLinks = Array.from(document.querySelectorAll('a.session-link, a[class*="session-link"]'));

  sessionLinks.forEach((link, i) => {
    const href = link.href || '';
    if (!href || !href.includes('teams')) return;

    // Walk up DOM to find card with time
    let card = link.parentElement;
    for (let d = 0; d < 12; d++) {
      if (!card) break;
      if (/\d{1,2}:\d{2}\s*(?:AM|PM)/i.test(card.innerText || '')) break;
      card = card.parentElement;
    }

    const cardText = (card || document.body).innerText || '';
    const timeMatch = cardText.match(/(\d{1,2}:\d{2}\s*(?:AM|PM))\s*[-–]\s*(\d{1,2}:\d{2}\s*(?:AM|PM))/i);

    // Get subject from bold/strong or first meaningful line
    let subject = '';
    if (card) {
      const boldEl = card.querySelector('strong, b, h1,h2,h3,h4,h5,[class*="title"],[class*="name"],[class*="subject"]');
      if (boldEl) subject = boldEl.innerText.trim().split('\n')[0];
    }
    if (!subject) {
      subject = cardText.split('\n')
        .map(l => l.trim())
        .find(l => l.length > 4 && !/^\d|enter online|join|EXPLO_|^[A-Z]{3,}_/i.test(l))
        || ('Class ' + (i + 1));
    }

    // Day: look in card text, else use today
    const dayMatch = cardText.match(/\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i);
    const day = dayMatch
      ? dayMatch[1].charAt(0).toUpperCase() + dayMatch[1].slice(1).toLowerCase()
      : today;

    classes.push({
      id: 'cls_' + i + '_' + Date.now(),
      subject: subject.slice(0, 80),
      start: timeMatch ? parseTo24(timeMatch[1]) : '09:00',
      end:   timeMatch ? parseTo24(timeMatch[2]) : '10:00',
      day,
      link: href,
      code: ''
    });
  });

  // FALLBACK: any teams link on page
  if (!classes.length) {
    const teamsLinks = Array.from(document.querySelectorAll('a[href*="teams.microsoft.com"], a[href*="teams.live.com"]'));
    teamsLinks.forEach((link, i) => {
      let card = link.parentElement;
      for (let d = 0; d < 10; d++) {
        if (!card) break;
        if (/\d{1,2}:\d{2}/i.test(card.innerText || '')) break;
        card = card.parentElement;
      }
      const cardText = (card || link.parentElement || document.body).innerText || '';
      const timeMatch = cardText.match(/(\d{1,2}:\d{2}\s*(?:AM|PM)?)\s*[-–]\s*(\d{1,2}:\d{2}\s*(?:AM|PM)?)/i);
      const boldEl = card && card.querySelector('strong, b, h3, h4, h5');
      classes.push({
        id: 'cls_fb_' + i,
        subject: (boldEl && boldEl.innerText.trim().split('\n')[0]) || ('Online Class ' + (i + 1)),
        start: timeMatch ? parseTo24(timeMatch[1]) : '09:00',
        end:   timeMatch ? parseTo24(timeMatch[2]) : '10:00',
        day: today,
        link: link.href,
        code: ''
      });
    });
  }

  // LAST RESORT: "Enter Online Classroom" text links
  if (!classes.length) {
    Array.from(document.querySelectorAll('a')).filter(a =>
      /enter online classroom|join class/i.test(a.textContent)
    ).forEach((link, i) => {
      classes.push({
        id: 'cls_txt_' + i,
        subject: 'Online Class ' + (i + 1),
        start: '09:00', end: '10:00',
        day: today, link: link.href, code: ''
      });
    });
  }

  // Deduplicate
  const seen = new Set();
  return classes.filter(c => {
    if (seen.has(c.link)) return false;
    seen.add(c.link); return true;
  });
}
