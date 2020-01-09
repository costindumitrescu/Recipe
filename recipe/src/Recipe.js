import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, ingredientsl, total, health}) => {
  return(
    <div className= {style.recipe}>
    <h1>{title}</h1>
    <img className={style.image} src={image} alt="" />
    <h3>Total Number Of Calories:</h3>
    <p>{calories}</p>
    <h3>The Ingredients are :</h3>
    <ol> {ingredients.map(ingredient => (
      <li>{ingredient.text}</li>
    ))}</ol>
    <p>{ingredientsl}</p>
    <h3>The Total Cooking Time Is :</h3>
    <p>{total}</p>
    <h3>Health Advise : </h3>
    <p>{health}</p>
    </div>
  );
}

export default Recipe;
