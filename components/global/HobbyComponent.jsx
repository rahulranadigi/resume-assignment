import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import HobbyNameWrapper from "./HobbyNameWrapper";
import HobbyDescriptionName from "./HobbyDescriptionWrapper";

const HobbyComponent = ({ hobbies }) => {
  return (
    <ul className="list">
      {hobbies?.map((hobby, index) => {
        return (
          <li className="list__items project__list" key={hobby?.id}>
            <div style={{ display: "flex", gap: "5px" }}>
              <HobbyNameWrapper hobby={hobby} index={index} />
              <HobbyDescriptionName hobby={hobby} index={index} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HobbyComponent;
