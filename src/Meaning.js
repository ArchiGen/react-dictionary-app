import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(prop) {
  //console.log(prop.meaningprop);
  return (
    <div className="Meaning">
      <h3> {prop.meaningprop.partOfSpeech}</h3>
      {prop.meaningprop.definitions.map(function (eachDefinition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {eachDefinition.definition}{" "}
            </p>
            <em>
              <strong>Example: </strong> {eachDefinition.example}{" "}
            </em>
            <br />

            <Synonyms userSynonyms={eachDefinition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
