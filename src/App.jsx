import { useContext, useEffect, useState } from "react";
import Resume from "../components/Resume/Resume";
import Upload from "../components/Upload/Upload";
import { Context } from "../provider/ContextProvider";
import "./app.css";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

function App() {
  const [dark, setDark] = useState(false);
  const { userJson } = useContext(Context);
  useEffect(() => {
    //would have used toggle to change the theme but not used beacuse whenever the component this effect will not so the theme will automatically set to dark so to avoid that i have used if elese
    if (dark) {
      document.body.classList.add("dark-theme-variable");
    } else {
      document.body.classList.remove("dark-theme-variable");
    }
  }, [dark]);
  return (
    <div className="relative__">
      {userJson ? <Resume /> : <Upload />}
      <button className="theme__switcher">
        {dark ? (
          <BsFillSunFill
            onClick={() => {
              setDark(false);
            }}
          />
        ) : (
          <MdDarkMode
            onClick={() => {
              setDark(true);
            }}
          />
        )}
      </button>
    </div>
  );
}

export default App;
