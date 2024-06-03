import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/recipes')
      .then(response => setRecipes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recipes.map(recipe => (
        <div key={recipe.id} className="border p-4">
          <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
          <h2 className="text-xl font-bold mt-2">{recipe.name}</h2>
          <Link to={`/recipe/${recipe.id}`} className="text-blue-500">Mehr erfahren</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
