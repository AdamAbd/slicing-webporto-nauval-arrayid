import React from "react";

export default function Field({ label, name, type, className }) {
  const addClassName = className ? ` ${className}` : "";

  const formControllerClassName = `bg-transparent border border-abu-300 py-3 px-6 w-full ${addClassName}`;

  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-1 font-semibold text-sm">
        {label}
      </label>
      {type === "text" ? (
        <input
          type="text"
          name={name}
          id={name}
          className={formControllerClassName}
        />
      ) : (
        <textarea name={name} id={name} className={formControllerClassName} />
      )}
    </div>
  );
}
