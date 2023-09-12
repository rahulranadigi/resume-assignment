const Heading = ({ name, size, className, error }) => {
  return (
    <h2
      style={{ fontSize: size, color: `${name ? "var(--main-color)" : "red"}` }}
      className={`heading ${className}`}
    >
      {name ? name : `* ${error} Mandatory`}
    </h2>
  );
};

export default Heading;
