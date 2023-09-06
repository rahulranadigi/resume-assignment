import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../../provider/ContextProvider";

const Heading = ({ name, size, className, error, fieldName }) => {
  const headingRef = useRef(null);
  const { userJson, setUserJson } = useContext(Context);

  const handleContent = () => {
    headingRef.current.contentEditable = true;
    headingRef.current.focus();
  };
  const handleBlur = () => {
    headingRef.current.contentEditable = false;
    const updatedUserJson = { ...userJson };
    const fieldPath = fieldName.split(".");
    let currentObj = updatedUserJson;

    for (let i = 0; i < fieldPath.length - 1; i++) {
      currentObj = currentObj[fieldPath[i]];
    }

    currentObj[fieldPath[fieldPath.length - 1]] =
      headingRef.current.textContent;

    setUserJson(updatedUserJson);
  };

  useEffect(() => {}, [userJson]);
  return (
    <h2
      style={{ fontSize: size, color: `${name ? "var(--main-color)" : "red"}` }}
      ref={headingRef}
      className={`heading ${className}`}
      onClick={handleContent}
      onBlur={handleBlur}
    >
      {name ? name : `* ${error} Mandatory`}
    </h2>
  );
};

export default Heading;
