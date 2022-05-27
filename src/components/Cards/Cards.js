import React from "react";
import styles from "./Cards.modules.scss";

const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((e) => {
      return (
        <div className="col-4 mb-4 position-relative" key={e.id}>
          <div className="card bg-dark text-white">
            <img src={e.image} alt={e.name} className="img-fluid" />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{e.name}</div>
              <div className="">
                <div className="fs-6">Ubicacion</div>
                <div className="fs-5">{e.location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (e.status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {e.status}
                </div>
              );
            } else if (e.status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {e.status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {e.status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "Personaje no encontrado";
  }

  return <>{display}</>;
};

export default Cards;