import React from "react";

interface HeaderProps {
  showTab: string;
  setShowTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ showTab, setShowTab }: HeaderProps) {
  return (
    <div className="header-container">
      <button
        className={`selection-button ${
          showTab === "Preference" ? "active" : ""
        }`}
        onClick={() => setShowTab("Preference")}
      >
        Preference
      </button>
      <button
        className={`selection-button ${showTab === "People" ? "active" : ""}`}
        onClick={() => setShowTab("People")}
      >
        People
      </button>
      <button
        className={`selection-button ${showTab === "Days" ? "active" : ""}`}
        onClick={() => setShowTab("Days")}
      >
        Days
      </button>
    </div>
  );
}
