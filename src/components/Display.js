import React from "react";
import "../styles/Display.css";
import { useSelector } from "react-redux";

const Display = () => {
  const counterReducer = useSelector((state) => state.counterReducer);
  return (
    <div className="display">
      <h1 className="value">Current Value: {counterReducer}</h1>
    </div>
  );
};

export default Display;
