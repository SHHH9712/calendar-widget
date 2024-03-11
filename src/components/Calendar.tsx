import { useState } from "react";
import Weekdays from "./Weekdays";
import MonthGrid from "./MonthGrid";

export default function Calendar() {
  const calendarData = [
    { month: "January 2024", days: 31 },
    { month: "February 2024", days: 29 },
    { month: "March 2024", days: 31 },
    { month: "April 2024", days: 30 },
    { month: "May 2024", days: 31 },
    { month: "June 2024", days: 30 },
  ];

  const [selectedRange, setSelectedRange] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: null,
    endDate: null,
  });

  const handleDateClick = (date: Date) => {
    if (!selectedRange.startDate) {
      setSelectedRange({ startDate: date, endDate: null });
    } else if (!selectedRange.endDate) {
      const timeDiff = date.getTime() - selectedRange.startDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (daysDiff <= 7 && daysDiff > 0) {
        setSelectedRange({ ...selectedRange, endDate: date });
      } else {
        setSelectedRange({ startDate: date, endDate: null });
      }
    } else {
      setSelectedRange({ startDate: date, endDate: null });
    }
  };

  return (
    <div className="calendar">
      <Weekdays />
      <div className="calendar-grid">
        {calendarData.map(({ month, days }) => (
          <MonthGrid
            key={month}
            month={month}
            days={days}
            selectedRange={selectedRange}
            onDateClick={handleDateClick}
          />
        ))}
      </div>
    </div>
  );
}
