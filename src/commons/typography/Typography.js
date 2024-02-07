import React from "react";

const Typography = ({ type, text}) => {
  if (type === "h1") {
    return <h1>{text}</h1>
  }
  else if (type === "h3") {
    return <p>{text}</p>
  }
  else if (type === "p") {
    return <p>{text}</p>
  };
};

export default Typography;