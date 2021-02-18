// Imports
import { getLocalStorage, setLocalStorage } from "./local_storage_functions.js";
import { recipesSaved } from "../app.js";

// Variables
const template = document.getElementById('loved').content;

// Functions
const likedEfect = (img) => {
    img.classList.add('liked');
    setTimeout(() => {
        img.classList.remove('liked');
    }, 1000);
}

const saveInLocalStorage = (recipe) => {
    const recipes = getLocalStorage('recipes');
    for (const savedRecipe of recipes) {
        if (savedRecipe.name === recipe.name) return;
    }
    recipes.push(recipe);
    setLocalStorage('recipes', recipes);
    return true;
}

const printInLovedRecipes = (name) => {
    const newLovedRecipe = template.cloneNode(true);
    const lovedMealName = newLovedRecipe.querySelector('.loved-meal-name');
    lovedMealName.textContent = name;
    recipesSaved.appendChild(newLovedRecipe);
}

const saveMeal = (img, recipe) => {
    likedEfect(img);
    if (saveInLocalStorage(recipe)) printInLovedRecipes(recipe.name);
}

// Exports
export { saveMeal, printInLovedRecipes };