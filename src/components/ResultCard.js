import React from "react";

const CROP_EMOJIS = {
  rice: "🌾", wheat: "🌾", maize: "🌽", chickpea: "🫘", kidneybeans: "🫘",
  pigeonpeas: "🫘", mothbeans: "🫘", mungbean: "🫘", blackgram: "🫘",
  lentil: "🫘", pomegranate: "🍎", banana: "🍌", mango: "🥭",
  grapes: "🍇", watermelon: "🍉", muskmelon: "🍈", apple: "🍎",
  orange: "🍊", papaya: "🍈", coconut: "🥥", cotton: "🪴",
  jute: "🌿", coffee: "☕",
};

const getEmoji = (crop) => CROP_EMOJIS[crop?.toLowerCase()] || "🌱";

const ResultCard = ({ bestCrop }) => {
  if (!bestCrop) return null;

  return (
    <div className="result-card">
      <div className="result-card-inner">
        <div className="result-label">⭐ Top Recommendation</div>
        <div className="result-heading">Best crop for your conditions</div>
        <div className="result-crop-name">
          {getEmoji(bestCrop)} {bestCrop.charAt(0).toUpperCase() + bestCrop.slice(1)}
        </div>
        <div className="result-tag">
          ✅ AI Confidence Pick
        </div>
      </div>
    </div>
  );
};

export default ResultCard;