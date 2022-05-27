import React from "react";

const FilterBtn = ({index, name, items, task, setPageNumber}) => {
  let handleChange=()=>{
    task(items);
    setPageNumber(1);
  };



  return (
    <div>
      <style jsx>{`
      
      .x:checked + label {
        background-color: #0b5ed7;
        color: #fff;
      }
      input[type='radio']{
        display: none;
        
      }
      `}</style>
      <div className="form-check">
        <input
        onClick={() => handleChange()}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" for={`${name}-${index}`}>{items}</label>
      </div>
      </div>
  );
};

export default FilterBtn;
