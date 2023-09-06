import React from "react";
import ProjectComponent from "../global/ProjectComponent";
import ResumeSection from "../global/ResumeSection";

const UserProjects = ({projects }) => {
  return (
    <div className="user__section">
      <ResumeSection name={"PROJECTS"} />
      {projects?.map((project) => {
        return (
          <ProjectComponent
            key={project?.id}
            name={project?.projectName}
            href={project?.projectLink}
            source={project?.sourceCodeLink}
            technology={project?.technologiesUsed}
            features={project?.projectDescription}
          />
        );
      })}
    </div>
  );
};

export default UserProjects;
