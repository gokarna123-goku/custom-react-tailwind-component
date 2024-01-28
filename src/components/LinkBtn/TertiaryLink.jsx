import React from "react";
import { Link } from "react-router-dom";

const TertiaryLink = ({ link, children, className }) => {
  return (
    <>
      <Link
        to={link}
        className={`text-base text-indigo-600 bg-transparent font-medium px-3 py-1.5 rounded flex items-center gap-x-1 hover:text-indigo-600/70 ease-out duration-500 ${className}`}
      >
        {children}
      </Link>
    </>
  );
};

export default TertiaryLink;
