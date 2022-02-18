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
                <a
                  href={eachPhoto.src.original}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    size={200}
                    src={eachPhoto.src.landscape}
                    className="img-fluid"
                    alt="users-word"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
