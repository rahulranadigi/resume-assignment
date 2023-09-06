import React from "react";
import ResumeSection from "../global/ResumeSection";
import HobbyComponent from "../global/HobbyComponent";

const UserHobbies = ({ hobbies, isError }) => {
  if (isError) {
    return (
      <div className="user__section">
        <ResumeSection name={"TECHNICAL SKILLS"} />
        <div
          className="user__skills"
          style={{ color: "red", fontSize: "2rem" }}
        >
          *Hobbies is mandatory
        </div>
      </div>
    );
  }
  return (
    <div className="user__section">
      <ResumeSection name={"HOBBIES"} />
      <HobbyComponent hobbies={hobbies}/>
    </div>
  );
};

export default UserHobbies;
