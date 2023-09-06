import React from "react";
import Line from "./Line";

const ResumeSection = ({ name }) => {
  return (
    <div className="section__container">
      <h3 className="section__heading">{name}</h3>
      <Line height={"2px"} width={"100%"} visibility={true} />
    </div>
  );
};

export default ResumeSection;
