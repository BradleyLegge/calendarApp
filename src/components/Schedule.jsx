import React from "react";
import { eachDayOfInterval, endOfWeek, format, startOfWeek } from "date-fns";

const Schedule = ({ openSchedule, setOpenSchedule }) => {
  const weekStart = startOfWeek(new Date());
  const weekEnd = endOfWeek(new Date());
  console.log(weekStart);

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
        {weekSchedule.map((day) => {
          const dayName = format(day, "eee");
          return (
            <div key={day.toISOString()} className="daily-schedule">
              <p>{`${dayName} ${day.getDate()}`}</p>
              <input type="text" /> to <input type="text" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
