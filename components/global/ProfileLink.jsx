import React, { useState } from "react";
import InputComponent from "./InputComponent";
import { AiFillEdit } from "react-icons/ai";

const ProfileLink = ({ name, href, className, index }) => {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <>
      {isEditable ? (
        <InputComponent
          data={name}
          fieldName={`details.links.${index}.linkname`}
          index={index}
          setEditable={setIsEditable}
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
            <AiFillEdit
              onClick={() => {
                setIsEditable(true);
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ProfileLink;
