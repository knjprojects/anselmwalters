"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Dropdown = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // Handle button click action here
    if (inputValue == "tasteofcultures") router.push("/studio");
    console.log("Entered value:", inputValue);
    // Reset input value
    setInputValue("");
    // Close dropdown
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Open Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter something"
            className="dropdown-input"
          />
          <button onClick={handleButtonClick} className="dropdown-button">
            Enter
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
