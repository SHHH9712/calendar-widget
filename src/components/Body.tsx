import React, { useState } from "react";

import DateCount from "./DateCount";
import DateToggle from "./DateToggle";
import Calendar from "./Calendar";

export default function Body() {
  const [dateCount, setDateCount] = useState<number>(1);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="body-container">
      <div className="zoomable">
        <h3>Travel for</h3>
        <div className={`date-count-container ${isChecked ? "close" : ""}`}>
          <DateCount dateCount={dateCount} setDateCount={setDateCount} />
        </div>
        <DateToggle isChecked={isChecked} setIsChecked={setIsChecked} />
        <div className={`calendar-container ${isChecked ? "" : "close"}`}>
          <Calendar />
        </div>
      </div>
    </div>
  );
}
