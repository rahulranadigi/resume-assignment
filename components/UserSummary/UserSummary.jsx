import React, { useContext, useEffect, useRef } from "react";
import ResumeSection from "../global/ResumeSection";
import "./userSummary.css";
import { Context } from "../../provider/ContextProvider";
const UserSummary = ({ summary, isSummary }) => {
  const summaryRef = useRef(null);
  const { userJson, setUserJson } = useContext(Context);
  const handleContent = () => {
    summaryRef.current.contentEditable = true;
    summaryRef.current.focus();
  };
  const handleBlur = () => {
    summaryRef.current.contentEditable = false;
    const updatedUserJson = { ...userJson };
    updatedUserJson.summary = summaryRef.current.textContent;
    setUserJson(updatedUserJson);
  };

  useEffect(() => {}, [userJson]);
  return (
    <div className="user__section">
      <ResumeSection name={"Summary"} />
      <p
        className="summary__paragraph"
        ref={summaryRef}
        style={{
          color: `${isSummary ? "var(--text-color)" : "red"}`,
          fontSize: `${isSummary ? "0.8rem" : "2rem"}`,
        }}
        onClick={handleContent}
        onBlur={handleBlur}
      >
        {isSummary ? summary : "*Summary is required"}
      </p>
    </div>
  );
};

export default UserSummary;
