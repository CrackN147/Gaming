import React, { useState, useEffect, useCallback } from "react";
import gamedata from "../../global/gamedata.json";

export const Searchbar = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const changeSearchValue = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  return (
    <div className="searchbox">
      <input
        className="search-style"
        type="text"
        placeholder="search...."
        value={searchValue}
        onChange={changeSearchValue}
      />
      <div className="search-bar-results"></div>
    </div>
  );
};