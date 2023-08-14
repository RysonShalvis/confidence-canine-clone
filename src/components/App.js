import "../scss/_app.scss";
import "../scss/_reset.scss";
import "../scss/_transition.scss";
import HomePage from "./HomePage";
import Section from "./Section";
import Daycare from "./Daycare";
import Training from "./Training";
import BraggingRights from "./BraggingRights";

function App() {
  return (
    <div className="app">
      <HomePage />
      <Section />
      <Daycare />
      <Training />
      <BraggingRights />
    </div>
  );
}

export default App;
