// Class
class Meal {
    constructor(
        name, area, category, instructions,
        img, youtubeVideoKey, ingredients) {
        this.name = name;
        this.area = area;
        this.category = category;
        this.instructions = instructions;
        this.img = img;
        this.youtubeVideoKey = youtubeVideoKey;
        this.ingredients = ingredients;
        this.instructionsLong = (
            (this.instructions.length > 800) &&
            !(this.instructions.length < 850))
    }
}

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

    return new Meal(
        mealData.strMeal,
        mealData.strArea,
        mealData.strCategory,
        mealData.strInstructions,
        mealData.strMealThumb,
        mealData.strYoutube.slice(-11),
        ingredients);
}