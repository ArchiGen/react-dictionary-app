import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(prop) {
  //console.log(prop.meaningprop);
  return (
    <div className="Meaning">
      <h3> {prop.meaningprop.partOfSpeech}</h3>
      {prop.meaningprop.definitions.map(function (eachDefinition, index) {
        return (
          <div key={index}>
            <p>
              <strong className="Highlight">Definition: </strong>
              {eachDefinition.definition}{" "}
            </p>

            <Example examples={eachDefinition.example} />
            <br />
            <Synonyms userSynonyms={eachDefinition.synonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
