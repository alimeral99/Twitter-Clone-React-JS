import React from "react";
import "./TrendContent.css";

function TreendContent({ trend }) {
  return (
    <div className="trend__content">
      <h5 className="trend__topic">{trend.topic}</h5>
      <h3 className="trend">{trend.name}</h3>
      <p className="trend__number">{trend.number}K tweets</p>
    </div>
  );
}

export default TreendContent;
