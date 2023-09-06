import React from "react";
import Link from "./Link";
import ListComponent from "./ListComponent";
import Heading from "./Heading";

const ProjectComponent = ({ name, href, technology, features, source }) => {
  return (
    <section className="project__section">
      <div className="project__header">
        {name ? (
          <Link href={href} name={name} className={"bold"} />
        ) : (
          <Heading error={"Project Name"} size={".8rem"} />
        )}
        <p
          className="technologies"
          style={{ color: `${technology ? "var(--text-color)" : "red"}` }}
        >
          {technology ? technology?.join(", ") : "*Technologies is Mandatory"}
        </p>
        {source ? (
          <Link href={source} name={"Source Code"} />
        ) : (
          <Heading error={"Source Link"} size={".8rem"} />
        )}
      </div>
      <ListComponent items={features} isProject={true} />
    </section>
  );
};

export default ProjectComponent;
