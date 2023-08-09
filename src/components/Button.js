import React from "react";
import "../scss/_button.scss";

const Button = ({ children, onClick, link }) => {
  return link ? (
    <a href={link} className="button button-link">
      {children}
    </a>
  ) : (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
