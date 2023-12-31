import React, { useState } from "react";
import InputComponent from "./InputComponent";
import Heading from "./Heading";
import EditIcon from "./EditIcon";

const DesignationWrapper = ({ data, index }) => {
  const [isHeadingEditable, setIsHeadingEditable] = useState(false);
  return (
    <>
      {isHeadingEditable ? (
        <InputComponent
          data={data?.designation ? data.designation : ""}
          placeholder={"Designation"}
          fieldName={`experience.${index}.designation`}
          handleSetEditable={(value)=>{setIsHeadingEditable(value)}}
          type={"text"}
          isTextarea={false}
        />
      ) : (
        <div
          className="flex"
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Heading
            name={data?.designation}
            size={".9rem"}
            error={data?.designation ? data.designation : "User Role"}
            fieldName={`experience.${index}.designation`}
          />
          <EditIcon handleSetEditable={()=>{setIsHeadingEditable(true)}}/>
        </div>
      )}
    </>
  );
};

export default DesignationWrapper;
