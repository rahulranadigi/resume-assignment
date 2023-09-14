import { useState } from "react";
import ResumeSection from "../global/ResumeSection";
import "./userSummary.css";
import InputComponent from "../global/InputComponent";
import { AiFillEdit } from "react-icons/ai";
import EditIcon from "../global/EditIcon";

const UserSummary = ({ summary, isSummary }) => {
  const [isSummaryEditable, setIsSummaryEditable] = useState(false);

  return (
    <div className="user__section">
      <ResumeSection name={"Summary"} />
      {isSummaryEditable ? (
        <InputComponent
          data={isSummary ? summary : ""}
          placeholder={"*Summary is required"}
          fieldName={"summary"}
          setEditable={setIsSummaryEditable}
          type={"text"}
          isTextarea={true}
        />
      ) : (
        <div>
          <p
            className="summary__paragraph"
            style={{
              color: `${isSummary ? "var(--text-color)" : "red"}`,
              fontSize: `${isSummary ? "0.8rem" : "2rem"}`,
            }}
          >
            {isSummary ? summary : "*Summary is required"}
          </p>
          <EditIcon
            handleSetEditable={() => {
              setIsSummaryEditable(true);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UserSummary;
