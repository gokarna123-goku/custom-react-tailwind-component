import React from "react";

const Checkbox = ({ id, htmlfor, name, value, children, className }) => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <input
          id={id}
          type="checkbox"
          value={value}
          name={name}
          className={`w-4 h-4 bg-gray-700 accent-indigo-600 hover:accent-indigo-600/80 border-indigo-600 ${className}`}
        />
        <label
          htmlFor={htmlfor}
          className="text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {children}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
