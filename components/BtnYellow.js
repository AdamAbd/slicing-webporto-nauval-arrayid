import React from "react";

export default function BtnYellow({ children, className, variant }) {
  const addClassName = className ? ` ${className}` : "";

  const variants = {
    "outline-yellow": "border border-yellow-500 text-yellow-500 ",
    "rounded-yellow": "bg-yellow-500 text-black ",
  };

  const pickedVariant = variants[variant]

  return (
    <a
      href=""
      className={` py-3 px-10 font-semibold text-lg rounded-full inline-block ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
};
