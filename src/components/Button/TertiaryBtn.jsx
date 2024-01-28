import React from "react";

const TertiaryBtn = ({ type, id, children, className }) => {
  return (
    <>
      <button
        type={type}
        id={id}
        className={`text-base text-indigo-600 bg-transparent font-medium px-3 py-1.5 rounded flex items-center gap-x-1 hover:text-indigo-600/70 ease-out duration-500  ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default TertiaryBtn;
