# 🩺 PVD Padhividass Healthcare Academy

> **Best-in-Class Medical Coding Training Academy with 100% Pass & Placement Guarantee.**

Welcome to the official repository for the **PVD Padhividass Healthcare** web platform. This website is built using modern web design principles and state-of-the-art architectures to deliver an ultra-premium, fast, and fully responsive user experience.

---

## ✨ Features

- 💎 **Premium UI/UX:** Styled using modern fonts (Inter & Outfit), harmony palettes, rich glassmorphism effects, smooth hover micro-animations, and full responsiveness.
- 📬 **Real-time Student Inquiry Sync:** Leads captured through our customized inquiry forms are synchronized in real-time to your Cloud database.
- 🛡️ **Self-Healing Firestore Circuit Breaker:** Robust offline capability. If the database connection drops or experiences a configuration mismatch, the app automatically transitions to client-side `localStorage` cache fallback with zero console spams or connection loop locks.
- 🔒 **Secure Admin Dashboard:** A password-protected student manager dashboard allowing admins to view, audit, and filter inquiries.
- 🎨 **Non-Destructive Admin Management:** Deleting an inquiry on the Admin dashboard filters and hides it from the client view locally, while permanently preserving the original record in your Cloud database for analytical integrity.
- 📈 **Perfect SEO & Sharing Cards:** Comprehensive Open Graph (OG) tag parameters mapping so sharing links on Instagram, WhatsApp, or Facebook generates beautiful rich link cards with custom logos and titles.

---

## 🛠️ Technology Stack

- **Core Framework:** React 19 + TypeScript + Vite 6
- **Styling:** Vanilla CSS + TailwindCSS V4
- **Database & Sync:** Cloud Firestore SDK v12
- **Authentication:** Firebase Auth
- **Animations:** Framer Motion
- **Icons:** Lucide React

---

## 🚀 Quick Start & Installation

### 1. Clone the repository:
```bash
git clone https://github.com/Gokulraj-374/PVD-healthcare.git
cd PVD-healthcare
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Setup environment variables:
Create a local `.env` file in the root directory (Git is configured to ignore this file to protect your API keys):
```bash
cp .env.example .env
```
Fill out the Firebase variables inside `.env` with your active keys.

### 4. Run local development server:
```bash
npm run dev
```
Open `http://localhost:3000/PVD-healthcare` in your browser.

---

## ☁️ Firebase Cloud setup Guide

To connect your project to a live Firebase backend database:

1. **Create Firestore Instance:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click **Firestore Database** in the left menu.
   - Click **Create database** -> Choose Location -> Select **Start in test mode** -> Click **Create**.
2. **Register Web App Configuration:**
   - Go to Project Settings -> Select the Web icon (`</>`) -> Give it a name.
   - Copy the configuration object and paste the variables directly into your local `.env` file (or `firebase-applet-config.json`).

---

## 📦 Deployment (GitHub Pages)

The project is fully pre-configured for subpath hosting. To compile and deploy the production bundle:

```bash
npm run build
```

This compiles optimized chunks (react, firebase, icons) and exports them cleanly to the `dist/` directory, ready to serve!

---

## 🛡️ License
Designed and maintained by the **PVD Padhividass Healthcare Team**. All rights reserved.
