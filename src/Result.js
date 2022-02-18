import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(container) {
  //console.log(container.mydata);
  if (container.mydata) {
    return (
      <div className="Results Section">
        <h2>{container.mydata.word}</h2>
        {container.mydata.phonetics.map(function (eachPhonetic, index) {
          return (
            <div key={index}>
              <Phonetic userPhonetic={eachPhonetic} />
            </div>
          );
        })}
        {container.mydata.meanings.map(function (meaningvalue, index) {
          return (
            <div key={index}>
              <Meaning meaningprop={meaningvalue} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
