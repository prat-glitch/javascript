const API_KEY= import.meta.env.VITE_SPOONACULAR_KEY;

export const fetchapi= async(query) =>
{
    try{
        const res= await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=9&apiKey=${API_KEY}`
        );
        const data= await res.json();
        return data.results;
    }
    catch(error)
    {
        console.log("error fetch recipes:", error);
        return [];
    }
};