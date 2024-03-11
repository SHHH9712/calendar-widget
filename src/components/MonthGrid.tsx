import React from "react";

interface MonthGridProps {
  month: string;
  days: number;
  selectedRange: {
    startDate: Date | null;
    endDate: Date | null;
  };
  onDateClick: (date: Date) => void;
}

export default function MonthGrid({
  month,
  days,
  selectedRange,
  onDateClick,
}: MonthGridProps) {
  const getFirstDayOfMonth = (month: string, year: number) => {
    const date = new Date(`${month} 1, ${year}`);
    return date.getDay();
  };

  const firstDay = getFirstDayOfMonth(month.split(" ")[0], 2024);
  const emptyStartDays = Array(firstDay).fill(null);
  const monthDays = [
    ...emptyStartDays,
    ...Array.from({ length: days }, (_, i) => i + 1),
  ];

  const isDateSelected = (day: number) => {
    if (!selectedRange.startDate || !selectedRange.endDate) return false;
    const date = new Date(`${month} ${day}, 2024`);
    return date >= selectedRange.startDate && date <= selectedRange.endDate;
  };

  const isStartDate = (day: number) => {
    if (!selectedRange.startDate) return false;
    const date = new Date(`${month} ${day}, 2024`);
    return date.getTime() === selectedRange.startDate.getTime();
  };

  const isEndDate = (day: number) => {
    if (!selectedRange.endDate) return false;
    const date = new Date(`${month} ${day}, 2024`);
    return date.getTime() === selectedRange.endDate.getTime();
  };

  return (
    <div className="month-grid">
      <h2 className="month-title">{month}</h2>
      <div className="days-grid">
        {monthDays.map((day, index) => (
          <button
            key={index}
            className={`day ${index % 7 === 0 ? "sunday" : ""} ${
              isDateSelected(day) ? "selected" : ""
            } ${isStartDate(day) ? "start-date" : ""} ${
              isEndDate(day) ? "end-date" : ""
            }`}
            onClick={() =>
              day && onDateClick(new Date(`${month} ${day}, 2024`))
            }
          >
            {day || ""}
          </button>
        ))}
      </div>
    </div>
  );
}
