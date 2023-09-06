import React from "react";

const ListComponent = ({ items, isProject }) => {
  var length = items.join().length;
  return (
    <ul className={`list`}>
      {items.map((item) => (
        <li className={`list__items project__list`} key={item.id}>
          {item}
        </li>
      ))}
      {isProject && length && (
        <li
          className="list__items project__list"
          style={{
            color: `${isProject && length < 100 ? "red" : "var(--text-color)"}`,
            listStyle: "none",
          }}
        >
          *Description Must be more than 100 word
        </li>
      )}
    </ul>
  );
};

export default ListComponent;
