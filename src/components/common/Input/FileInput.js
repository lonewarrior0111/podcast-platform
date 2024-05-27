import React, { useState } from "react";
import "./styles.css";
function FileInput({ accept, id, fileHandleFunction, text }) {
  const [fileSelected, setFileSelected] = useState(false);
  const onChange = (e) => {
    console.log(e.target.files);
    setFileSelected(e.target.files[0].name);
    fileHandleFunction(e.target.files[0]);
  };
  //   const fileHandleFunction = () => {};
  return (
    <>
      <label
        htmlFor={id}
        className={`custom-input ${!fileSelected ? "label-input" : "active"}`}
      >
        {/* {fileSelected ? `Banner image selected: ${fileSelected}` : `${text}`} */}
        {fileSelected ? ` File selected--> ${fileSelected}` : text}
      </label>
      <input
        type="file"
        accept={accept}
        id={id}
        style={{ display: "none" }}
        onChange={onChange}
      />
    </>
  );
}

export default FileInput;
