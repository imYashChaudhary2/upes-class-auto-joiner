<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=700&size=30&pause=1000&color=1D9E75&center=true&vCenter=true&width=600&lines=UPES+Class+Auto-Joiner+%F0%9F%8E%93;Never+Miss+a+Class+Again!;Auto-join+Teams+in+0+Clicks+%E2%9A%A1" alt="Typing SVG" />

<br/>

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-brightgreen?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Students](https://img.shields.io/badge/Built%20for-UPES%20Students-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

<br/>

![Built For](https://img.shields.io/badge/🎓_Built_for-UPES_Students-1D9E75?style=for-the-badge)
![Portal](https://img.shields.io/badge/🌐_Works_with-ecampus.upes.ac.in-4285F4?style=for-the-badge)
![Not Affiliated](https://img.shields.io/badge/⚠️_Not_affiliated_with-UPES_Administration-red?style=for-the-badge)

<br/>

[![Install](https://img.shields.io/badge/🚀_Install_Now-brightgreen?style=flat-square)](#-installation)
[![Setup](https://img.shields.io/badge/⚙️_Setup-blue?style=flat-square)](#️-setup-one-time-only)
[![How to Use](https://img.shields.io/badge/📖_How_to_Use-orange?style=flat-square)](#-how-to-use)
[![Report Bug](https://img.shields.io/badge/🐛_Report_Bug-red?style=flat-square)](https://github.com/imYashChaudhary2/upes-class-auto-joiner/issues)
[![Request Feature](https://img.shields.io/badge/💡_Request_Feature-yellow?style=flat-square)](https://github.com/imYashChaudhary2/upes-class-auto-joiner/issues)

</div>

---

## 💀 Your daily struggle before this extension
```yaml
🕐  Class at 9:00 AM
8:58 → Open laptop
8:59 → Open browser
8:59 → Search for iCampus
9:00 → Log in (forgot password again)
9:02 → Find timetable page
9:03 → Click "Enter Online Classroom"
9:03 → "Open in Teams app or browser?"
9:04 → Finally joined — professor already 4 mins in 💀
```

### ⚡ Your life after this extension
```yaml
9:00 AM → Teams opens automatically. You're in. ✅
```

---

## 🌟 Features at a Glance
```yaml
>>  Auto-join         →  Opens Teams at exact class time — zero clicks
>>  Live Status       →  Real-time badge - Live / Soon / Upcoming / Ended
>>  Today's View      →  All today's classes sorted by time
>>  Weekly Schedule   →  Full week overview in one place
>>  One-time Setup    →  Scrape once, works every day forever
>>  100% Private      →  No servers, no tracking, runs locally
>>  Smart Scraper     →  Reads directly from your open iCampus tab
>>  Notifications     →  Desktop alert before every class
```

---

## 🚀 Installation

### Prerequisites
- Google Chrome browser
- A UPES iCampus account with online classes

### Step 1 — Get the Code
```bash
git clone https://github.com/imYashChaudhary2/upes-class-auto-joiner.git
```

> Or click **Code → Download ZIP** and extract it

### Step 2 — Load into Chrome
```bash
# Open this in Chrome
chrome://extensions
```
```
✅ Toggle ON  →  Developer mode  (top right corner)
✅ Click      →  Load unpacked
✅ Select     →  the upes-extension folder
✅ Pin        →  the extension to your toolbar 📌
```

---

## ⚙️ Setup (One Time Only)

> ⏱️ Takes less than 30 seconds. Do it once. Never again.
```
Step 1 → Open https://myupes-beta.upes.ac.in/oneportal/app/auth/login
Step 2 → Log in → go to your timetable page
         (must see "Enter Online Classroom" links)
Step 3 → Click extension icon in toolbar
Step 4 → Setup tab → "Scrape classes from open portal tab"
Step 5 → 🎉 Done! Check Today tab to see your classes
```

---

## 📖 How to Use

### Today Tab — Your Daily Dashboard
```yaml
LIVE NOW   🟢  09:00 AM  →  Operating Systems       →  Join Now ✅
SOON       🟡  11:00 AM  →  Software Engineering    →  Join ⏳
UPCOMING   ⚫  02:00 PM  →  Data Structures         →  Join 🔜
ENDED      ✖️  08:00 AM  →  DCN                     →  Ended 🔒
```

### Auto-Join Toggle
```
🟢 ON  → Teams opens automatically at class start time
⚫ OFF → Manual mode — you click Join yourself
```

### Need to Re-scrape?
```
# Whenever schedule changes (new week, rescheduled class, new semester)
iCampus timetable page → Extension → Setup tab → Scrape classes
```

---

## 🗂️ Project Structure
```
upes-extension/
│
├── 📄 manifest.json    # Extension config (Manifest V3)
├── ⚙️  background.js    # Service worker — alarms, auto-join, scraper
├── 🖼️  popup.html       # Extension popup UI
├── 📜 popup.js         # Popup logic — rendering, events, join flow
├── 📜 content.js       # Content script for iCampus portal pages
│
├── 🖼️  icon16.png       # Toolbar icon      (16×16)
├── 🖼️  icon48.png       # Extensions page   (48×48)
├── 🖼️  icon128.png      # Web Store icon    (128×128)
│
├── 📄 .gitignore
├── 📄 LICENSE
└── 📄 README.md
```

---

## 🛠️ Tech Stack
```
Platform     →   Chrome Extension (Manifest V3)
Language     →   Vanilla JavaScript ES2022
Scheduling   →   Chrome Alarms API
Storage      →   Chrome Storage API
Scraping     →   Chrome Scripting API
UI           →   HTML + CSS (zero frameworks)
Bundle size  →   < 15KB total 🪶
Dependencies →   Zero. Absolutely none.
```

---

## 🔐 Privacy & Security
```diff
+ Credentials are NEVER stored or transmitted anywhere
+ All data lives 100% on your device (Chrome local storage)
+ No external servers — no AWS, no Firebase, nothing
+ No analytics, no tracking, no ads. Ever.
+ Only accesses upes.ac.in and teams.microsoft.com
+ Fully open source — audit every single line yourself
```

---

## ❓ Troubleshooting

> 💡 **Something not working?** — 99% of issues are solved by one of these.
```yaml
❌ No classes found      →  Open timetable page first, then scrape
❌ Not auto-joining      →  Toggle ON + keep Chrome open at class time
❌ Wrong time            →  Set clock to IST (UTC+5:30)
❌ Wrong meeting         →  Re-scrape every Monday
❌ Icon not visible      →  Chrome toolbar 🧩 → UPES Auto-Joiner → 📌
❌ Opens in browser      →  Teams link → "Open in app" → "Always open"
❌ Broke after update    →  chrome://extensions → 🔄 refresh
```

---

## 🤝 Contributing
```bash
# 1. Fork the repo
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/upes-class-auto-joiner.git

# 3. Create your feature branch
git checkout -b feat/your-feature-name

# 4. Commit your changes
git commit -m "feat: add amazing feature"

# 5. Push and open a Pull Request
git push origin feat/your-feature-name
```

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for more information.

---

<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=18&pause=1000&color=F7DF1E&center=true&vCenter=true&width=500&lines=If+this+saved+you+from+being+late...;...drop+a+%E2%AD%90+it+means+a+lot!" alt="Typing SVG" />

[![Star](https://img.shields.io/github/stars/imYashChaudhary2/upes-class-auto-joiner?style=for-the-badge&logo=github&color=yellow&label=⭐%20Star%20this%20repo)](https://github.com/imYashChaudhary2/upes-class-auto-joiner/stargazers)
[![Fork](https://img.shields.io/github/forks/imYashChaudhary2/upes-class-auto-joiner?style=for-the-badge&logo=github&color=blue&label=🍴%20Fork)](https://github.com/imYashChaudhary2/upes-class-auto-joiner/network/members)
[![Issues](https://img.shields.io/github/issues/imYashChaudhary2/upes-class-auto-joiner?style=for-the-badge&logo=github&color=red&label=🐛%20Issues)](https://github.com/imYashChaudhary2/upes-class-auto-joiner/issues)

*"I got tired of being 5 minutes late to every online class. So I built this."*

**Made with ❤️ + ☕ + 2AM energy by**

![Author](https://img.shields.io/badge/Yash_Chaudhary-BCA_%7C_UPES_Dehradun_%7C_Sem_IV-1D9E75?style=for-the-badge&logo=graduation-cap&logoColor=white)

[![GitHub](https://img.shields.io/badge/GitHub-imYashChaudhary2-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/imYashChaudhary2)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/imYashChaudhary2)

---

*Built to solve a real problem, one class at a time.* 🎓

</div>