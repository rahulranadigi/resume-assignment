import React from "react";
import ListComponent from "../global/ListComponent";
import Heading from "../global/Heading";
import ResumeSection from "../global/ResumeSection";
import "./UserExperience.css";

const UserExperience = ({ experience }) => {
  return (
    <div className="user__section">
      <ResumeSection name={"EXPERIENCE"} />
      {experience?.map((data,index) => {
        return (
          <div className="expercience" key={data?.id}>
            <div className="experience__details">
              <div className="designation">
                <Heading
                  name={data?.designation}
                  size={".9rem"}
                  error={data?.designation ? data.designation : "User Role"}
                  fieldName={`experience.${index}.designation`}
                />
                <p
                  className="company__name"
                  style={{
                    color: `${data?.companyName ? "var(--text-color)" : "red"}`,
                  }}
                >
                  {data?.companyName
                    ? data.companyName
                    : "*Company Name Mandatory"}
                </p>
              </div>
              <div className="experience__period">
                <span
                  className="date__of__join"
                  style={{
                    color: `${
                      data?.joining || data?.leaving
                        ? "var(--text-color)"
                        : "red"
                    }`,
                  }}
                >
                  {data?.joining || data?.leaving
                    ? `${data?.joining} - ${data?.leaving}`
                    : "*DOJ/DOL Mandatory"}
                </span>
                <span className="company__loaction">
                  {[
                    data?.city ? data?.city : "NA",
                    data?.state ? data?.state : "NA",
                    data?.country ? data?.country : "NA",
                  ].join(", ")}
                </span>
              </div>
            </div>
            <ListComponent items={data.responsibility} />
          </div>
        );
      })}
    </div>
  );
};

export default UserExperience;
