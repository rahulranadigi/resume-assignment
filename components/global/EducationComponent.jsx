import React, { useState } from "react";
import Heading from "./Heading";
import InputComponent from ".././global/InputComponent";
import { AiFillEdit } from "react-icons/ai";

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
            setEditable={setIsHeadingEditable}
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
            <AiFillEdit
              onClick={() => {
                setIsHeadingEditable(true);
              }}
            />
          </div>
        )}
        {isCollegeNameEditable ? (
          <InputComponent
            data={degree ? degree : ""}
            fieldName={`education.${index}.stuided`}
            isTextarea={false}
            placeholder={"Degree"}
            setEditable={setIsCollegeNameEditable}
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
            <AiFillEdit
              onClick={() => {
                setIsCollegeNameEditable(true);
              }}
            />
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
            setEditable={setIsLocationEditable}
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
            <AiFillEdit
              onClick={() => {
                setIsLocationEditable(true);
              }}
            />
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
            setEditable={setIsPeriodEditable}
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
            <AiFillEdit
              onClick={() => {
                setIsPeriodEditable(true);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationComponent;
