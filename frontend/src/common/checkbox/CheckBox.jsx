import { useState } from "react";
const CheckBox = ({ label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          className={isChecked ? "checked" : ""}
          {...props}
        />
        <span
          style={{
            width: "300px",
            position: "relative",
            bottom: "7px",
            left: "3px",
          }}
        >
          {label}
        </span>
      </label>
    </div>
  );
};
export default CheckBox;
