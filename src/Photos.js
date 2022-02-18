import React from "react";
import "./Photos.css";

export default function Photos(props) {
  //console.log(props.pexelData);

  if (props.pexelData) {
    return (
      <div className="Photos Section">
        <div className="row">
          {props.pexelData.map(function (eachPhoto, index) {
            return (
              <div className="col-4" key={index}>
                <img
                  size={200}
                  src={eachPhoto.src.landscape}
                  className="img-fluid"
                />
              </div>
            );
          })}
      </div>
    );
  } else {
    return null;
  }
}
