import React, { useState } from "react";
import InputComponent from "./InputComponent";
import { AiFillEdit } from "react-icons/ai";

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
          setEditable={setIsLocationEditable}
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
          <AiFillEdit
            onClick={() => {
              setIsLocationEditable(true);
            }}
          />
        </div>
      )}
    </>
  );
};

export default LocationWrapper;