import { useParams } from "react-router-dom";
import { useConfig } from "../context/useConfig.ts";
import { configSections } from "../config/sections.ts";
import type { Config } from "../config/Config.ts";

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
      <h2>{section.label}</h2>
      <form>
        {section.fields.map((field) => {
          type FieldKey = keyof typeof sectionData;

          return (
            <div key={field.key}>
              <label>
                {field.label}
                <input
                  type={field.type}
                  value={sectionData[field.key as FieldKey] ?? ""}
                  onChange={(e) => {
                    const newValue =
                      field.type === "number"
                        ? Number(e.target.value)
                        : e.target.value;

                    const updatedSection: typeof sectionData = {
                      ...sectionData,
                      [field.key as FieldKey]: newValue,
                    };

                    updateConfig(key, updatedSection);
                  }}
                />
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default GenericConfigPage;
