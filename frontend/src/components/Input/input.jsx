import React, { useState } from "react";

const estados = {
  DEFAULT: "default",
  HOVER: "hover",
  FOCUS: "focus",
  ERROR: "error",
  DISABLED: "disabled",
  FILLED: "filled",
};

export default function CustomInput({
  type = "text",
  placeholder = "Continue with Google",
  value: externalValue,
  onChange: externalOnChange,
  className = "",
  label = "",
  disabled = false,
  error = false,
  supportText = "",
  icon: Icon,
  ...otherProps
}) {
  const [value, setValue] = useState("");
  const [estado, setEstado] = useState(disabled ? estados.DISABLED : estados.DEFAULT);

  const borderClasses = {
    [estados.DEFAULT]: "border-gray-400",
    [estados.HOVER]: "border-blue-300",
    [estados.FOCUS]: "border-yellow-400",
    [estados.ERROR]: "border-red-400",
    [estados.DISABLED]: "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed",
    [estados.FILLED]: "border-gray-400",
  };

  const hasError = error || estado === estados.ERROR;

  return (
    <div className="w-80 relative">
      {Icon && <Icon className="w-6 h-6 absolute top-3 right-2 text-primary-800" />}
      <label className="block text-sm font-bold mb-1">{label}</label>
      <input
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        className={`
          w-full rounded-full px-4 py-2 border 
          transition 
          focus:outline-none
          ${borderClasses[estado]}
        `}
        onFocus={() => setEstado(estados.FOCUS)}
        onBlur={() => setEstado(value ? estados.FILLED : estados.DEFAULT)}
        onChange={(e) => {
          if (externalOnChange) {
            externalOnChange(e);
          } else {
            setValue(e.target.value);
            setEstado(e.target.value ? estados.FILLED : estados.DEFAULT);
          }
        }}
        onMouseEnter={() => {
          if (estado === estados.DEFAULT) setEstado(estados.HOVER);
        }}
        onMouseLeave={() => {
          if (estado === estados.HOVER) setEstado(estados.DEFAULT);
        }}
        {...otherProps}
      />
      <p
        className={`mt-1 text-xs ${
          hasError ? "text-red-500 font-semibold" : "text-gray-500"
        }`}
      >
        {supportText && supportText}
      </p>
    </div>
  );
}