import React, { useState } from "react";
import InputComponent from "./InputComponent";
import { AiFillEdit } from "react-icons/ai";
import EditIcon from "./EditIcon";

const LocationWrapper = ({ data, index }) => {
  const [isLoactionEditable, setIsLocationEditable] = useState(false);
  return (
    <>
      {isLoactionEditable ? (
        <InputComponent
          data={[
            data?.city ? data?.city : "NA",
            data?.state ? data?.state : "NA",
            data?.country ? data?.country : "NA",
          ].join(", ")}
          placeholder={"city, state, country"}
          fieldName={`experience.${index}`}
          isLocation={true}
          index={index}
          handleSetEditable={(value) => {
            setIsLocationEditable(value);
          }}
          type={"text"}
        />
      ) : (
        <div className="flex">
          <span
            className="company__loaction"
            style={{
              color: `${
                data?.city || data?.state || data?.country
                  ? "var(--text-color)"
                  : "red"
              }`,
            }}
          >
            {[
              data?.city ? data?.city : "NA",
              data?.state ? data?.state : "NA",
              data?.country ? data?.country : "NA",
            ].join(", ")}
          </span>
          <EditIcon
            handleSetEditable={() => {
              setIsLocationEditable(true);
            }}
          />
        </div>
      )}
    </>
  );
};

export default LocationWrapper;
