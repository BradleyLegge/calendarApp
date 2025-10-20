import React, { use, useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import Details from "./Details";

const WEEKDAYS = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // const [currentDate, setCurrentDate] = useState(new Date());
  const [openDetails, setOpenDetails] = useState(false);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const handlePrevious = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNext = () => setCurrentMonth(addMonths(currentMonth, 1));
  // const handleDay = (day) => setCurrentDate(day);
  const handleDay = () => setOpenDetails(true);

  return (
    <div className="calendar-container">
      <div className="calendar-months">
        <button
          onClick={handlePrevious}
          className="previous-month"
        >{`<<`}</button>
        <h1>{format(currentMonth, "MMMM yyyy")}</h1>
        <button onClick={handleNext} className="next-month">
          {">>"}
        </button>
      </div>
      <div className="calendar-days">
        {WEEKDAYS.map((weekday) => (
          <div key={weekday} className="calendar-week-header">
            {weekday}
          </div>
        ))}
        {days.map((day) => {
          const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
          const isToday =
            format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
          return (
            <div
              key={day.toISOString()}
              onClick={handleDay}
              className={`calendar-week-days ${
                isToday
                  ? "today-background"
                  : isCurrentMonth
                  ? "current-month-background"
                  : "non-current-month-background"
              }`}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
      {openDetails && <Details />}
    </div>
  );
};

export default Calendar;
