import React from "react";

const Radio = ({ id, htmlfor, children, className, value }) => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <input
          name="radioGoku"
          id={id}
          type="radio"
          value={value}
          className={`w-4 h-4 form-radio bg-gray-800 dark:bg-gray-500 accent-indigo-600 ${className}`}
        />
        <label htmlFor={htmlfor} className="text-sm font-normal text-gray-300">
          {children}
        </label>
      </div>
    </>
  );
};

export default Radio;
