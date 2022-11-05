import React from 'react';
import { Link } from 'react-router-dom';

export const Meal = (props) => {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className='card'>
      <div className='card-image'>
        <img
          src={strMealThumb}
          alt={strMeal}
        />
      </div>
      <div className='card-content'>
        <span className='card-title'>{strMeal}</span>
      </div>
      <div className='card-action'>
        <Link
          to={`/meal/${idMeal}`}
          className='btn blue lighten-2'
        >
          Whatch recipe
        </Link>
      </div>
    </div>
  );
};
