// ViolinBackground.js
import React from "react";

const ViolinBackground = ({ children, backgroundImage }: any) => {
  return (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-0 bg-cover bg-center hover:sacle-105"
        style={{ backgroundImage }}
      >
        {children}
      </div>
    </div>
  );
};

export default ViolinBackground;
