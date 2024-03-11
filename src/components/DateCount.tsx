interface DateCountProps {
  dateCount: number;
  setDateCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function DateCount({ dateCount, setDateCount }: DateCountProps) {
  return (
    <div className="date-count">
      <button
        className="plus-minus"
        onClick={() => {
          if (dateCount > 1) {
            setDateCount(dateCount - 1);
          }
        }}
      >
        -
      </button>
      {dateCount}
      <button
        className="plus-minus"
        onClick={() => setDateCount(dateCount + 1)}
      >
        +
      </button>
      <span>Days</span>
    </div>
  );
}
