import React from "react";
import spinner from "./Spinner-1s-200px.gif";

export default () => {
  return (
    <div>
      <img src={spinner} alt="Loading..." className="Spinner" />
    </div>
  );
};
