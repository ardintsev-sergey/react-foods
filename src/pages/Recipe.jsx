import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

export const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);
  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className='recipe'>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
          <h1>{recipe.strMeal}</h1>
          <h4>Category: {recipe.strCategory}</h4>
          {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
          <p>{recipe.strInstructions}</p>

          <table
            className='centered'
            style={{ marginBottom: '1rem' }}
          >
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className='row'>
              <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                frameBorder='0'
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
        </div>
      )}
      <button
        className='btn blue lighten-2'
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </>
  );
};
