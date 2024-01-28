import React from "react";

const Input = ({ type, id, name, placeholder, className }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className={`w-full h-11 bg-transparent border border-gray-700 outline-none px-3 focus:outline-none focus:border-indigo-600 rounded-md text-base text-gray-200 font-medium ${className}`}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
