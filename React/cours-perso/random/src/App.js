import { useState } from "react";
import "./styles/index.scss";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [meals, setMeals] = useState([]);
  const [userInput, setUserInput] = useState("");

  const data = () => {
    try {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
        )
        .then((res) => {
          setMeals(res.data.meals);
        });
    } catch {
      return;
    }
  };

  return (
    <div className="app">
      <h1>The Meals Seach Site</h1>
      <input
        type="text"
        placeholder="Enter your meal"
        onChange={(e) => {
          setUserInput(e.target.value);
          data();
        }}
      />
      <div className="cards">
        {userInput &&
          meals &&
          meals.map((meal, index) => <Card key={index} meal={meal} />)}
      </div>
    </div>
  );
}

export default App;
