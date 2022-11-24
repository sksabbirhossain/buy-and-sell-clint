import React from "react";

const Button = ({ children, className }) => {
  return <button type="submit" className={`mainBtn btn btn-success ${className}`}>{children}</button>;
};

export default Button;
