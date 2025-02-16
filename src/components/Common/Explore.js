import React from "react";

const Explore = () => {
  return (
    <div className="aders">
      <p>
        <i
          className="fas fa-angle-double-right"
          style={{
            color: "#f39c12",
            marginRight: "5px",
          }}
        ></i>{" "}
        Explore More about different batches offered by IIT Academy.
      </p>
      <div className="all_batches">
        <a
          href="https://www.iitacademy.in/engineering-batches"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="details4-btn">Engineering Batches</button>
        </a>
        <a
          href="https://www.iitacademy.in/medical-batches"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="details4-btn">Medical Batches</button>
        </a>
        <a
          href="https://www.iitacademy.in/foundation-batches"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="details4-btn">Foundation Batches</button>
        </a>
        <a
          href="https://www.iitacademy.in/board-batches"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="details4-btn">Boards Batches</button>
        </a>
      </div>
    </div>
  );
};

export default Explore;
