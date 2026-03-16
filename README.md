<div align="center">

# 🎓 UPES Class Auto-Joiner

**A Chrome extension that automatically joins your UPES iCampus online classes on Microsoft Teams.**  
No more hunting for links. No more missing the first 5 minutes. Just open your laptop and you're in.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-brightgreen?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**Built for UPES students, by a UPES student.**  
Works with the UPES iCampus portal (`ecampus.upes.ac.in`)

> ⚠️ This project is not affiliated with or endorsed by UPES or its administration.

</div>

---

## 📸 Overview

This extension sits in your Chrome toolbar and does three things:

1. **Scrapes** your iCampus timetable — reads all your Teams meeting links directly from the portal page you already have open
2. **Displays** today's classes with live/soon status badges so you always know what's next
3. **Auto-joins** — opens your Teams meeting automatically at class time, every day, without you touching anything

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 Auto-join | Opens Teams meeting link automatically at the exact start time |
| 📋 Today's schedule | Live view of all classes for today with countdown status |
| 🟢 Live indicator | Green dot when class is active, yellow when starting in 15 min |
| 📅 Weekly view | Full weekly schedule across all days in one place |
| 🔒 100% local | No server, no login automation — everything runs in your browser |
| ⚡ One-time setup | Scrape once, auto-join runs every day automatically |

---

## 🚀 Installation

### Prerequisites
- Google Chrome browser
- A UPES iCampus account with online classes

### Step 1 — Get the code

**Option A — Clone with Git:**
```bash
git clone https://github.com/YOUR_USERNAME/upes-class-auto-joiner.git
cd upes-class-auto-joiner
```

**Option B — Download ZIP:**
- Click the green **Code** button above → **Download ZIP**
- Extract the ZIP on your computer

### Step 2 — Load into Chrome

1. Open Chrome and navigate to:
   ```
   chrome://extensions
   ```
2. Toggle **Developer mode** ON (switch in the top-right corner)

   ![Developer Mode](https://img.shields.io/badge/Developer%20Mode-ON-1D9E75?style=flat-square)

3. Click **Load unpacked**
4. Select the `upes-extension` folder (the one containing `manifest.json`)
5. The extension icon will appear in your Chrome toolbar ✅

---

## ⚙️ Setup (One Time Only)

> You only need to do this once — or whenever your weekly schedule changes.

### Step 1 — Open iCampus
Go to your UPES iCampus portal and log in:
```
https://ecampus.upes.ac.in
```

### Step 2 — Navigate to your timetable
Go to the page where you can see your classes listed with **"Enter Online Classroom"** links visible.

### Step 3 — Scrape your classes
1. Click the **UPES Auto-Joiner** icon in your Chrome toolbar
2. Go to the **Setup** tab
3. Click **"Scrape classes from open portal tab"**
4. The extension reads all your classes and Teams links instantly

### Step 4 — You're done! ✅
Switch to the **Today** tab — you'll see all your classes for today loaded up and ready.

---

## 📖 How to Use

### Today Tab
Shows all classes scheduled for today, sorted by time.

```
🟢 LIVE NOW    → Class is currently in session    → [Join Now] button glows green
🟡 SOON        → Class starts in under 15 minutes → [Join]     button shown
⚫ UPCOMING    → Class is later today             → [Join]     button shown  
   ENDED       → Class is over                    → [Ended]    button disabled
```

### Auto-Join
With **Auto-join** toggled ON (default), the extension opens the Teams link automatically **at the exact class start time** — you don't need to do anything. Just keep Chrome open.

### All Classes Tab
View your complete weekly schedule. Useful to verify all classes were scraped correctly.

### Re-scraping
If your schedule changes (new semester, substitute class, etc.):
1. Go to iCampus → navigate to timetable page
2. Extension → Setup → **Scrape classes from open portal tab**
3. Your saved classes are updated

---

## 🗂️ Project Structure

```
upes-extension/
│
├── manifest.json       # Extension configuration (Manifest V3)
├── background.js       # Service worker — handles alarms, auto-join, scraping
├── popup.html          # Extension popup interface
├── popup.js            # Popup logic — rendering, events, join flow
├── content.js          # Content script — runs on iCampus portal pages
│
├── icon16.png          # Toolbar icon (16×16)
├── icon48.png          # Extensions page icon (48×48)
├── icon128.png         # Chrome Web Store icon (128×128)
│
├── .gitignore
└── README.md
```

---

## 🛠️ Tech Stack

- **Manifest V3** — Latest Chrome extension standard
- **Chrome Alarms API** — Triggers auto-join at exact class time
- **Chrome Storage API** — Persists your schedule locally
- **Chrome Scripting API** — Reads class data from iCampus portal
- **Vanilla JavaScript** — Zero dependencies, lightweight and fast

---

## 🔐 Privacy & Security

- ✅ Your iCampus credentials are **never stored or transmitted**
- ✅ All data stays **100% on your device** (Chrome local storage)
- ✅ No external servers, no analytics, no tracking
- ✅ The extension only has access to `upes.ac.in` and `teams.microsoft.com` domains
- ✅ Open source — read every line of code yourself

---

## ❓ Troubleshooting

| Problem | Solution |
|---------|----------|
| "No classes found on this page" | Make sure you're on the timetable page where "Enter Online Classroom" links are visible before scraping |
| Extension not auto-joining | Check that Auto-join toggle is ON in the popup |
| Class opened at wrong time | Verify your system clock is correct |
| Teams link opens wrong meeting | Re-scrape from iCampus to refresh saved links |
| Extension icon not visible | Click the puzzle piece 🧩 icon in Chrome toolbar → pin UPES Auto-Joiner |

---

## 🤝 Contributing

Contributions are welcome! If you find a bug or want to add a feature:

1. Fork the repository
2. Create a new branch: `git checkout -b feat/your-feature-name`
3. Make your changes and commit: `git commit -m "feat: describe your change"`
4. Push to your fork: `git push origin feat/your-feature-name`
5. Open a **Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** — you're free to use, modify, and distribute it.

---

<div align="center">

Made with ❤️ by **Yash Chaudhary**  
BCA · UPES Dehradun · Semester IV

*Built to solve a real problem, one class at a time.*

</div>
