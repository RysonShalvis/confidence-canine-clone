import React from "react";
import QuoteSectionVideo from "../media/quote-section-video.mp4";
import "../scss/_quote-card.scss";

const QuoteBackgroundVideo = () => {
  return (
    <div className="quote-background-video">
      <video autoPlay loop muted src={QuoteSectionVideo} />
    </div>
  );
};

export default QuoteBackgroundVideo;
