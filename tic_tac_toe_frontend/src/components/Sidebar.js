import React from "react";
import "./Sidebar.css";

// PUBLIC_INTERFACE
function Sidebar({ navItems, onNavSelect, activeNav }) {
  /**
   * Renders the navigation sidebar for navigation between panels.
   * @param {object} props - navItems: array of {id, label, icon}, onNavSelect: function
   */
  return (
    <aside className="ttt-sidebar">
      <nav>
        <ul>
          {navItems.map(item => (
            <li key={item.id} className={activeNav === item.id ? "active" : ""}>
              <button onClick={() => onNavSelect(item.id)} className="ttt-sidebar-btn">
                {item.icon && <span className="icon">{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
