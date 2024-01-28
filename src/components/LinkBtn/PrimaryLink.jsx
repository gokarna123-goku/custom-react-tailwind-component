import React from "react";
import { Link } from "react-router-dom";

const PrimaryLink = ({ link, children, className }) => {
  return (
    <>
      <Link
        to={link}
        className={`text-base text-gray-200 bg-indigo-600 font-medium px-3 py-1.5 rounded flex items-center gap-x-1 hover:bg-indigo-600/70 ease-out duration-500 ${className}`}
      >
        {children}
      </Link>
    </>
  );
};

export default PrimaryLink;
