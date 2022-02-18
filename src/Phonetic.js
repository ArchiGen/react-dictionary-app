import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span>
        /{props.userPhonetic.text}/
        <a
          href={props.userPhonetic.audio}
          className="Listen"
          target="_blank"
          rel="noreferrer"
        >
          listen
        </a>
      </span>
    </div>
  );
}
