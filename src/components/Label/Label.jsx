import React from "react";

const Label = ({ htmlfor, children, className }) => {
  return (
    <>
      <label
        htmlFor={htmlfor}
        className={`block text-base text-gray-300 font-medium mb-1.5 ${className}`}
      >
        {children}
      </label>
    </>
  );
};

export default Label;
