import React from "react";
import style from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  let handleClick = (e) => {
    e.preventDefault();
  };

  let handleChange = (e) => {
    setPageNumber(1);
    setSearch(e.target.value);
  };

  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        type="text"
        placeholder="Buscar personajes"
        className={style.input}
        onChange={(e) => handleChange(e)}
      />
      <button
        onClick={(e) => handleClick(e)}
        className={`${style.btn} btn btn-primary fs-5`}
      >
        Buscar
      </button>
    </form>
  );
};

export default Search;
