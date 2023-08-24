import React from "react";
import "../scss/_quote-card.scss";

const QuoteCard = ({ children, quoter }) => {
  return (
    <div className="quote-card">
      <p></p>
      <p>{children}</p>
      <p>{quoter}</p>
    </div>
  );
};

export default QuoteCard;
