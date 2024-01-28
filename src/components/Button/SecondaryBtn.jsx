import React from "react";

const SecondaryBtn = ({ type, id, children, className }) => {
  return (
    <>
      <button
        type={type}
        id={id}
        className={`text-base text-indigo-600 bg-indigo-600/5 font-medium px-3 py-1.5 rounded flex items-center border border-indigo-600 gap-x-1 hover:border-indigo-600/70 hover:bg-indigo-600/10 ease-out duration-500 ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default SecondaryBtn;
