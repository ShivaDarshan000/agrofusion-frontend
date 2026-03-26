import React, { useState } from "react";
import { predictCrop } from "../services/api";

const FIELDS = {
  soil: [
    { key: "N",  label: "Nitrogen (N)",     icon: "🧪", hint: "kg/ha", placeholder: "e.g. 90" },
    { key: "P",  label: "Phosphorus (P)",   icon: "⚗️", hint: "kg/ha", placeholder: "e.g. 42" },
    { key: "K",  label: "Potassium (K)",    icon: "🔬", hint: "kg/ha", placeholder: "e.g. 43" },
    { key: "ph", label: "Soil pH",          icon: "💧", hint: "0–14",  placeholder: "e.g. 6.5" },
  ],
  climate: [
    { key: "temperature", label: "Temperature", icon: "🌡️", hint: "°C",   placeholder: "e.g. 25" },
    { key: "humidity",    label: "Humidity",    icon: "💦", hint: "%",    placeholder: "e.g. 80" },
    { key: "rainfall",    label: "Rainfall",    icon: "🌧️", hint: "mm",   placeholder: "e.g. 200" },
  ],
  market: [
    { key: "Demand_Index", label: "Market Demand Index", icon: "📈", hint: "0–100 (normalized market price)", placeholder: "e.g. 70", fullWidth: true },
  ],
};

const initialState = {
  N: "", P: "", K: "", temperature: "",
  humidity: "", ph: "", rainfall: "", Demand_Index: "",
};

const CropForm = ({ setResult, setLoading }) => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoading(true);
    setError(null);

    const parsed = {};
    for (const key in formData) {
      parsed[key] = parseFloat(formData[key]);
      if (isNaN(parsed[key])) {
        setError(`Invalid value for ${key}. Please enter a number.`);
        setIsSubmitting(false);
        setLoading(false);
        return;
      }
    }

    try {
      const result = await predictCrop(parsed);
      setResult(result);
    } catch (err) {
      setError("Could not connect to the AgroFusion API. Make sure the backend is running on port 8000.");
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  const renderGroup = (groupFields, groupLabel) => (
    <>
      <div className="input-group-label">{groupLabel}</div>
      <div className="form-grid">
        {groupFields.map(({ key, label, icon, hint, placeholder, fullWidth }) => (
          <div className={`field-group${fullWidth ? " full-width" : ""}`} key={key}>
            <label className="field-label" htmlFor={key}>
              <span className="field-icon">{icon}</span>
              {label}
              <span className="field-hint">({hint})</span>
            </label>
            <input
              id={key}
              className="field-input"
              type="number"
              name={key}
              placeholder={placeholder}
              value={formData[key]}
              onChange={handleChange}
              required
              step="any"
            />
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="crop-form-card">
      <form onSubmit={handleSubmit} noValidate>
        {renderGroup(FIELDS.soil, "🌍 Soil Composition")}
        <div className="form-divider" />
        {renderGroup(FIELDS.climate, "🌤️ Climate Conditions")}
        <div className="form-divider" />
        {renderGroup(FIELDS.market, "💹 Market Data")}

        {error && (
          <div style={{
            marginTop: "16px",
            padding: "12px 16px",
            background: "rgba(200,50,50,0.07)",
            border: "1px solid rgba(200,50,50,0.2)",
            borderRadius: "10px",
            color: "#b03030",
            fontSize: "0.84rem",
            lineHeight: "1.5"
          }}>
            ⚠️ {error}
          </div>
        )}

        <button
          type="submit"
          className="submit-btn"
          style={{ marginTop: "24px" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="btn-spinner" />
              Analyzing…
            </>
          ) : (
            <>🌱 Predict Best Crops</>
          )}
        </button>
      </form>
    </div>
  );
};

export default CropForm;