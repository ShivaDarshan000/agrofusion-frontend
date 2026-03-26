import React, { useState } from "react";
import CropForm from "./components/CropForm";
import ResultCard from "./components/ResultCard";
import TopCropsList from "./components/TopCropsList";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleResult = (data) => {
    setResult(data);
  };

  return (
    <div className="app">
      {/* Background botanical SVG layer */}
      <div className="bg-layer" aria-hidden="true">
        <svg className="botanical-bg" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.06">
            <path d="M-60 400 Q200 100 500 300 Q800 500 1100 200 Q1300 100 1500 300" stroke="#A8C97F" strokeWidth="2" fill="none"/>
            <path d="M-60 600 Q300 300 600 500 Q900 700 1200 400 Q1380 300 1500 500" stroke="#7BAE5E" strokeWidth="1.5" fill="none"/>
            <circle cx="120" cy="150" r="80" fill="#5C8A3C" />
            <circle cx="1320" cy="700" r="100" fill="#3D6B2A" />
            <circle cx="700" cy="50" r="60" fill="#A8C97F" />
            {/* Leaf shapes */}
            <ellipse cx="200" cy="750" rx="120" ry="40" fill="#6BA34A" transform="rotate(-30 200 750)" />
            <ellipse cx="1200" cy="200" rx="90" ry="30" fill="#5C8A3C" transform="rotate(20 1200 200)" />
            <ellipse cx="900" cy="820" rx="140" ry="45" fill="#4A7A35" transform="rotate(-15 900 820)" />
            {/* Soil texture dots */}
            {[...Array(30)].map((_, i) => (
              <circle
                key={i}
                cx={Math.sin(i * 47.3) * 700 + 720}
                cy={Math.cos(i * 31.7) * 400 + 450}
                r={Math.abs(Math.sin(i * 13)) * 4 + 1}
                fill="#8B6914"
                opacity="0.4"
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo-wrap">
            <span className="logo-icon">🌱</span>
            <div>
              <span className="logo-text">AgroFusion</span>
              <span className="logo-tag">Intelligent Crop Intelligence</span>
            </div>
          </div>
          <nav className="header-nav">
            <span className="nav-badge">AI-Powered</span>
            <span className="nav-badge soil">Soil • Climate • Market</span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-label">Precision Agriculture System</div>
          <h1 className="hero-title">
            Grow Smarter.<br />
            <span className="hero-accent">Harvest Better.</span>
          </h1>
          <p className="hero-subtitle">
            Enter your soil nutrients, climate conditions, and market data — 
            our ML model will recommend the most profitable crops for your land.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">22+</span>
              <span className="stat-label">Crop Varieties</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">Data Sources</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">RF</span>
              <span className="stat-label">Algorithm</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <svg className="hero-leaf" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 180 C60 140 20 100 40 50 C60 0 140 0 160 50 C180 100 140 140 100 180Z" fill="#5C8A3C" opacity="0.9"/>
            <path d="M100 180 L100 50" stroke="#A8C97F" strokeWidth="2" opacity="0.6"/>
            <path d="M100 150 Q130 130 145 100" stroke="#A8C97F" strokeWidth="1.5" fill="none" opacity="0.5"/>
            <path d="M100 120 Q70 100 55 70" stroke="#A8C97F" strokeWidth="1.5" fill="none" opacity="0.5"/>
            <path d="M100 90 Q125 75 135 55" stroke="#A8C97F" strokeWidth="1.5" fill="none" opacity="0.4"/>
          </svg>
        </div>
      </section>

      {/* Main content */}
      <main className="main-content">
        <div className="form-section">
          <div className="section-header">
            <div className="section-label">Step 1</div>
            <h2 className="section-title">Input Parameters</h2>
            <p className="section-desc">Provide your field's soil composition, climate readings, and market demand index</p>
          </div>
          <CropForm setResult={handleResult} setLoading={setLoading} />
        </div>

        <div className="results-section">
          <div className="section-header">
            <div className="section-label">Step 2</div>
            <h2 className="section-title">Recommendations</h2>
            <p className="section-desc">AI-ranked crops based on your specific conditions</p>
          </div>
          {loading ? (
            <div className="loading-state">
              <div className="loader-ring" />
              <p>Analyzing soil-climate-market matrix…</p>
            </div>
          ) : result ? (
            <>
              <ResultCard bestCrop={result.best_crop} />
              <TopCropsList recommendations={result.recommendations} />
            </>
          ) : (
            <div className="empty-state">
              <svg viewBox="0 0 100 100" className="empty-icon">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#5C8A3C" strokeWidth="2" strokeDasharray="6 4" opacity="0.4"/>
                <text x="50" y="55" textAnchor="middle" fontSize="32">🌾</text>
              </svg>
              <p>Your crop recommendations will appear here after analysis</p>
            </div>
          )}
        </div>
      </main>

      {/* How it works */}
      <section className="how-it-works">
        <h2 className="how-title">How AgroFusion Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon-wrap soil-bg">🧪</div>
            <h3>Soil Analysis</h3>
            <p>Nitrogen, Phosphorus, Potassium & pH values determine soil suitability for different crops</p>
          </div>
          <div className="step-card">
            <div className="step-icon-wrap climate-bg">🌦️</div>
            <h3>Climate Matching</h3>
            <p>Temperature, humidity and rainfall patterns are matched against optimal growing conditions</p>
          </div>
          <div className="step-card">
            <div className="step-icon-wrap market-bg">📈</div>
            <h3>Market Intelligence</h3>
            <p>Demand index derived from commodity market prices ensures your crop will be profitable</p>
          </div>
          <div className="step-card">
            <div className="step-icon-wrap ai-bg">🤖</div>
            <h3>AI Recommendation</h3>
            <p>Random Forest classifier trained on 22+ crops returns ranked predictions with confidence scores</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>AgroFusion &nbsp;|&nbsp; Final Year B.Tech Project &nbsp;|&nbsp; Soil · Climate · Market Intelligence</p>
      </footer>
    </div>
  );
}

export default App;