import React from "react";

export default function Example(props) {
  if (props.examples) {
    return (
      <div className="Example">
        <div>
          <strong className="Highlight">Example:</strong> {props.examples}{" "}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
