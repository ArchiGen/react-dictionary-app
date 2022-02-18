import React from "react";

export default function Example(props) {
  if (props.examples) {
    return (
      <div className="Example">
        <div>
          <strong className="Highlight">Example:</strong>
          <span id="example"> {props.examples} </span>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
