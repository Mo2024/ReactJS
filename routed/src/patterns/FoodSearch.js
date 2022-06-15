import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";


function FoodSearch() {

  const [query, setQuery] = useState('');
  const history = useNavigate()

  let handleChange = useCallback((e) => {
    setQuery(e.target.value);
  }, [])

  let handleClick = useCallback((e) => {
    // e.preventDefault();
    history(`/food/${query}`);
  }, [query])

  return (
    <div>
      <h1>Search For A Food!</h1>
      <input
        type='text'
        placeholder='search for a food'
        value={query}
        onChange={handleChange}
      />
      <Link to={`/food/${query}`}>Go!</Link>
      <button onClick={handleClick}>Save New Food!</button>
    </div>
  );
}
export default FoodSearch;
