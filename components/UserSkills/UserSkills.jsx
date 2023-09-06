import React from "react";
import ResumeSection from "../global/ResumeSection";
import UserSkill from "../global/UserSkill";
import "./userSkills.css";

const UserSkills = ({ skills, isError }) => {
  if (isError) {
    return (
      <div className="user__section">
        <ResumeSection name={"TECHNICAL SKILLS"} />
        <div
          className="user__skills"
          style={{ color: "red", fontSize: "2rem" }}
        >
          *Techinical Skills is mandatory
        </div>
      </div>
    );
  }
  return (
    <div className="user__section">
      <ResumeSection name={"TECHNICAL SKILLS"} />
      <div className="user__skills">
        {skills?.map((data,index) => {
          return (
            <UserSkill
              key={data?.id}
              index={index}
              label={data?.category}
              skills={data?.skills}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserSkills;
