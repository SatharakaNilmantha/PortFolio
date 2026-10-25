<div align="center">

<a href="https://SatharakaNilmantha.github.io/PortFolio/">
  <img src="./src/assets/sn.png" alt="Satharaka Nilmantha Logo" width="120" style="border-radius: 24px; filter: drop-shadow(0 0 24px rgba(0, 240, 255, 0.45));" />
</a>

# ⚡ Satharaka Nilmantha — Modern Cyber Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-00F0FF?style=for-the-badge&logo=googlechrome&logoColor=black)](https://SatharakaNilmantha.github.io/PortFolio/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  A state-of-the-art developer portfolio engineered with a sleek cyber aesthetic, ambient 3D particle networks, fluid micro-interactions, verified credentials gallery, and direct in-page transmission.
</p>

[Explore Live Demo 🚀](https://SatharakaNilmantha.github.io/PortFolio/) • [Report Issue](https://github.com/SatharakaNilmantha/PortFolio/issues) • [Request Feature](https://github.com/SatharakaNilmantha/PortFolio/issues)

---

</div>

## 📑 Table of Contents

- [🌌 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack & Architecture](#️-tech-stack--architecture)
- [📂 Project Structure](#-project-structure)
- [🏅 Verified Credentials Timeline (2026 – 2024)](#-verified-credentials-timeline-2026--2024)
- [💻 Featured Projects Showcase](#-featured-projects-showcase)
- [🚀 Getting Started](#-getting-started)
- [📦 Build & Automated Deployment](#-build--automated-deployment)
- [🎨 Design System & Customization](#-design-system--customization)
- [📬 Contact & Connect](#-contact--connect)

---

## 🌌 Overview

This repository hosts the source code for the personal portfolio of **Satharaka Nilmantha**, a Software Developer and Undergraduate Engineer. Built with **React 19**, **Vite 6**, and **Three.js**, the application merges high-performance web architecture with an immersive cyber glassmorphism design system.

---

## ✨ Key Features

- **🌐 Ambient 3D Cyber Background (`Three.js`)**: Real-time particle network and digital cosmos that smoothly tracks mouse gestures with theme-responsive lighting.
- **🛡️ Authentic Frosted Glass Navigation**: Floating navbar featuring blur saturation, smooth scroll spy, and active section tracking.
- **💼 Work Experience Timeline**: Interactive career trajectory tracking software development roles, biometric API integrations, microservices architecture, and enterprise deployments.
- **🚀 Featured Work & Innovations**:
  - Filterable by Category (*Full-Stack, IoT, Security, All*).
  - High-resolution project banners with dynamic hover reveals, GitHub repository access, and technology stack pills.
- **🏆 Verified Certificates & Achievements Gallery**:
  - Arranged in **descending chronological order** from **2026 down to 2024**.
  - Interactive **high-resolution lightbox document viewer** rendered via React Portals with keyboard navigation (`Escape`) and floating controls.
  - Category filters (*All, Internships, Competitions, Courses, Programs*).
  - Direct accredited verification links (e.g. University of Moratuwa CODL verification).
- **✉️ Direct In-Page Email Messaging**:
  - Transmits messages directly to the author's inbox via AJAX without opening external email clients or redirecting away from the page.
  - Real-time in-page success/error state banners with cyber glow.
- **🌓 Dual Theme Architecture**: Seamless transitions between Dark (OLED Black) and Light (Cyber Slate) modes with persistent storage.
- **📱 Fully Responsive**: Pixel-perfect layout tailored for mobile, tablet, laptop, and ultra-wide displays.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
|---|---|
| **Core Framework** | [React 19](https://react.dev/), [React DOM 19](https://react.dev/), [Vite 6](https://vitejs.dev/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **3D Graphics & Physics** | [Three.js](https://threejs.org/) (Custom particle cosmos with mouse-reactive camera) |
| **Animation & Micro-interactions** | [Framer Motion 12](https://www.framer.com/motion/) (Scroll-driven entrance, layout transitions, modal popovers) |
| **Icons & Media** | [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, SimpleIcons) |
| **UI Components** | [React-Bootstrap 2](https://react-bootstrap.github.io/), Vanilla CSS Design Tokens |
| **Form Processing** | FormSubmit AJAX API (Direct in-page email transmission) |
| **Deployment & Hosting** | [GitHub Pages](https://pages.github.com/) (`gh-pages`) |

---

## 📂 Project Structure

```text
PortFolio/
├── public/                     # Static web assets
├── src/
│   ├── assets/                 # Profile media, certificate documents, project media, CV PDF
│   │   ├── sn.png              # Personal cyber brand icon
│   │   ├── cert_cybermas.jpg   # Cyber Mas Solutions internship certificate (2026)
│   │   ├── cert_startup_essentials.png # Uki Startup Essentials certificate (2025)
│   │   ├── cert_spiritx.png    # SpiritX 2025 competition certificate (2025)
│   │   ├── cert_moraxtreme.png # MoraXtreme 9.0 competition certificate (2024)
│   │   ├── cert_python_uom.png # Python for Beginners accredited certificate (2024)
│   │   ├── cert_coderally.jpg  # CodeRally 6.0 Advanced Tier certificate (2024)
│   │   ├── cert_java_codsoft.jpg # CodSoft Java internship certificate (2024)
│   │   └── Gunarathna A.M.S.N. cv.pdf # Official Curriculum Vitae
│   ├── components/
│   │   ├── About/              # Bio, skillset grid, academic foundation
│   │   ├── AiWorldBackground/  # Three.js 3D cosmic background
│   │   ├── Certificates/       # 2026-2024 Timeline, credentials gallery & modal lightbox
│   │   ├── Contact/            # In-page message form, contact channels & resume trigger
│   │   ├── Experience/         # Professional timeline & project accordions
│   │   ├── Footer/             # Social links, copyright & back-to-top
│   │   ├── Hero/               # Header intro, typing animation, primary CTAs
│   │   ├── Navbar/             # Floating frosted-glass navigation & theme switcher
│   │   └── Projects/           # Filterable innovation showcase
│   ├── App.css                 # Global layout & transparent stacking contexts
│   ├── App.jsx                 # Application entry point & theme management
│   ├── index.css               # Cyber palette design system, typography & watermarks
│   └── main.jsx                # DOM root initialization
├── package.json                # Project dependencies & npm scripts
├── vite.config.js              # Vite bundler configuration
└── README.md                   # Project documentation
```

---

## 🏅 Verified Credentials Timeline (2026 – 2024)

The Certificates section showcases verified milestones arranged in descending chronological order:

| Year | Milestone | Issuer | Type | Verification / Document |
|:---:|---|---|:---:|:---:|
| **2026** | **Software Development Internship** | Cyber Mas Solutions (Pvt) Ltd. | Internship | High-Res Document Preview & Modal |
| **2025** | **Startup Essentials Program** | Ūki – A Technology School by Yarl IT Hub | Program | High-Res Document Preview & Modal |
| **2025** | **SpiritX 2025 (Stage 1 – Xcelerate)** | MoraSpirit 360 (Team Dev Titans) | Competition | High-Res Document Preview & Modal |
| **2024** | **MoraXtreme 9.0 Algorithmic Competition** | IEEE Computer Society – University of Moratuwa | Competition | High-Res Document Preview & Modal |
| **2024** | **Python for Beginners (Online Learning)** | University of Moratuwa (CODL & CSE Dept) | Course | [Verify Online (t1u0GEpwYP)](https://open.uom.lk/verify) |
| **2024** | **CodeRally 6.0 (Advanced Tier)** | IEEE Computer Society Chapter of IIT | Competition | High-Res Document Preview & Modal |
| **2024** | **Java Programming Virtual Internship** | CodSoft (ISO 9001:2015 & MSME Certified) | Internship | Credential ID: `15bb21f` |

---

## 💻 Featured Projects Showcase

- **HealthHub** — Smart Hospital Management System (*Spring Boot, React.js, MySQL, Postman QA*)
- **Smart Pet Feeder** — IoT Automated Feeding System (*ESP32, C, React Native, Firebase*)
- **ProConnect** — Low-Latency WebRTC Video Conferencing Platform (*WebRTC, Node.js, Socket.io*)
- **BookMyDoctor** — Automated Appointment & Chatbot System (*Spring Boot, React.js, Twilio SMS*)
- **SmartIDS** — ML-Based Intrusion Detection for Wi-Fi Networks (*Python, XGBoost, Scikit-Learn, pfSense*)

---

## 🚀 Getting Started

Follow these instructions to run the portfolio locally on your machine.

### **Prerequisites**
- [Node.js](https://nodejs.org/) (`v18.x` or higher recommended)
- `npm` or `yarn`

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SatharakaNilmantha/PortFolio.git
   cd PortFolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/PortFolio/` (or the port displayed in your terminal).

---

## 📦 Build & Automated Deployment

### **Compile Production Bundle**
```bash
npm run build
```
Generates minified, production-ready static assets in the `dist/` directory.

### **Preview Production Build Locally**
```bash
npm run preview
```

### **Automated Deployment to GitHub Pages**
```bash
npm run deploy
```
*(Executes `predeploy` to trigger a clean `vite build`, then automatically commits and publishes the `dist` folder to the `gh-pages` branch).*

---

## 🎨 Design System & Customization

The project uses custom CSS properties defined in `src/index.css`:
- **Primary Cyber Blue**: `#007AFF`
- **Accent Cyan**: `#00F0FF`
- **Accent Purple**: `#8A2BE2`
- **OLED Surface**: `#050505`
- **Dark Glass Background**: `rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(18px)`

---

## 📬 Contact & Connect

**Satharaka Nilmantha**  
- **Email**: [satharakanilmantha1@gmail.com](mailto:satharakanilmantha1@gmail.com)  
- **LinkedIn**: [linkedin.com/in/satharaka-nilmantha](https://www.linkedin.com/in/satharaka-nilmantha-aa7b96297/)  
- **GitHub**: [github.com/SatharakaNilmantha](https://github.com/SatharakaNilmantha)  
- **LeetCode**: [leetcode.com/Satharaka](https://leetcode.com/Satharaka)  

---

<div align="center">

Made with 💙 by **Satharaka Nilmantha**  
© 2026 All Rights Reserved.

</div>
