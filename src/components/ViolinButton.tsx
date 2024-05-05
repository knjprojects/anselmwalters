// ViolinButton.js
import React from 'react';

const ViolinButton = ({ onClick, children }:any) => {
  return (
    <button
      className="hover:scale-105 bg-transparent text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-black hover:text-white transition duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ViolinButton;
