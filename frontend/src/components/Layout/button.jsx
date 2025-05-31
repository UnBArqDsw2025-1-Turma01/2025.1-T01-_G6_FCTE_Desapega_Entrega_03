import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const variants = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-gray-300 hover:bg-gray-400 text-gray-800",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

export const Button = forwardRef(
  ({ children, variant = "primary", type = "button", className = "", ...props }, ref) => {
    const baseClasses =
      "px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = variants[variant] || variants.primary;

    return (
      <button
        type={type}
        className={`${baseClasses} ${variantClasses} ${className}`}
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
