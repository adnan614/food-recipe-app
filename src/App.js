import React, { useEffect, useState } from "react";
import "../src/App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;

  useEffect(async () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(url);
    setRecipes(res.data.meals);
  };

  const inputChange = (e) => {
    setSearch(e.target.value);
  };

//   const searchClick = () => {
//     getRecipes();
//   };

  return (
    <>
      <Header
        search={search}
        inputChange={inputChange}
        // onSearchClick={searchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} search={search} />
      </div>
    </>
  );
};

export default App;
