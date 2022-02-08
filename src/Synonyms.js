import React from "react";

export default function Synonyms(props) {
  if (props.userSynonyms) {
    return (
      <ul className="Synonyms">
        <br />
        <strong>Synonyms: </strong>
        {props.userSynonyms.map(function (eachSynonym, index) {
          return <li key={index}>{eachSynonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
