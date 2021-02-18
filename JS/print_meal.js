// Imports
import { saveMeal } from "./save_meal.js";

// Variables
const mealInfoContainer = document.getElementById('meal-info');
const template = document.getElementById('info').content;

// Exports
export const printMeal = (mealInformation) => {
    const {
        name,
        area,
        category,
        instructions,
        img,
        youtubeVideoKey,
        ingredients } = mealInformation;
    const newMeal = template.cloneNode(true);
    const mealName = newMeal.getElementById('meal-name');
    const mealImg = newMeal.getElementById('meal-img');
    const mealArea = newMeal.querySelector('#area span');
    const mealCategory = newMeal.querySelector('#category span');
    const mealInstructions = newMeal.getElementById('instructions');
    const mealIngredients = newMeal.getElementById('ingredients');
    const mealVideo = newMeal.querySelector('iframe');

    while (mealInfoContainer.firstElementChild)
        mealInfoContainer.firstElementChild.remove();

    mealName.textContent = name;
    mealImg.src = img;

    mealImg.addEventListener('click', function() {
        saveMeal(this, mealInformation);
    }, false);

    mealArea.textContent = area;
    mealCategory.textContent = category;
    mealInstructions.textContent = instructions;
    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        mealIngredients.appendChild(li);
    });
    mealVideo.src = `https://www.youtube.com/embed/${youtubeVideoKey}`;

    mealInfoContainer.appendChild(newMeal);
}