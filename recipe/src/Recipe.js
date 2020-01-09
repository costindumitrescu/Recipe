import React from 'react';


const Recipe = ({title, calories, image, ingredients, ingredientsl, total, health}) => {
  return(
    <div>
    <h1>{title}</h1>
    <p>{calories}</p>
    <img src={image} alt="" />
    <ol> {ingredients.map(ingredient => (
      <li>{ingredient.text}</li>
    ))}</ol>
    <p>{ingredientsl}</p>
    <p>{total}</p>
    <p>{health}</p>
    </div>
  );
}

export default Recipe;
