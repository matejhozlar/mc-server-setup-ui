import { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useConfig } from "../context/useConfig";
import { configSections } from "../config/sections";
import type { Config } from "../config/Config";
import Tooltip from "../components/Tooltip";
import axios from "axios";

const GenericConfigPage = () => {
  const { sectionKey } = useParams();
  const navigate = useNavigate();
  const { config, updateConfig } = useConfig();
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const section = configSections.find((s) => s.key === sectionKey);
  if (!section) return <div>Section not found</div>;

  type SectionKey = keyof Config;
  const key = section.key as SectionKey;
  const sectionData = config[key];

  const currentIndex = configSections.findIndex((s) => s.key === section.key);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === configSections.length - 1;

  const handleNavigation = (direction: "back" | "next") => {
    const missingFields: Record<string, boolean> = {};

    section.fields.forEach((field) => {
      const value = sectionData[field.key as keyof typeof sectionData];
      if (field.required && (value === "" || value === undefined)) {
        missingFields[field.key] = true;
      }
    });

    if (direction === "next" && Object.keys(missingFields).length > 0) {
      setErrors(missingFields);

      const firstMissingKey = Object.keys(missingFields)[0];
      inputRefs.current[firstMissingKey]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      inputRefs.current[firstMissingKey]?.focus();
      return;
    }

    const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    const nextSection = configSections[newIndex];
    navigate(nextSection.path);
  };

  const handleFinish = async () => {
    const missingFields: Record<string, boolean> = {};

    section.fields.forEach((field) => {
      const value = sectionData[field.key as keyof typeof sectionData];
      if (field.required && (value === "" || value === undefined)) {
        missingFields[field.key] = true;
      }
    });

    if (Object.keys(missingFields).length > 0) {
      setErrors(missingFields);

      const firstMissingKey = Object.keys(missingFields)[0];
      inputRefs.current[firstMissingKey]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      inputRefs.current[firstMissingKey]?.focus();
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/config", config);
    } catch (err) {
      console.warn("Backend not running or failed:", err);
    }

    navigate("/summary");
  };

  const handleChange = (fieldKey: string, rawValue: string | boolean) => {
    const field = section.fields.find((f) => f.key === fieldKey);
    if (!field) return;

    let newValue: string | number | boolean = rawValue;

    if (field.type === "number") {
      newValue = rawValue === "" ? "" : Number(rawValue);
    } else if (field.type === "boolean") {
      newValue = Boolean(rawValue);
    }

    const updatedSection: typeof sectionData = {
      ...sectionData,
      [fieldKey]: newValue,
    };

    updateConfig(key, updatedSection);

    if (errors[fieldKey]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[fieldKey];
        return updated;
      });
    }
  };

  return (
    <div className="config-page">
      <h2 className="config-title">{section.label}</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {section.fields.map((field) => {
          const error = errors[field.key];

          return (
            <div
              key={field.key}
              className={`form-field ${
                field.type === "boolean" ? "form-field-boolean" : ""
              }`}
            >
              <label htmlFor={field.key} className="field-label">
                <span className="label-wrapper">
                  <Tooltip text={field.tooltip || "No description available"} />
                  {field.label}
                  {field.required && (
                    <span className="required-asterisk">*</span>
                  )}
                </span>
              </label>

              {field.type === "boolean" ? (
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={Boolean(
                      sectionData[field.key as keyof typeof sectionData]
                    )}
                    onChange={(e) => handleChange(field.key, e.target.checked)}
                  />
                  <span className="slider round" />
                </label>
              ) : (
                <input
                  id={field.key}
                  ref={(el) => {
                    inputRefs.current[field.key] = el;
                  }}
                  type={field.type}
                  required={field.required}
                  value={
                    sectionData[field.key as keyof typeof sectionData] ?? ""
                  }
                  placeholder={field.placeholder ?? ""}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className={`config-input ${error ? "input-error" : ""}`}
                />
              )}

              {error && (
                <div className="error-text">This field is required.</div>
              )}
            </div>
          );
        })}
      </form>

      <div className="form-buttons">
        {!isFirst && (
          <button
            className="nav-button back-button"
            onClick={() => handleNavigation("back")}
          >
            Back
          </button>
        )}
        {!isLast ? (
          <button
            className="nav-button next-button"
            onClick={() => handleNavigation("next")}
          >
            Next
          </button>
        ) : (
          <button className="nav-button finish-button" onClick={handleFinish}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default GenericConfigPage;
