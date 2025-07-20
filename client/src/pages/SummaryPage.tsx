import { useConfig } from "../context/useConfig";
import { useState } from "react";

const SummaryPage = () => {
  const { config } = useConfig();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleFinish = async () => {
    setStatus("loading");
    try {
      const response = await fetch("http://localhost:5000/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(config),
      });

      if (!response.ok) throw new Error("Failed to send config");
      setStatus("success");
    } catch (err) {
      console.error("Error sending config:", err);
      setStatus("error");
    }
  };

  return (
    <div className="config-page">
      <h2 className="config-title">Configuration Summary</h2>

      <div className="summary-container">
        {Object.entries(config).map(([sectionKey, sectionData]) => (
          <div key={sectionKey} className="summary-section">
            <h3 className="summary-section-title">{sectionKey}</h3>
            <table className="summary-table">
              <tbody>
                {Object.entries(sectionData).map(([fieldKey, value]) => (
                  <tr key={fieldKey}>
                    <td className="summary-key">{fieldKey}</td>
                    <td className="summary-value">
                      {typeof value === "boolean"
                        ? value
                          ? "Enabled"
                          : "Disabled"
                        : String(value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <div className="form-buttons">
        <button
          className="nav-button next-button"
          onClick={handleFinish}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Finish"}
        </button>

        {status === "success" && (
          <div className="success-text">Config sent successfully!</div>
        )}
        {status === "error" && (
          <div className="error-text">Failed to send config. Try again.</div>
        )}
      </div>
    </div>
  );
};

export default SummaryPage;
