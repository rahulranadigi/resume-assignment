import React, { useState } from "react";
import InputComponent from "./InputComponent";

const ProfileLinkComponent = ({ name, href, className, index }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [isName, setIsName] = useState(true);
  return (
    <>
      {isEditable ? (
        <InputComponent
          data={isName ? name : href}
          fieldName={
            isName
              ? `details.links.${index}.linkname`
              : `details.links.${index}.url`
          }
          index={index}
          handleSetEditable={(value) => {
            setIsEditable(value);
          }}
          type={"text"}
        />
      ) : (
        <>
          <div className="flex">
            <a
              href={href ? href : "/"}
              className={`link ${className}`}
              style={{
                color: `${
                  name?.includes("NA") || name === ""
                    ? "red"
                    : "var(--text-color)"
                }`,
              }}
            >
              {name ? name : "NA"}
            </a>
          </div>
          <div className="flex hover__edit">
            <span
              className="editBtn"
              onClick={() => {
                setIsEditable(true);
                setIsName(true);
              }}
            >
              EditName
            </span>
            <span
              className="editBtn"
              onClick={() => {
                setIsEditable(true);
                setIsName(false);
              }}
            >
              EditLink
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileLinkComponent;
