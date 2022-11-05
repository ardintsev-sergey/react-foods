import { API_URL } from './config';

const getMealById = async (mealId) => {
  const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
  const meal = await response.json();
  return meal;
};

const getAllCategories = async () => {
  const response = await fetch(API_URL + 'categories.php');
  const categories = await response.json();
  //   console.log(categories);
  return categories;
};

const getFilteredCategory = async (catName) => {
  const response = await fetch(API_URL + 'filter.php?c=' + catName);
  const filteredCat = await response.json();
  return filteredCat;
};

export { getMealById, getAllCategories, getFilteredCategory };
