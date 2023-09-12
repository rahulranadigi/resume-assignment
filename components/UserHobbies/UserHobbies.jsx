import React from "react";
import ResumeSection from "../global/ResumeSection";
import HobbyComponent from "../global/HobbyComponent";
import './userhobby.css';
import HobbyNameWrapper from "../global/HobbyNameWrapper";
import HobbyDescriptionName from "../global/HobbyDescriptionWrapper";

const UserHobbies = ({ hobbies, isError }) => {
  if (isError) return;
  return (
    <div className="user__section">
      <ResumeSection name={"HOBBIES"} />
      <HobbyComponent hobbies={hobbies}/>
    </div>
  );
};

export default UserHobbies;
