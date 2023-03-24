import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      className="absolute top-0 left-0 w-full h-screen z-40 bg-black bg-opacity-75"
      onClick={props.onClick}
      onKeyDown={props.onClick}
      aria-hidden="true"
    ></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
