import React, { useState, useEffect } from "react";

const Card = ({ meal }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const newIngredients = [];
    for (let i = 1; i < 20; i++) {
      const ingredient = meal["strIngredient" + i];
      const measure = meal["strMeasure" + i];
      if (ingredient && measure) {
        newIngredients.push(`${ingredient}: ${measure}`);
      }
    }
    setIngredients(newIngredients);
  }, [meal]);

  const urlFormat = (url) => {
    return url.replace(/watch\?v=/, "embed/");
  };

  return (
    <div className="card">
      <h3>{meal.strMeal}</h3>
      <div className="assets">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          height="280px"
          width="280px"
        />
        <iframe
          src={urlFormat(meal.strYoutube)}
          title="video"
          height="280px"
          width="280px"
        ></iframe>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>How to prepare ?</h3>
      <p id="instruction">{meal.strInstructions}</p>
    </div>
  );
};

export default Card;
