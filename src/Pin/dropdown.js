import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown drop-pin">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        board1
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <p>board 2</p>
          <p>board 3</p>
          <p>board 4</p>
          <p>board 5</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;