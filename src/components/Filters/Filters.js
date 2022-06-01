import React from "react";
import Gender from "../Category/Gender";
import Species from "../Category/Species";
import Status from "../Category/Status";
import './Filter.css'

const Filters = ({setStatus, setPageNumber, setSpecies, setGender}) => {
  let handleDelete = () =>{
    setStatus("");
    setPageNumber(1);
    setSpecies("");
     setGender("");
     window.location.reload(false);
  }
  
  return (
    <div className="hola col-lg-3-auto col-12 mb-3">
      <div className="text-center fw-bold fs-4 mb-3">Filtros</div>
      <div
      onClick={handleDelete}
        style={{ cursor: "pointer" }}
        className="text-primary text-decoration-underline text-center mb-3 "
      >
        Eliminar
      </div>

      <div className="accordion" id="accordionExample">

        <Gender setGender={setGender} setPageNumber={setPageNumber}/> 
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>

      </div>
    </div>
  );
};

export default Filters;
