import React from "react";
import ListComponent from "../global/ListComponent";
import ResumeSection from "../global/ResumeSection";
import "./UserExperience.css";
import DesignationWrapper from "../global/DesignationWrapper";
import CompanyWrapper from "../global/CompanyWrapper";
import LocationWrapper from "../global/LocationWrapper";
import PeriodWrapper from "../global/PeriodWrapper";

const UserExperience = ({ experience }) => {
  return (
    <div className="user__section">
      <ResumeSection name={"EXPERIENCE"} />
      {experience?.map((data, index) => {
        return (
          <div className="expercience" key={data?.id}>
            <div className="experience__details">
              <div className="designation">
                <DesignationWrapper data={data} index={index} />
                <CompanyWrapper data={data} index={index} />
              </div>
              <div className="experience__period">
                <PeriodWrapper data={data} index={index} />
                <LocationWrapper data={data} index={index} />
              </div>
            </div>
            <ListComponent
              items={data.responsibility}
              fieldName={`experience.${index}.responsibility`}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserExperience;
