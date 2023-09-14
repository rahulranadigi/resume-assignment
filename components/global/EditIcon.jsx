import React from "react";
import { AiFillEdit } from "react-icons/ai";
import './EditIcon.css'

const EditIcon = ({ handleSetEditable }) => {
  return <AiFillEdit className="edit__icon" onClick={handleSetEditable} />;
};

export default EditIcon;
