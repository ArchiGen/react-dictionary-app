import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(keyword);
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
    </div>
  );
}
