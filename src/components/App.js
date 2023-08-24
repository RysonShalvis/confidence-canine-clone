import "../scss/_app.scss";
import "../scss/_reset.scss";
import "../scss/_transition.scss";
import HomePage from "./HomePage";
import Section from "./Section";
import Daycare from "./Daycare";
import Training from "./Training";
import BraggingRights from "./BraggingRights";
import Footer from "./Footer";
import QuoteCardSection from "./QuoteCardSection";
import QuoteBackgroundVideo from "./QuoteBackgroundVideo";

function App() {
  return (
    <div className="app">
      <HomePage />
      <Section />
      <Daycare />
      <Training />
      <BraggingRights />
      <QuoteBackgroundVideo />
      <QuoteCardSection />
      <Footer />
    </div>
  );
}

export default App;
