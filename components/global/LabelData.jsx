import React from "react";
import './LabelData.css'

const LabelData = ({ labelName, labelData, isLink, href,isError }) => {
  return (
    <div className="labelData">
      <p className="labelName">{labelName}</p>
      {isLink ? (
        <a className="link" href={href}>
          {labelData}
        </a>
      ) : (
        <span className="data" style={{color:`${isError?"red":"var(--text-color)"}`}}>{labelData}</span>
      )}
    </div>
  );
};

export default LabelData;
