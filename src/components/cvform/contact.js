import React from "react";

const Contact = (props) => {
  const contactStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "450px",
    marginBottom: "2px",
    borderBottom: "2px solid black"
  }

  return (
    <div style={contactStyle}>
        <p>{props.phone}</p>
        <p>{props.email}</p>
        <p>{props.linkedin}</p>
    </div>
  );
};

export default Contact;
