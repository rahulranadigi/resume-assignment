import React, { useContext, useState } from "react";
import ResumeSection from "../global/ResumeSection";
import UserSkill from "../global/UserSkill";
import "./userSkills.css";
import { Context } from "../../provider/ContextProvider";

const UserSkills = ({ skills, isError }) => {
  const { userJson, setUserJson } = useContext(Context);
  const [languages, setLanguages] = useState("");
  const handleUpdate = () => {
    const arrayOfLanguage = languages.split(",");
    if ((!userJson?.userskills || userJson?.userskills.length === 0) && languages !== "") {
      const updatedJson = { ...userJson };
      updatedJson.userskills = [
        {
          id: Date.now(),
          category: "Languages",
          skills: arrayOfLanguage,
        },
      ];
      setUserJson(updatedJson);
    }
  };
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
        <input
          type="text"
          placeholder="Add languages you know.."
          value={languages}
          style={{
            width: "300px",
            padding: "0.1rem .2rem",
            border: "1px solid gray",
            borderRadius: "3px",
          }}
          onBlur={handleUpdate}
          onChange={(e) => {
            setLanguages(e.target.value);
          }}
        />
      </div>
    );
  }
  return (
    <div className="user__section">
      <ResumeSection name={"TECHNICAL SKILLS"} />
      <div className="user__skills">
        {skills?.map((data, index) => {
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
