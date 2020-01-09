import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App =()=> {

const APP_ID = "0c09d9f5";
const APP_KEY = " 9d04669214936e325e90a2e41aff3d84";
const [recipies, setRecipies] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');


useEffect(() =>{
getRecipies();
}, [query]);

const getRecipies = async () => {
  const response =  await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  setRecipies(data.hits);
};

const updateSearch = e => {
setSearch(e.taget.value);
};

const getSearch = e => {
e.preventDefault();
setQuery(search);
setSearch('');
};

  return (
    <div className = "App">
    <form onSubmit={getSearch} className= "search-form">
      <input className= "search-bar" type="" value={search} onChange={updateSearch}/>
      <button onClick={() => setCounter(counter + 1)} className= "search-button" type="submit">
        {counter}
      </button>
    </form>
    <div className= "reciepies" {
      constructor() {

      }
    }>
    {recipies.map(recipe =>(<Recipe
      key = {recipe.recipe.label }
      title= {recipe.recipe.label}
      calories={recipe.recipe.calories}
      image ={recipe.recipe.image}
      ingredients ={recipe.recipe.ingredients}
      ingredientsl ={recipe.recipe.ingredientsLines}
      total ={recipe.recipe.totalTime}
      health ={recipe.recipe.healthLabels}
      />))}
      </div>
    </div>
  );
}

export default App;
