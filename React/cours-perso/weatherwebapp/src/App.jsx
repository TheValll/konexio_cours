import Current from "./components/Current";
import Nextdays from "./components/Nextdays";
import Todayforecast from "./components/Todayforecast";
import "./styles/index.scss";

function App() {
  return (
    <div className="app">
      <div className="app-left">
        <Current />
      </div>
      <div className="app-right">
        <Todayforecast />
        <Nextdays />
      </div>
    </div>
  );
}

export default App;
