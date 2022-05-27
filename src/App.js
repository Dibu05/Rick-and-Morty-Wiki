import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Paginations from "./components/Paginations/Paginations";
import Search from "./components/Search/Search";

function App() {
  // El numero de pagina por default es 1
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [species, setSpecies] = useState("");
  let [gender, setGender] = useState("");
  

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        <span className="text-primary">Wiki</span> Rick and Mortis!
      </h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters
              setStatus={setStatus}
              setPageNumber={setPageNumber}
              setSpecies={setSpecies}
              setGender={setGender}
            />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Paginations
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default App;
