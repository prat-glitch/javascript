import { useState } from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import { fetchapi } from "../services/recipeapi";

const Home = () =>
{ 
    const [recipes, setrecipes]= useState([]);
  const handlesearch = async (value) =>
  {
    const results = await fetchapi(value);
    setrecipes(results);
  };

  return(
    <>
     <Header />
    <Searchbar onSearch={handlesearch} />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded shadow p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="mt-2 text-lg font-semibold">{recipe.title}</h2>
          </div>
        ))}
    </div>
    </>
  );
};

export default Home;

