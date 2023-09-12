import React, { useContext, useState } from "react";
import { Context } from "../../provider/ContextProvider";

const UserSkill = ({ label, skills, index }) => {
  const { userJson, setUserJson } = useContext(Context);
  const [isEdit, setIsEdit] = useState(false);
  const [skill, setSkill] = useState(
    skills.length > 0 ? skills.join(", ") : "NA"
  );

  const handleUpdate = () => {
    const updatedUserJson = { ...userJson };
    updatedUserJson.userskills[index].skills = skill?.split(",");
    setUserJson(updatedUserJson);
    setIsEdit(false);
  };

  return (
    <div
      className="skill__container"
      style={{ display: `${skill?.includes("NA") && "none"}` }}
    >
      <h2 className="skill__heading">{label}</h2>
      {isEdit ? (
        <>
          <input
            className="skills__name"
            style={{ border: "1px solid var(--header-color)" }}
            value={skill}
            onChange={(e) => {
              setSkill(e.target.value);
            }}
            onBlur={handleUpdate}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p className="skills__name">
            {skills?.length > 0 && skills[0]?.trim() !== ""
              ? skills?.join(", ")
              : "NA"}
          </p>
          <button onClick={() => setIsEdit(true)}>Edit</button>{" "}
        </>
      )}
    </div>
  );
};

export default UserSkill;
