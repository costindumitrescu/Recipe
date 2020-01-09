import React from 'react';


const Recipe = ({title, calories, image}) => {
  return(
    <div>
    <h1>{title}</h1>
    <p>{calories}</p>
    <img src={image} alt="" />
    <p>{ingredients}</p>
    <p>{ingredientsl}</p>
    <p>{total}</p>
    <p>{health}</p>
    </div>
  );
}

export default Recipe;
