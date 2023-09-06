import React, { useContext } from "react";
import HeaderSection from "../Header/HeaderSection";
import UserSummary from "../UserSummary/UserSummary";
import UserSkills from "../UserSkills/UserSkills";
import UserExperience from "../UserExperience/UserExperience";
import UserEducation from "../UserEducation/UserEducation";
import UserProjects from "../UserProjects/UserProjects";
import UserHobbies from "../UserHobbies/UserHobbies";
import { Context } from "../../provider/ContextProvider";
import "../global/global.css";
import "./resume.css";

const Resume = () => {
  const { userJson, fileName, setUserJson, setFileName } = useContext(Context);
  const handleClick = () => {
    setUserJson(null);
    setFileName("");
  };
  return (
    <main className="resume">
      <HeaderSection
        name={userJson?.name}
        links={userJson?.details?.links}
        details={userJson?.details}
        nameField={"name"}
      />
      <UserSummary
        summary={userJson?.summary ? userJson?.summary : "Summary is Required"}
        isSummary={userJson?.summary ? true : false}
      />
      {userJson?.userskills?.length > 0 ? (
        <UserSkills skills={userJson?.userskills} />
      ) : (
        <UserSkills skills={userJson?.userskills} isError={true} />
      )}
      {userJson?.experience?.length > 0 && (
        <UserExperience experience={userJson.experience} />
      )}
      {userJson?.education?.length > 0 && (
        <UserEducation education={userJson.education} />
      )}
      {userJson?.projects?.length > 0 && (
        <UserProjects projects={userJson.projects} />
      )}
      {userJson?.hobbies?.length > 0 ? (
        <UserHobbies hobbies={userJson.hobbies} />
      ) : (
        <UserHobbies hobbies={userJson?.hobbies} isError={true} />
      )}
      <div className="upload__data">
        <button onClick={handleClick}>Upload Data</button>
        <span className="file__name">{fileName}</span>
      </div>
    </main>
  );
};

export default Resume;

//upload of wrong file
//name of file below the button
//description of 100 words per project
//fields are mandatory it should show error text in skills
//all the text should be editable
