import React, { useState } from "react";
import Heading from "./Heading";
import InputComponent from ".././global/InputComponent";
import EditIcon from "./EditIcon";
import './EducationComponent.css'

const EducationComponent = ({ name, degree, location, period, index }) => {
  const [isHeadingEditable, setIsHeadingEditable] = useState(false);
  const [isCollegeNameEditable, setIsCollegeNameEditable] = useState(false);
  const [isLocationEditable, setIsLocationEditable] = useState(false);
  const [isPeriodEditable, setIsPeriodEditable] = useState(false);
  return (
    <div className="education__data">
      <div className="college__details">
        {isHeadingEditable ? (
          <InputComponent
            data={name ? name : ""}
            fieldName={`education.${index}.institution`}
            placeholder={"College Name"}
            isTextarea={false}
            handleSetEditable={(value)=>{setIsHeadingEditable(value)}}
            type={"text"}
          />
        ) : (
          <div className="flex" style={{ justifyContent: "flex-start" }}>
            <Heading
              name={name}
              size={".8rem"}
              error={name ? name : "College Name"}
              fieldName={`education.${index}.institution`}
            />
            <EditIcon handleSetEditable={()=>{setIsHeadingEditable(true)}}/>
          </div>
        )}
        {isCollegeNameEditable ? (
          <InputComponent
            data={degree ? degree : ""}
            fieldName={`education.${index}.stuided`}
            isTextarea={false}
            placeholder={"Degree"}
            handleSetEditable={(value)=>{setIsCollegeNameEditable(value)}}
            type={"text"}
          />
        ) : (
          <div className="flex" style={{ justifyContent: "flex-start" }}>
            <p
              className="degree__name"
              style={{
                color: `${degree ? "var(--text-color)" : "red"}`,
                fontSize: ".8rem",
              }}
            >
              {degree ? degree : "*Degree Mandatory"}
            </p>
            <EditIcon handleSetEditable={()=>{setIsCollegeNameEditable(true)}}/>
          </div>
        )}
      </div>
      <div className="period__data">
        {isLocationEditable ? (
          <InputComponent
            data={location}
            fieldName={`education.${index}`}
            index={index}
            placeholder={"city, state, country"}
            isLocation={true}
            handleSetEditable={(value)=>{setIsLocationEditable(value)}}
            type={"text"}
          />
        ) : (
          <div className="flex">
            <span
              className="education__loaction"
              style={{
                color: `${
                  location.includes("NA") ? "red" : "var(--text-color)"
                }`,
              }}
            >
              {location}
            </span>
            <EditIcon handleSetEditable={()=>{setIsLocationEditable(true)}}/>
          </div>
        )}
        {isPeriodEditable ? (
          <InputComponent
            data={period ? period : ""}
            fieldName={`education.${index}`}
            index={index}
            placeholder={"DOJ-DOL"}
            isExp={false}
            isPeriod={true}
            seperator={"-"}
            handleSetEditable={(value)=>{setIsPeriodEditable(value)}}
            type={"text"}
          />
        ) : (
          <div>
            <span
              className="education__period"
              style={{
                color: `${
                  (period===null || period?.includes("NA")) ? "red" : "var(--text-color)"
                }`,
              }}
            >
              {period ? period : "*DOJ/DOL Mandatory"}
            </span>
            <EditIcon handleSetEditable={()=>{setIsPeriodEditable(true)}}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationComponent;
