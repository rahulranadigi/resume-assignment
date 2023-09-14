import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import InputComponent from "./InputComponent";
import EditIcon from "./EditIcon";

const ListComponent = ({ items, isProject, fieldName, index }) => {
  var length = items.join().length;
  const [isFeatureEditable, setIsFeatureEditable] = useState(false);
  return (
    <>
      {isFeatureEditable ? (
        <InputComponent
          isArray={true}
          data={items ? items : ""}
          placeholder={"Points Seperated by dot"}
          fieldName={fieldName}
          index={index}
          isTextarea={true}
          seperator={"."}
          handleSetEditable={(value) => setIsFeatureEditable(value)}
          isTrim={true}
        />
      ) : (
        <ul className={`list`}>
          {items
            .filter((item) => item !== "")
            .map((item, index) => (
              <li className={`list__items project__list`} key={index}>
                {item}
              </li>
            ))}
          {isProject && length < 100 && (
            <li
              className="list__items project__list"
              style={{
                color: `${
                  isProject && length < 100 ? "red" : "var(--text-color)"
                }`,
                listStyle: "none",
              }}
            >
              *Description Must be more than 100 word
            </li>
          )}
          <EditIcon
            handleSetEditable={() => {
              setIsFeatureEditable(true);
            }}
          />
        </ul>
      )}
    </>
  );
};

export default ListComponent;
