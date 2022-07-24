import React from "react";

const Languages = (props) => {
  const idiomsStyle = {
    height: "50%",
    textAlign: "center",
    fontSize: "14px",
  };

  const titleStyle = {
    backgroundColor: "#e3c6bf"
  }
  
  const { languages } = props;
  return (
    <div style={idiomsStyle}>
      <h3 style={titleStyle}>Languages</h3>
      <ul>
        {languages.map((language) => {
          return <li key={language.id}>{language.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Languages;
