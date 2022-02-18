import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    //console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function handlePexelResponse(response) {
    //console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001a51fe4c83da54f7ca8c9d09a59bb63ea";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;

    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `${pexelsApiKey}` },
      })
      .then(handlePexelResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Container">
      <h1>Dictionary App</h1>

      <div className="Section">
        <div className="Question">What word are you looking for?</div>
        <div className="SearchEngine">
          <form onSubmit={search}>
            <input
              className="Search"
              type="search"
              placeholder="word"
              onChange={handleChange}
            ></input>
            <button type="submit" className="btn btn-primary">
              search
            </button>
          </form>{" "}
        </div>
      </div>

      <Result mydata={result} />
      <Photos pexelData={photos} />
    </div>
  );
}
