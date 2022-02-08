import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h5>/{props.userPhonetic.text}/</h5>
      <a href={props.userPhonetic.audio} target="_blank">
        listen
      </a>
    </div>
  );
}
