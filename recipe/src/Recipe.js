import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, ingredientsl, total, health}) => {
  return(
    <div className= {style.recipe}>
    <h1>{title}</h1>
    <p>{calories}</p>
    <img className={style.image} src={image} alt="" />
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
