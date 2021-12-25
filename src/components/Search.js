import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState({});

  const searchHandler = () => {
    console.log("Inside Search");
    setQuery(text);
    props.resultData(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/users/${query ? query : "octocat"}`
      );
      setData(result.data);
      props.resultData(result.data);
    };
    fetchData();
  }, [query]);

  return (
    <div className="search-container">
      <div className="input-container">
        <img
          className="search-icon"
          src="https://github-user-search-iliwili.netlify.app/static/media/icon-search.0cc0c984.svg"
          alt="search-icon"
        />
        <input
          className="input-search"
          type="text"
          value={text}
          placeholder="Search GitHub username..."
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </div>
      <button className="search-button" onClick={searchHandler}>
        Search
      </button>
    </div>
  );
};

export default Search;
