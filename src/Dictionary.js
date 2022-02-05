import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    //console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Container">
      <h1>Dictionary App</h1>

      <form className="form" onSubmit={search}>
        <input type="search" placeholder="word" onChange={handleChange}></input>
        <button type="submit" className="btn btn-primary">
          search
        </button>
      </form>

      <Result mydata={result} />
    </div>
  );
}
