import { NavLink } from "react-router-dom";
import { configSections } from "../config/sections.ts";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {configSections.map(({ label, path }) => (
            <li key={path} className="nav-item">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
