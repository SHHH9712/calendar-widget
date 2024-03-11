import Toggle from "./Toggle";

interface BodyProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DateToggle({ isChecked, setIsChecked }: BodyProps) {
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="datetoggle-container">
      <label>Specific date</label>
      <Toggle handleToggle={handleToggle} isChecked={isChecked} />
    </div>
  );
}
