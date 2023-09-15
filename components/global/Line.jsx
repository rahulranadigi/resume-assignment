import React from "react";
import './Line.css'

const Line = ({ width, height, visibility }) => {
  return (
    <div
    
      style={{
        width: width,
        height: height,
        display: `${visibility ? "block" : "none"}`,
      }}
      className="decoration__line"
    ></div>
  );
};

export default Line;
