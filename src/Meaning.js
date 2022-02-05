import React from "react";

export default function Meaning(prop) {
  return (
    <div className="Meaning">
      <h3> {prop.meaningprop.partOfSpeech}</h3>
      {prop.meaningprop.definitions.map(function (eachDefinition, index) {
        return (
          <div key={index}>
            <p>{eachDefinition.definition} </p>
            <br />
            <em>{eachDefinition.example} </em>
          </div>
        );
      })}
    </div>
  );
}
