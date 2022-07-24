import React from "react";

const Education = (props) => {
  const educationStyle = {
    height: "50%",
    fontSize: "14px"
  };

  const ulStyle = {
    marginLeft: "15px"
  }

  const titleStyle = {
    backgroundColor: "#e3c6bf"
  }
  
  const { educations } = props;
  return (
    <div style={educationStyle}>
      <h3 style={titleStyle}>Education</h3>
      <ul style={ulStyle}>
        {educations.map((education) => {
          return <li key={education.id}>{education.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Education;
