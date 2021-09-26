import React from "react";

export default function ContactItem({ label, value, icon }) {
  return (
    <div className="flex items-start">
      <img src={icon} alt="" className="w-8" />
      <div className="ml-4">
          <div className="text-sm font-semibold mb-1">{label}</div>
          <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}
