import React from "react";

const Experience = (props) => {
  const experienceStyle = {
    height: "50%",
    fontSize: "14px"
  };

  const ulStyle = {
    marginLeft: "15px"
  }
  
  const titleStyle = {
    backgroundColor: "#e3c6bf"
  }
  
  const { positions } = props;

  return (
    <div style={experienceStyle}>
      <h3 style={titleStyle}>Work experience</h3>
      <ul style={ulStyle}>
        {positions.map((position) => {
          return (
            <li key={position.id}>
              {position.year} {position.position}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
