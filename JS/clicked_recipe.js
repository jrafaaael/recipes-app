// Imports
import { getLocalStorage, setLocalStorage } from "./local_storage_functions.js";

// Functions
const findClickedRecipe = (name) => {
    const recipes = getLocalStorage('recipes');
    for (const recipe of recipes) {
        if (recipe.name === name) return recipe;
    }
}

const removeClickedRecipe = (element) => {
    const name = element.textContent;
    element.parentNode.classList.add('removed');
    setTimeout(() => {
        element.parentNode.remove();
    }, 300);
    const recipes = getLocalStorage('recipes');
    recipes.forEach((element, index) => {
        if (element.name === name) recipes.splice(index, 1);
    });
    setLocalStorage('recipes', recipes);
}

// Exports
export { findClickedRecipe, removeClickedRecipe }