import React from "react";
import { eachDayOfInterval, endOfWeek, getWeek, startOfWeek } from "date-fns";

const Schedule = ({ openSchedule, setOpenSchedule }) => {
  const weekStart = startOfWeek(new Date());
  const weekEnd = endOfWeek(new Date());

  const weekSchedule = eachDayOfInterval({ start: weekStart, end: weekEnd });
  return (
    <div className="schedule-container">
      <div className="hello-sch-container">
        <button
          onClick={() => setOpenSchedule(!openSchedule)}
          className="close-btn"
        >
          X
        </button>
        {weekSchedule.map((days) => (
          <div key={days.toISOString()} className="daily-schedule">
            <p>{days.getDate()}</p>
            <input type="text" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
