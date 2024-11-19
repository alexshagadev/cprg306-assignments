"use client";

import React, { useState, useEffect } from "react";

// Fetch meal ideas based on ingredient
const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  // Load meal ideas when ingredient changes
  const loadMealIdeas = async () => {
    if (ingredient) {
      const ideas = await fetchMealIdeas(ingredient);
      setMeals(ideas);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white p-6 border rounded-lg shadow-md w-80">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Meal Ideas for "{ingredient}"
      </h2>
      <ul className="space-y-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="flex items-center space-x-4">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-16 h-16 rounded"
            />
            <span className="text-lg font-medium text-gray-700">
              {meal.strMeal}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
