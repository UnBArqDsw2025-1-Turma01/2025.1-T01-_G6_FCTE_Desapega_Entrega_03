import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const variants = {
  primary: "bg-primary-800 hover:bg-primary-700 active:bg-primary-900 text-white",
  secondary: "bg-secondary-600 hover:bg-secondary-500 active:bg-secondary-700 text-gray-800 text-white",
  outline: "bg-white border border-secondary-400 text-primary-900 hover:bg-secondary-100 active:bg-secondary-200",
};

const Button = forwardRef(
  ({ children, variant = "primary", type = "button", className = "", disabled = false, ...props }, ref) => {
    const baseClasses =
      "px-4 py-2 rounded-full focus:outline-none font-bold capitalize border-none";

    const variantClasses = variants[variant] || variants.primary;

    return (
      <button
        type={type}
        className={`${baseClasses} ${variantClasses} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};

export default Button;