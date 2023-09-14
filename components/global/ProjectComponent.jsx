import React, { useState } from "react";
import Link from "./Link";
import ListComponent from "./ListComponent";
import Heading from "./Heading";
import InputComponent from "./InputComponent";
import EditIcon from "./EditIcon";

const ProjectComponent = ({
  name,
  href,
  technology,
  features,
  source,
  index,
}) => {
  const [isProjectNameEditable, setIsProjectNameEditable] = useState(false);
  const [isSourceEditable, setIsSourceEditable] = useState(false);
  const [isTechEditable, setIsTechEditable] = useState(false);
  const [isName, setIsName] = useState(false);

  return (
    <section className="project__section">
      <div className="project__header">
        {isProjectNameEditable ? (
          <InputComponent
            type="text"
            data={isName ? name : href}
            setEditable={setIsProjectNameEditable}
            fieldName={
              isName
                ? `projects.${index}.projectName`
                : `projects.${index}.projectLink`
            }
            placeholder={isName ? "Project name" : "Project Link"}
            isTextarea={false}
          />
        ) : name ? (
          <div className="flex">
            <Link href={href} name={name} className="bold" />
            <span
              className="editBtn"
              onClick={() => {
                setIsProjectNameEditable(true);
                setIsName(true);
              }}
            >
              Edit Name
            </span>
            <span
              className="editBtn"
              onClick={() => {
                setIsProjectNameEditable(true);
                setIsName(false);
              }}
            >
              Edit Link
            </span>
          </div>
        ) : (
          <div className="flex">
            <Heading error="Project Name" size=".8rem" />
            <span
              className="editBtn"
              onClick={() => {
                setIsProjectNameEditable(true);
                setIsName(true);
              }}
            >
              Edit Name
            </span>
            <span
              className="editBtn"
              onClick={() => {
                setIsProjectNameEditable(true);
                setIsName(false);
              }}
            >
              Edit Link
            </span>
          </div>
        )}

        {isTechEditable ? (
          <InputComponent
            placeholder={"Technologies"}
            data={technology ? technology?.join(", ") : ""}
            fieldName={`projects.${index}.technologiesUsed`}
            isTextarea={false}
            setEditable={setIsTechEditable}
            type={"text"}
            seperator={","}
            index={index}
            isTrim={false}
          />
        ) : (
          <div className="flex">
            <p
              className="technologies"
              style={{
                color: `${
                  technology && technology[0].trim() !== ""
                    ? "var(--text-color)"
                    : "red"
                }`,
              }}
            >
              {technology && technology[0].trim() !== ""
                ? technology?.join(", ")
                : "*Technologies is Mandatory"}
            </p>
            <EditIcon
              handleSetEditable={() => {
                setIsTechEditable(true);
              }}
            />
          </div>
        )}
        {isSourceEditable ? (
          <InputComponent
            data={source}
            fieldName={`projects.${index}.sourceCodeLink`}
            isTextarea={false}
            setEditable={setIsSourceEditable}
            type={"text"}
            placeholder={"Source Link"}
          />
        ) : source ? (
          <div className="flex">
            <Link href={source} name={"Source Code"} />
            <EditIcon
              handleSetEditable={() => {
                setIsSourceEditable(true);
              }}
            />
          </div>
        ) : (
          <div className="flex">
            <Heading error={"Source Link"} size={".8rem"} />
            <EditIcon
              handleSetEditable={() => {
                setIsSourceEditable(true);
              }}
            />
          </div>
        )}
      </div>

      <ListComponent
        items={features}
        isProject={true}
        fieldName={`projects.${index}.projectDescription`}
        index={index}
      />
    </section>
  );
};

export default ProjectComponent;
