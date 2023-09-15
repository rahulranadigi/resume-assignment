import { useContext, useEffect, useState } from "react";
import Resume from "../components/Resume/Resume";
import Upload from "../components/Upload/Upload";
import { Context } from "../provider/ContextProvider";
import "./app.css";
import ThemeToggler from "../components/theme-toggler/ThemeToggler";

function App() {
  
  const [dark, setDark] = useState(false);
  const { userJson } = useContext(Context);

  useEffect(() => {
    //would have used toggle to change the theme but not used beacuse whenever the component this effect will not so the theme will automatically set to dark so to avoid that i have used if else
    if (dark) {
      document.body.classList.add("dark-theme-variable");
    } else {
      document.body.classList.remove("dark-theme-variable");
    }
  }, [dark]);

  const handleDarkThemeChange = (value) => {
    if (typeof value !== "boolean") return;
    setDark(value);
  };

  return (
    <div className="relative__">
      {userJson ? <Resume /> : <Upload />}
      <ThemeToggler isDark={dark} handleThemeChange={handleDarkThemeChange} />
    </div>
  );
}

export default App;
