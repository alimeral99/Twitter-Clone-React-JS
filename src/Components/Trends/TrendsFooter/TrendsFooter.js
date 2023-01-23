import { Avatar } from "@mui/material";
import React from "react";
import "./TrendsFooter.css";

function TrendsFooter({ image, name, username }) {
  return (
    <div className="trendsfooter__popular">
      <Avatar src={image} />
      <div className="footer__info">
        <h3>{name}</h3>
        <h5>{username}</h5>
      </div>
      <button>Follow</button>
    </div>
  );
}

export default TrendsFooter;
