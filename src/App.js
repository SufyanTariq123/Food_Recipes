import React, { useState, useEffect } from "react";
import Header from "./Components/Header_Footer/Header/Header";
import Recipe from "./Components/Recipe/Recipe";
import Axios from "axios";
require("dotenv").config();
console.log(process.env);
const App = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const onInputChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const onSeacrhClick = () => {
    getRecipes();
  };

  const APP_ID = process.env.REACT_APP_App_ID;
  const APP_KEY = process.env.REACT_APP_App_KEY;
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(response.data.hits);
  };

  return (
    <div>
      <Header
        search={search}
        onInputChange={onInputChange}
        onSeacrhClick={onSeacrhClick}
      />
      <div className="container">
        <Recipe recipes={recipes} />
      </div>
    </div>
  );
};
export default App;
