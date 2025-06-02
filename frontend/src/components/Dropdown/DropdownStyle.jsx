import React, { useState } from "react";

export function CustomDropdown({ options, placeholder, disabled, error, onChange }) {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    onChange(value);
  };

  const baseClasses = "w-full px-4 py-2 rounded-full border transition";
  const stateClasses = disabled
    ? "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
    : error
    ? "border-red-400"
    : "border-gray-400 hover:border-blue-300 focus:border-yellow-400";

  return (
    <div className="w-80">
      <label className="block text-sm font-bold mb-1">Dropdown</label>
      <select
        value={selected}
        disabled={disabled}
        onChange={handleChange}
        className={`${baseClasses} ${stateClasses} focus:outline-none`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <p className={`mt-1 text-xs ${error ? "text-red-500" : "text-gray-500"}`}>
        {error ? "Há um erro" : "Texto de suporte"}
      </p>
    </div>
  );
}
