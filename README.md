# 🌱 AgroFusion — Frontend

> Beautiful, responsive web interface for the AgroFusion AI crop recommendation system.

![React](https://img.shields.io/badge/React-18-blue)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)
![Responsive](https://img.shields.io/badge/Responsive-All%20Devices-green)

---

## 🚀 Live Application

```
https://agrofusion-frontend.vercel.app
```

---

## 📌 Project Overview

AgroFusion is a Final Year B.Tech project that helps farmers and agriculturalists make data-driven crop decisions. The frontend provides a clean, intuitive interface to:

- Enter soil composition, climate conditions, and market demand data
- Get AI-powered crop recommendations instantly
- View top 5 crops ranked by confidence score
- Works seamlessly on desktop, tablet, and mobile

---

## 🗂️ Project Structure

```
agrofusion-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CropForm.js        # Input form with all 8 parameters
│   │   ├── ResultCard.js      # Best crop recommendation card
│   │   └── TopCropsList.js    # Top 5 crops with confidence bars
│   ├── services/
│   │   └── api.js             # Axios API calls to backend
│   ├── App.js                 # Main app with wake-up logic
│   └── App.css                # Full design system with media queries
├── package.json
└── README.md
```

---

## 🔧 Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Axios** | HTTP requests to backend API |
| **CSS3** | Custom design system with variables |
| **Google Fonts** | Fraunces (display) + DM Sans (body) |
| **Vercel** | Deployment and hosting |

---

## 🎨 Design System

| Property | Value |
|---|---|
| **Primary Font** | Fraunces (serif display) |
| **Body Font** | DM Sans |
| **Theme** | Organic earthy — forest greens, harvest gold, cream |
| **Style** | Botanical / Agricultural |

### Color Palette
```
Forest Green  →  #2D4A1E
Leaf Green    →  #5C8A3C
Sage          →  #A8C97F
Harvest Gold  →  #C8960C
Cream         →  #F8F4EC
Soil Brown    →  #6B4423
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Device |
|---|---|
| `1024px` | Small laptop |
| `960px` | Tablet landscape |
| `768px` | Tablet portrait |
| `580px` | Large mobile |
| `400px` | Small mobile |

---

## ✨ Features

- ✅ **Smart Backend Wake-up** — pings backend on page load to minimize cold start delay
- ✅ **Server Status Indicator** — shows live connection status in header
- ✅ **Wake Banner** — notifies user while backend is starting up
- ✅ **Grouped Input Fields** — soil, climate, and market inputs clearly separated
- ✅ **Confidence Bars** — visual progress bars showing crop confidence scores
- ✅ **Crop Emojis** — auto-matched emojis for all 22 supported crops
- ✅ **Error Handling** — clear error messages for invalid inputs or API failures
- ✅ **Loading States** — animated spinner during prediction
- ✅ **Fully Responsive** — works on all screen sizes

---

## 🛠️ Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/ShivaDarshan000/agrofusion-frontend.git
cd agrofusion-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm start
```

### 4. Open in browser
```
http://localhost:3000
```

> ⚠️ Make sure the backend is running at `http://127.0.0.1:8000` for local development.

---

## 🔗 API Connection

The frontend connects to the AgroFusion backend API:

```javascript
// src/services/api.js
const API_URL = "https://agrofusion-backend.onrender.com";
```

To run with local backend, change to:
```javascript
const API_URL = "http://127.0.0.1:8000";
```

---

## 📊 Sample Input Values

| Field | Example Value |
|---|---|
| Nitrogen (N) | 90 |
| Phosphorus (P) | 42 |
| Potassium (K) | 43 |
| Temperature | 24.5 |
| Humidity | 82 |
| pH | 6.5 |
| Rainfall | 210 |
| Demand Index | 70 |

---

## ☁️ Deployment

Deployed on **Vercel** with automatic redeployment on every push to `main` branch.

---

## 🔗 Related Repository

- **Backend API:** [agrofusion-backend](https://github.com/ShivaDarshan000/agrofusion-backend)

