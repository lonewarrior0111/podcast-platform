import React from "react";
import "./styles.css";
function InputComponent({ type, state, setState, placeholder, required }) {
  return (
    <input
      type={type}
      value={state}
      placeholder={placeholder}
      required={required}
      onChange={(e) => setState(e.target.value)}
      className="custom-input"
    ></input>
  );
}

export default InputComponent;
