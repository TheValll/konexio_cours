import Current from "./components/Current";
import Nextdays from "./components/Nextdays";
import Todayforecast from "./components/Todayforecast";
import Map from "./components/Map";
import "./styles/index.scss";

function App() {
  return (
    <div className="app">
      <div className="app-left">
        <Current />
      </div>
      <div className="app-right">
        <div className="left">
          <Todayforecast />
          <Map />
        </div>
        <Nextdays />
      </div>
    </div>
  );
}

export default App;
