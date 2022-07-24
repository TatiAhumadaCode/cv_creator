import React from "react";

const FullName = (props) => {

  const fullNameStyle = {
    fontSize: "24px"
  };

  return (
    <div>
      <h1 style={fullNameStyle}>{props.fullName}</h1>
    </div>
  );
};

export default FullName;
