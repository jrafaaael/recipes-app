// Exports
export const setMealInformation = (mealData) => {
    const ingredients =
    Object.entries(mealData)
        .filter(allDataIngredient => {
            return allDataIngredient[0].includes('Ingredient')
        })
        .filter(notIngredientsEmpty => {
            return (
                notIngredientsEmpty[1] !== '' &&
                notIngredientsEmpty[1] !== ' ' &&
                notIngredientsEmpty[1] !== null);
        })
        .map((ingredient, index) => {
            return [
                ingredient[1],
                ((mealData[`strMeasure${index + 1}`] === '') ||
                (mealData[`strMeasure${index + 1}`] === ' ') ||
                (mealData[`strMeasure${index + 1}`] === null)) ? 
                'to taste' : (mealData[`strMeasure${index + 1}`])
            ]
            .join(' — ');
        });

    return {
        name: mealData.strMeal,
        area: mealData.strArea,
        category: mealData.strCategory,
        instructions: mealData.strInstructions,
        img: mealData.strMealThumb,
        youtubeVideoKey: mealData.strYoutube.slice(-11),
        ingredients: ingredients,
    }
}