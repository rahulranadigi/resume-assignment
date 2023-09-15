import React from "react";
import "./ThemeToggler.css";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

const ThemeToggler = ({ isDark, handleThemeChange }) => {
  return (
    <button className="theme__switcher">
      {isDark ? (
        <BsFillSunFill
          onClick={() => {
            handleThemeChange(false);
          }}
        />
      ) : (
        <MdDarkMode
          onClick={() => {
            handleThemeChange(true);
          }}
        />
      )}
    </button>
  );
};

export default ThemeToggler;
