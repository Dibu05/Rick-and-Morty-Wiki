import React from "react";
import FilterBtn from "../Filters/FilterBtn";

const Status = ({setStatus, setPageNumer}) => {
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Estado
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((items, index) => (
            <FilterBtn
            setPageNumer={setPageNumer}
            task={setStatus}
            key={index}
            name='status'
            index={index}
            items={items}

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
