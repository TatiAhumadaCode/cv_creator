import React from "react";

const Skills = (props) => {
  const skillsStyle = {
    height: "50%",
    textAlign: "center",
    fontSize: "14px",
  };
  
  const titleStyle = {
    backgroundColor: "#e3c6bf"
  }
  
  const { skills } = props;
  return (
    <div style={skillsStyle}>
      <h3 style={titleStyle}>Skills</h3>
      <ul>
        {skills.map((skill) => {
          return <li key={skill.id}>{skill.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
