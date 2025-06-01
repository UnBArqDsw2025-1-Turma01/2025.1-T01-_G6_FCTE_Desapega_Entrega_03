import React, { useState } from "react";

const estados = {
  DEFAULT: "default",
  HOVER: "hover",
  FOCUS: "focus",
  ERROR: "error",
  DISABLED: "disabled",
  FILLED: "filled",
};

export default function CustomInput() {
  const [value, setValue] = useState("");
  const [estado, setEstado] = useState(estados.DEFAULT);

  const borderClasses = {
    [estados.DEFAULT]: "border-gray-400",
    [estados.HOVER]: "border-blue-300",
    [estados.FOCUS]: "border-yellow-400",
    [estados.ERROR]: "border-red-400",
    [estados.DISABLED]: "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed",
    [estados.FILLED]: "border-gray-400",
  };

  const hasError = estado === estados.ERROR;

  return (
    <div className="w-80">
      <label className="block text-sm font-bold mb-1">Label</label>
      <input
        type="text"
        value={value}
        disabled={estado === estados.DISABLED}
        placeholder="Continue with Google"
        className={`
          w-full rounded-full px-4 py-2 border 
          transition 
          focus:outline-none
          ${borderClasses[estado]}
        `}
        onFocus={() => setEstado(estados.FOCUS)}
        onBlur={() => setEstado(value ? estados.FILLED : estados.DEFAULT)}
        onChange={(e) => {
          setValue(e.target.value);
          setEstado(e.target.value ? estados.FILLED : estados.DEFAULT);
        }}
        onMouseEnter={() => {
          if (estado === estados.DEFAULT) setEstado(estados.HOVER);
        }}
        onMouseLeave={() => {
          if (estado === estados.HOVER) setEstado(estados.DEFAULT);
        }}
      />
      <p
        className={`mt-1 text-xs ${
          hasError ? "text-red-500 font-semibold" : "text-gray-500"
        }`}
      >
        {hasError ? "Texto de suporte" : "Texto de suporte"}
      </p>

      <div className="flex gap-2 mt-4">
        {Object.entries(estados).map(([key, val]) => (
          <button
            key={key}
            className={`px-2 py-1 rounded text-xs border ${estado === val ? "bg-blue-100" : ""}`}
            onClick={() => setEstado(val)}
            type="button"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}