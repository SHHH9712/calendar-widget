interface ToggleProps {
  handleToggle: () => void;
  isChecked: boolean;
}

const Toggle = ({ handleToggle, isChecked }: ToggleProps) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default Toggle;
