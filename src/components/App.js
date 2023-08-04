import "../scss/_app.scss";
import "../scss/_reset.scss";
import HomePage from "./HomePage";
import Section from "./Section";
import Daycare from "./Daycare";
import Training from "./Training";

function App() {
  return (
    <div className="app">
      <HomePage />
      <Section />
      <Daycare />
      <Training />
    </div>
  );
}

export default App;
