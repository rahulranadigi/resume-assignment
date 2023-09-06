import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [userJson, setUserJson] = useState(null);
  const [fileName, setFileName] = useState("");

  return (
    <Context.Provider value={{ userJson, setUserJson, fileName, setFileName }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
