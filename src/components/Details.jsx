import React from "react";
import { useState } from "react";
import Schedule from "./Schedule";

const Details = ({ openDetails, setOpenDetails }) => {
  const [openSchedule, setOpenSchedule] = useState(false);
  return (
    <div className="details-container">
      <div className="hello-container">
        <button
          onClick={() => setOpenDetails(!openDetails)}
          className="close-btn"
        >
          X
        </button>
        <button onClick={() => setOpenSchedule(!openSchedule)}>
          Add Schedule
        </button>
      </div>
      {openSchedule && (
        <Schedule
          openSchedule={openSchedule}
          setOpenSchedule={setOpenSchedule}
        />
      )}
    </div>
  );
};

export default Details;
