import React from "react";

const Etiqueta = ({ text }) => {
  return <div style={{ border: "solid 1px black", borderRadius: 5, width: 100, height: 60, background: "lightblue", textAlign: "center", paddingTop: 40}} text={text} >{text}</div>
};

export default Etiqueta;