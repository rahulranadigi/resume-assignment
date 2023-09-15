import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {

  const [userJson, setUserJson] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileNameChange = (value)=>{
    console.log(value);
    // if(typeof(value) !== 'string') return
    setFileName(value);
  }

  const handleUserJsonChange = (value)=>{
    if(typeof(value) !== 'object') return

    setUserJson(value)
  }

  return (
    <Context.Provider value={{ userJson, handleUserJsonChange, fileName, handleFileNameChange }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
