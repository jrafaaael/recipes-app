// Imports
import { fetchMealInformation } from "./JS/fetch_meal.js";
import { setMealInformation } from "./JS/set_meal_information.js";
import { printMeal } from "./JS/print_meal.js";
import { getLocalStorage } from "./JS/local_storage_functions.js";
import { printInLovedRecipes } from "./JS/save_meal.js";
import { findClickedRecipe, removeClickedRecipe } from "./JS/clicked_recipe.js";

// Variables
const getMealBtn = document.getElementById('get-meal');
const recipesSaved = document.getElementById('recipes');

// Code
getMealBtn.addEventListener('click', () => {
    fetchMealInformation().then(data => {
        const settedData = setMealInformation(data.meals[0]);
        printMeal(settedData);
    }).catch(err => {
        console.error(err);
    });
}, false);

recipesSaved.addEventListener('click', e => {
    const element = e.target.closest('.remove') || e.target.closest('li');
    switch (element.tagName) {
        case 'LI': {
            const name = element.querySelector('.loved-meal-name').textContent;
            printMeal(findClickedRecipe(name));
            break;
        }
        case 'BUTTON': {
            const recipeToRemove = element.previousElementSibling;
            removeClickedRecipe(recipeToRemove);
            break;
        }
    }
}, false);

window.addEventListener('DOMContentLoaded', () => {
    const recipes = getLocalStorage('recipes');
    recipes.forEach(recipe => {
        printInLovedRecipes(recipe.name);
    });
}, false);

// Exports
export { recipesSaved };