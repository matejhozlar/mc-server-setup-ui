import { useParams } from "react-router-dom";
import { useConfig } from "../context/useConfig";
import { configSections } from "../config/sections";
import type { Config } from "../config/Config";

const GenericConfigPage = () => {
  const { sectionKey } = useParams();
  const { config, updateConfig } = useConfig();

  const section = configSections.find((s) => s.key === sectionKey);
  if (!section) return <div>Section not found</div>;

  type SectionKey = keyof Config;
  const key = section.key as SectionKey;
  const sectionData = config[key];

  return (
    <div className="config-page">
      <h2 className="config-title">{section.label}</h2>
      <form>
        {section.fields.map((field) => {
          type FieldKey = keyof typeof sectionData;

          return (
            <div key={field.key} className="form-field">
              <label htmlFor={field.key} className="field-label">
                <span>
                  {field.label}
                  {field.required && (
                    <span className="required-asterisk">*</span>
                  )}
                </span>
              </label>

              <input
                id={field.key}
                type={field.type}
                required={field.required}
                value={sectionData[field.key as FieldKey] ?? ""}
                placeholder={field.placeholder ?? ""}
                onChange={(e) => {
                  const newValue =
                    field.type === "number"
                      ? e.target.value === ""
                        ? ""
                        : Number(e.target.value)
                      : e.target.value;

                  const updatedSection: typeof sectionData = {
                    ...sectionData,
                    [field.key as FieldKey]: newValue,
                  };

                  updateConfig(key, updatedSection);
                }}
                className="config-input"
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default GenericConfigPage;
