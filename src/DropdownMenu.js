import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span>Open Dropdown</span>
        <svg
          className={`h-4 w-4 ml-2 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9 9l-4 4h8l-4-4z" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute bg-white text-gray-700 py-2 px-4 shadow">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Option 1
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Option 2
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Option 3
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
