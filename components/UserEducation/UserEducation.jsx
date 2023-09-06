import React from "react";
import ResumeSection from "../global/ResumeSection";
import EducationComponent from "../global/EducationComponent";

const UserEducation = ({ education, isError }) => {
  if (isError) {
    return (
      <div className="user__section">
        <ResumeSection name={"TECHNICAL SKILLS"} />
        <div
          className="user__skills"
          style={{ color: "red", fontSize: "2rem" }}
        >
          *Education is mandatory
        </div>
      </div>
    );
  }
  return (
    <div className="user__section">
      <ResumeSection name={"EDUCATION"} />
      {education?.map((data,index) => {
        return (
          <EducationComponent
            key={data?.id}
            name={data?.institution ? data.institution : null}
            degree={data?.stuided ? data?.stuided : null}
            locaion={[
              data?.city ? data.city : "NA",
              data?.state ? data.state : "NA",
              data?.country ? data.country : "NA",
            ].join(", ")}
            index={index}
            period={
              data?.start || data?.completed
                ? `${data?.start} - ${data?.completed}`
                : null
            }
          />
        );
      })}
    </div>
  );
};

export default UserEducation;
