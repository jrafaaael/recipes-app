// Imports
import { saveMeal } from "./save_meal.js";

// Variables
const mealInfoContainer = document.getElementById('meal-info');
const template = document.getElementById('info').content;

// Exports
export const printMeal = (mealInformation) => {
    const newMeal = template.cloneNode(true);
    const mealName = newMeal.getElementById('meal-name');
    const mealImg = newMeal.getElementById('meal-img');
    const mealArea = newMeal.querySelector('#area span');
    const mealCategory = newMeal.querySelector('#category span');
    const mealInstructions = newMeal.getElementById('instructions');
    const mealIngredients = newMeal.getElementById('ingredients');
    const readMoreOrLessBtn = newMeal.getElementById('read-more-less');
    const mealVideo = newMeal.querySelector('iframe');

    while (mealInfoContainer.firstElementChild)
        mealInfoContainer.firstElementChild.remove();

    mealName.textContent = mealInformation.name;
    mealImg.src = mealInformation.img;

    mealImg.addEventListener('click', function() {
        saveMeal(this, mealInformation);
    }, false);

    mealArea.textContent = mealInformation.area;
    mealCategory.textContent = mealInformation.category;
    mealInstructions.textContent = mealInformation.instructions;

    if(mealInformation.instructionsLong) {
        readMoreOrLessBtn.classList.add('show');
        mealInstructions.classList.add('long');
    }

    readMoreOrLessBtn.addEventListener('click', () => {
        if(readMoreOrLessBtn.textContent === 'Read More') {
            mealInstructions.style.maxHeight = `${mealInstructions.scrollHeight}px`;
            readMoreOrLessBtn.textContent = 'Read Less';
        }
        else {
            mealInstructions.removeAttribute('style');
            readMoreOrLessBtn.textContent = 'Read More';
        }
    }, false);

    mealInformation.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        mealIngredients.appendChild(li);
    });

    mealVideo.src = `https://www.youtube.com/embed/${mealInformation.youtubeVideoKey}`;

    mealInfoContainer.appendChild(newMeal);
}