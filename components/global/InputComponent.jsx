import React, { useContext, useRef, useState } from "react";
import { Context } from "../../provider/ContextProvider";
import { validateEmail, validateMobileNumber } from "../../helper/helper";
import { toast } from "react-toastify";
import "./InputComponent.css";

const InputComponent = ({
  type,
  data,
  setEditable,
  fieldName,
  isTextarea,
  seperator,
  isLocation,
  isPeriod,
  isExp,
  isArray,
  placeholder,
  isEmail,
  isMobile,
  isTrim,
  handleSetEditable,
}) => {
  const [value, setValue] = useState(isArray ? data?.join("") : data);
  const { userJson, handleUserJsonChange } = useContext(Context);
  const inputRef = useRef(null);
  const handleUpdate = () => {
    if (handleSetEditable) {
      handleSetEditable(false);
    }
    const updatedUserJson = { ...userJson };
    const fieldPath = fieldName.split(".");
    let currentObj = updatedUserJson;
    for (let i = 0; i < fieldPath?.length - 1; i++) {
      currentObj = currentObj[fieldPath[i]];
    }
    if (isLocation) {
      const values = value.split(",");
      currentObj[fieldPath[fieldPath?.length - 1]].city = values[0]
        ? values[0]
        : "";
      currentObj[fieldPath[fieldPath?.length - 1]].state = values[1]
        ? values[1]
        : "";
      currentObj[fieldPath[fieldPath?.length - 1]].country = values[2]
        ? values[2]
        : "";
      handleUserJsonChange(updatedUserJson);
      return;
    }
    if (isPeriod) {
      const values = value?.split("-");
      if (isExp) {
        if (values[0] === "") {
          currentObj[fieldPath[fieldPath?.length - 1]].joining = "";
          currentObj[fieldPath[fieldPath?.length - 1]].leaving = "";
          return;
        }
        currentObj[fieldPath[fieldPath?.length - 1]].joining =
          values[0]?.trim() !== "" ? values[0] : "";
        currentObj[fieldPath[fieldPath?.length - 1]].leaving =
          values[1]?.trim() !== "" ? values[1] : "";
      }
      currentObj[fieldPath[fieldPath?.length - 1]].start =
        values[0]?.trim() !== "" ? values[0] : "";
      currentObj[fieldPath[fieldPath?.length - 1]].completed =
        values[1]?.trim() !== "" ? values[1] : "";
      handleUserJsonChange(updatedUserJson);
      return;
    }
    if (isEmail) {
      if (!validateEmail(value)) {
        toast.error("Email is not valid..");
        handleSetEditable(true);
        inputRef.current.select();
        return;
      }
    }
    if (isMobile) {
      if (!validateMobileNumber(value)) {
        toast.error("Require 10 digits number..");
        handleSetEditable(true);
        inputRef.current.select();
        return;
      }
    }
    if (!isTrim) {
      currentObj[fieldPath[fieldPath.length - 1]] = seperator
        ? value?.split(seperator)
        : value;
      handleUserJsonChange(updatedUserJson);
      return;
    }
    currentObj[fieldPath[fieldPath.length - 1]] = seperator
      ? value?.split(seperator).map((s) => {
          return s.trim() !== "" ? s.trim() + "." : "";
        })
      : value;
    handleUserJsonChange(updatedUserJson);
  };
  return (
    <>
      {isTextarea ? (
        <textarea
          className="textarea"
          id="textarea"
          name="textarea"
          rows="4"
          cols="90"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={handleUpdate}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          className="edit__input"
          type={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          ref={inputRef}
          onBlur={handleUpdate}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default InputComponent;
