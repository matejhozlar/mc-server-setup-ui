import { NavLink } from "react-router-dom";

const sections = [
  { label: "General", path: "/general" },
  { label: "Design", path: "/design" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {sections.map(({ label, path }) => (
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
