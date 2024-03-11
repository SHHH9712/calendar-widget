import React from "react";

export default function Weekdays() {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="weekdays">
      {weekdays.map((dayLabel, index) => (
        <div
          key={dayLabel}
          className={`weekday ${index === 0 ? "sunday" : ""}`}
        >
          {dayLabel[0]}
        </div>
      ))}
    </div>
  );
}
