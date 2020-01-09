import React,{useEffect, useState} from 'react';
import './App.css';

const App =()=> {

const APP_ID = "0c09d9f5";
const APP_KEY = " 9d04669214936e325e90a2e41aff3d84";
const [recipies, setRecipies] = useState([]);


useEffect(() =>{
getRecipies();
}, []);

const getRecipies = async () => {
  const response =  await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  setRecipies(data.hits); 
}
  return (
    <div className = "App">
    <form className= "search-form">
      <input className= "search-bar" type="" name="text"/>
      <button onClick={() => setCounter(counter + 1)} className= "search-button" type="submit">
        {counter}
      </button>
    </form>
    </div>
  );
}

export default App;
