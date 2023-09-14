import React, { useState } from "react";
import InputComponent from "./InputComponent";
import { AiFillEdit } from "react-icons/ai";
import EditIcon from "./EditIcon";

const PeriodWrapper = ({ data, index }) => {
  const [isPeriodEditable, setIsPeriodEditable] = useState(false);
  return (
    <>
      {isPeriodEditable ? (
        <InputComponent
          data={
            data?.joining || data?.leaving
              ? `${data?.joining} - ${data?.leaving}`
              : ""
          }
          placeholder={"*DOJ - DOL"}
          fieldName={`experience.${index}`}
          index={index}
          isPeriod={true}
          isExp={true}
          setEditable={setIsPeriodEditable}
        />
      ) : (
        <div className="flex">
          <span
            className="date__of__join"
            style={{
              color: `${
                data?.joining === "NA" ||
                data?.leaving === "NA" ||
                !data?.joining ||
                !data?.leaving
                  ? "red"
                  : "var(--text-color)"
              }`,
            }}
          >
            {data?.joining || data?.leaving
              ? `${data?.joining} - ${data?.leaving}`
              : "*DOJ/DOL Mandatory"}
          </span>
          <EditIcon handleSetEditable={()=>{setIsPeriodEditable(true)}}/>
        </div>
      )}
    </>
  );
};

export default PeriodWrapper;
