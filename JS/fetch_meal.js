// Exports
export const fetchMealInformation = async () => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}