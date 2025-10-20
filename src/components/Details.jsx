import React from "react";

const Details = ({ openDetails, setOpenDetails }) => {
  return (
    <div className="details-container">
      <div className="hello-container">
        <button
          onClick={() => setOpenDetails(!openDetails)}
          className="close-btn"
        >
          X
        </button>
        <h1 className="hello">Hello from details.</h1>
      </div>
    </div>
  );
};

export default Details;
