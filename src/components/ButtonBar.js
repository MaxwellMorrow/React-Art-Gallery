// in ButtonBar.js
import React from "react";
// we import our handeIterate function from app.js as a prop 
// notice how it is not defined here because we are bringing it over from app.js
export default function ButtonBar(props) {
  return (
    <div>
      <button value={-5} onClick={props.handleIterate}>
        Way Back
      </button>
      <button value={-1} onClick={props.handleIterate}>
        Back
      </button>
      <button value={1} onClick={props.handleIterate}>
        Next
      </button>
      <button value={5} onClick={props.handleIterate}>
        Big Next
      </button>
    </div>
  );
}
