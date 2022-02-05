import React from "react";
import Meaning from "./Meaning";

export default function Result(container) {
  //console.log(container.mydata);
  if (container.mydata) {
    return (
      <div className="Results">
        <h2>{container.mydata.word}</h2>
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
