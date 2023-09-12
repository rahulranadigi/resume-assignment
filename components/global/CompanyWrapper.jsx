import React, { useState } from "react";
import InputComponent from "./InputComponent";
import { AiFillEdit } from "react-icons/ai";

const CompanyWrapper = ({ data, index }) => {
  const [isCompanyEditable, setIsCompanyEditable] = useState(false);
  return (
    <>
      {isCompanyEditable ? (
        <InputComponent
          data={data?.companyName ? data.companyName : ""}
          placeholder={"Company Name"}
          fieldName={`experience.${index}.companyName`}
          isTextarea={false}
          setEditable={setIsCompanyEditable}
          type={"text"}
        />
      ) : (
        <div className="flex">
          <p
            className="company__name"
            style={{
              color: `${data?.companyName ? "var(--text-color)" : "red"}`,
            }}
          >
            {data?.companyName ? data.companyName : "*Company Name Mandatory"}
          </p>
          <AiFillEdit
            onClick={() => {
              setIsCompanyEditable(true);
            }}
          />
        </div>
      )}
    </>
  );
};

export default CompanyWrapper;
