import React from "react";

export default function Synonyms(props) {
  if (props.userSynonyms && props.userSynonyms.length > 0) {
    return (
      <ul className="Synonyms">
        <br />
        <strong className="Highlight">Synonyms: </strong>
        {props.userSynonyms.map(function (eachSynonym, index) {
          return <li key={index}>{eachSynonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
