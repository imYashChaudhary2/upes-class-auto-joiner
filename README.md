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

> 🎓 **Built for UPES students, by a UPES student.**
> Works with the UPES iCampus portal — `ecampus.upes.ac.in`

⚠️ *This project is not affiliated with or endorsed by UPES or its administration.*

<br/>

[🚀 Install Now](#-installation) · [⚙️ Setup](#️-setup-one-time-only) · [📖 How to Use](#-how-to-use) · [🐛 Report Bug](https://github.com/imYashChaudhary2/upes-class-auto-joiner/issues) · [💡 Request Feature](https://github.com/imYashChaudhary2/upes-class-auto-joiner/issues)

<br/>

---

### 💀 Your daily struggle before this extension
```
🕐 Class at 9:00 AM
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
```
9:00 AM → Teams opens automatically. You're in. ✅
```

</div>

---

## 🌟 Features at a Glance

<div align="center">

| | Feature | What it does |
|---|---------|-------------|
| 🤖 | **Auto-join** | Opens Teams at exact class time — zero clicks |
| 🟢 | **Live Status** | Real-time badge: Live / Soon / Upcoming / Ended |
| 📋 | **Today's View** | All today's classes sorted by time |
| 📅 | **Weekly Schedule** | Full week overview in one place |
| ⚡ | **One-time Setup** | Scrape once, works every day forever |
| 🔒 | **100% Private** | No servers, no tracking, runs locally |
| 🧠 | **Smart Scraper** | Reads directly from your open iCampus tab |
| 🔔 | **Notifications** | Desktop alert before every class |

</div>

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
```
┌─────────────────────────────────────────────────┐
│  🟢 LIVE NOW   9:00 AM   Operating Systems      │  → [Join Now]
│  🟡 SOON      11:00 AM   Software Engineering   │  → [Join]
│  ⚫ UPCOMING   2:00 PM   Data Structures        │  → [Join]
│     ENDED      8:00 AM   DCN                    │  → [Ended]
└─────────────────────────────────────────────────┘
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

> 💡 *Something not working? 99% of issues are solved by one of these.*
```diff
PROBLEM                                  SOLUTION
-----------------------------------------------------------------
- No classes found on this page          → Go to timetable page where "Enter Online Classroom" links are visible, then scrape
- Extension not auto-joining             → Auto-join toggle ON + Chrome must be open at class time
- Class opened at wrong time             → Set system clock IST (UTC+5:30) → Date & Time → Auto
- Wrong Teams meeting opened             → Re-scrape every Monday — links change weekly
- Extension icon not visible             → Click 🧩 Chrome toolbar → UPES Auto-Joiner → 📌 pin
- Teams opens in browser not app         → Open Teams link → "Open in app" → "Always open in app"
- Broke after Chrome update              → chrome://extensions → find extension → 🔄 refresh
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

### 🙌 If this saved you from being late to class — drop a ⭐

---

**Made with ❤️ + ☕ + 2AM energy by**

### Yash Chaudhary
**BCA · UPES Dehradun · Semester IV**

[![GitHub](https://img.shields.io/badge/GitHub-imYashChaudhary2-181717?style=for-the-badge&logo=github)](https://github.com/imYashChaudhary2)

<br/>

*"I got tired of being 5 minutes late to every online class. So I built this."*

</div>