import React from "react";
import "./SidebarRow.css";

function SidebarRow({ title, Icon }) {
  return (
    <div className="sidebar__row">
      {Icon && <Icon className="sidebar__rowIcon" />}
      <h3 className="sidebar__rowTitle">{title}</h3>
    </div>
  );
}

export default SidebarRow;
