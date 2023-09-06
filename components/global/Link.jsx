import React from "react";

const Link = ({ name, href,className}) => {
  return <a href={href?href:"/"} className={`link ${className}`}>{name?name:"No name"}</a>;
};

export default Link;
