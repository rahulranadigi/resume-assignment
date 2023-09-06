import React from "react";
import Heading from "./Heading";

const EducationComponent = ({ name, degree, locaion, period, index }) => {
  return (
    <div className="education__data">
      <div className="college__details">
        <Heading
          name={name}
          size={".8rem"}
          error={name ? name : "College Name"}
          fieldName={`education.${index}.institution`}
        />
        <p
          className="degree__name"
          style={{ color: `${degree ? "var(--text-color)" : "red"}` }}
        >
          {degree ? degree : "*Degree Mandatory"}
        </p>
      </div>
      <div className="period__data">
        <span className="education__loaction">{locaion}</span>
        <span
          className="education__period"
          style={{ color: `${period ? "var(--text-color)" : "red"}` }}
        >
          {period ? period : "*DOJ/DOL Mandatory"}
        </span>
      </div>
    </div>
  );
};

export default EducationComponent;
