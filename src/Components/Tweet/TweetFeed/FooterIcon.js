import React from "react";
import "./FooterIcon.css";
function FooterIcon({ Icon, amount }) {
  return (
    <div className="footerIcon">
      {Icon && <Icon />}

      <span>{amount}</span>
    </div>
  );
}

export default FooterIcon;
