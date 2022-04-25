import React, { useRef } from "react";

export const Start = ({ setUserName }) => {
  const inputRef = useRef();

  const handelClck = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
  };
  return (
    <div className="start">
      <h1 className="welcome">
        Welcome to " Who Wants to Be a Millionaire ? "{" "}
      </h1>
      <input
        type="text"
        placeholder="Enter You Name"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={handelClck}>
        Start
      </button>
    </div>
  );
};
