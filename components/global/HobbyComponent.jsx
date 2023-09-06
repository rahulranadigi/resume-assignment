import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import { useState } from "react";

const HobbyComponent = ({ hobbies }) => {
  const [isEdit, setIsEdit] = useState(true);
  return (
    <ul className="list">
      {hobbies?.map((hobby) => {
        return (
          <li className="list__items project__list">
            <div style={{ display: "flex", gap: "5px" }}>
              <span
                style={{
                  color: `${hobby?.hobbyName ? "var(--text-color)" : "red"}`,
                }}
              >
                {hobby?.hobbyName ? hobby?.hobbyName : "*Hobby Name Mandatory"}
              </span>
              <p>{hobby?.description ? ` : ${hobby?.description}` : ""}</p>
              {isEdit ? <AiFillEdit /> : <BiSave />}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HobbyComponent;
