import React from "react";
import QuoteCard from "./QuoteCard";
import QuoteSectionVideo from "../media/quote-section-video.mp4";

const QuoteCardSection = () => {
  return (
    <div>
      <div className="quote-card-section">
        <QuoteCard quoter="AUSTIN K.">
          Kailey and Bailey are hands down the best dog trainers I have had the
          opportunity to meet. I have had a lot of recommendations from friends
          about different people to go to and after I went to these two, I won't
          go to anyone else for boarding and training.
        </QuoteCard>
        <QuoteCard quoter="ERICA B.">
          Bailey & Kailey are wonderful! They are very caring, attentive, and
          you can really tell they love dogs. They are easy to work with,
          constantly learning from others about training & dog behavior, and are
          kind & trustworthy. I highly recommend Confidence Canine.
        </QuoteCard>
        <QuoteCard quoter="KYLIE S.">
          We loved our time working with Kailey! She's always been willing to
          answer my questions with kindness and patience! She is so educated and
          passionate! She's great!
        </QuoteCard>
      </div>
    </div>
  );
};

export default QuoteCardSection;
