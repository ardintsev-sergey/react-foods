import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList';
import { Preloader } from '../components/Preloader';

export const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <div>
      <button
        className='btn blue lighten-2'
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </div>
  );
};
