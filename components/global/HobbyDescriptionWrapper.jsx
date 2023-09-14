import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import InputComponent from "./InputComponent";
import EditIcon from "./EditIcon";

const HobbyDescriptionName = ({ hobby, index }) => {
  const [isDescriptionEditable, setIsDescriptionEditable] = useState(false);
  return (
    <>
      {isDescriptionEditable ? (
        <InputComponent
          data={hobby?.description ? `${hobby?.description}` : ""}
          placeholder={"description"}
          fieldName={`hobbies.${index}.description`}
          index={index}
          setEditable={setIsDescriptionEditable}
          type={"text"}
        />
      ) : (
        <div
          className="flex"
          style={{ justifyContent: "flex-start", alignItems: "center" }}
        >
          <p
            className="hobby__description"
            style={{
              color: `${hobby?.description ? "var(--text-color)" : "red"}`,
            }}
            title={hobby?.description}
          >
            {hobby?.description
              ? `${hobby?.description}`
              : "*Description Mandatory"}
          </p>
          <EditIcon
            handleSetEditable={() => {
              setIsDescriptionEditable(true);
            }}
          />
        </div>
      )}
    </>
  );
};

export default HobbyDescriptionName;
