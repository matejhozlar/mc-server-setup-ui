import React from "react";

const sections = ["General", "Design", "Advanced"];

const Sidebar = () => {
  return (
    <aside
      style={{
        width: "200px",
        position: "sticky",
        top: "100px",
        height: "calc(100vh - 100px)",
        backgroundColor: "#eaeaea",
        padding: "20px",
        boxSizing: "border-box",
        borderRight: "1px solid #ccc",
        overflowY: "auto",
      }}
    >
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {sections.map((section) => (
            <li key={section} style={{ marginBottom: "10px" }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  textAlign: "left",
                  width: "100%",
                }}
                onClick={() => alert(`Go to ${section}`)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
