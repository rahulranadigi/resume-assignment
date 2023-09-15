import React, { useState } from "react";
import InputComponent from "./InputComponent";
import EditIcon from "./EditIcon";

const HobbyNameWrapper = ({ hobby, index }) => {
  const [isHobbyNameEditable, setIsHobbyNameEditable] = useState(false);
  return (
    <>
      {isHobbyNameEditable ? (
        <InputComponent
          data={hobby?.hobbyName ? hobby?.hobbyName : ""}
          placeholder={"Hobby Name"}
          fieldName={`hobbies.${index}.hobbyName`}
          index={index}
          isTextarea={false}
          handleSetEditable={(value)=>{setIsHobbyNameEditable(value)}}
          type={"text"}
        />
      ) : (
        <div
          className="flex"
          style={{ justifyContent: "flex-start", alignItems: "center" }}
        >
          <span
            style={{
              color: `${hobby?.hobbyName ? "var(--text-color)" : "red"}`,
            }}
          >
            {hobby?.hobbyName ? hobby?.hobbyName : "*Hobby Name Mandatory"}
          </span>
          <EditIcon handleSetEditable={()=>{setIsHobbyNameEditable(true)}}/>
        </div>
      )}
    </>
  );
};

export default HobbyNameWrapper;
