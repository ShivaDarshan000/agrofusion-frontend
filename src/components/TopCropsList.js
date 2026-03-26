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

const rankClass = (i) => {
  if (i === 0) return "rank-1";
  if (i === 1) return "rank-2";
  if (i === 2) return "rank-3";
  return "rank-n";
};

const TopCropsList = ({ recommendations }) => {
  if (!recommendations || recommendations.length === 0) return null;

  const maxConf = recommendations[0]?.confidence || 100;

  return (
    <div className="top-crops-card">
      <div className="top-crops-title">
        🌿 All Top Recommendations
      </div>

      <ul className="crop-list">
        {recommendations.map((item, index) => (
          <li
            key={index}
            className={`crop-item${index === 0 ? " top-crop" : ""}`}
          >
            <div className={`crop-rank ${rankClass(index)}`}>
              {index === 0 ? "★" : index + 1}
            </div>

            <span style={{ fontSize: "1.2rem" }}>{getEmoji(item.crop)}</span>

            <span className="crop-name">
              {item.crop.charAt(0).toUpperCase() + item.crop.slice(1)}
            </span>

            <div className="crop-bar-wrap">
              <div
                className="crop-bar"
                style={{ width: `${(item.confidence / maxConf) * 100}%` }}
              />
            </div>

            <span className="crop-confidence">
              {item.confidence.toFixed(1)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCropsList;