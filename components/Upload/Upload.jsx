import React, { useContext, useEffect, useRef } from "react";
import "./upload.css";
import { HiUpload } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { FcFolder } from "react-icons/fc";
import { Context } from "../../provider/ContextProvider";
import { toast } from "react-toastify";

const Upload = () => {
  const { fileName, handleFileNameChange, handleUserJsonChange } = useContext(Context);
  const inputRef = useRef(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/json") {
        toast.error("Only JSON type file is accepted..");
        return;
      } else {
        handleFileNameChange(file.name);
        const reader = new FileReader();
        reader.onload = (e) => {
          handleUserJsonChange(JSON.parse(e.target.result));
        };
        reader.readAsText(file);
        toast.success("Uploaded Successfully...");
      }
    }
  };
  const handleDelete = () => {
    handleUserJsonChange(null);
    handleFileNameChange("");
    inputRef.current.value = null;
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
        event.preventDefault();
        inputRef.current.click();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="upload__container flexCenter">
      <form
        action=""
        className="form flexCenter"
        onClick={() => {
          inputRef.current.click();
        }}
      >
        <input
          type="file"
          name="file"
          id="userJson"
          accept=".json"
          hidden
          ref={inputRef}
          onChange={(e) => {
            handleFileChange(e);
          }}
        />
        {fileName ? (
          <div className="folder flexCenter">
            <FcFolder className="folder__icon" />
            <span className="folder__name">{fileName}</span>
          </div>
        ) : (
          <div className="folder flexCenter">
            <HiUpload className="folder__icon" />
            <span className="folder__name">Upload your Json...</span>
          </div>
        )}
      </form>
      {fileName && (
        <div className="upload__controller">
          <span className="upload__filename">{fileName}</span>
          <MdDelete className="delete__btn" onClick={handleDelete} />
        </div>
      )}
    </main>
  );
};

export default Upload;
