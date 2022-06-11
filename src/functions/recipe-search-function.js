import fetchRecipeData from "./fetch-recipe-data";

const submitForm = () => {
    const searchQueryInputField = document.getElementById("searchQuery");
    const submitForm = document.getElementById("submit-form");
    const mealTypeOfRecipe = document.getElementById("meal-type-input-field");
    const cuisineOfRecipe = document.getElementById("cuisine-input-field");
    const dietOfRecipe = document.getElementById("diet-input-field");
    const timeOfRecipe = document.getElementById("time-of-recipe-input-field");

    submitForm.addEventListener("submit",(e) => {
        e.preventDefault();
        fetchRecipeData(searchQueryInputField.value, mealTypeOfRecipe.value, cuisineOfRecipe.value, dietOfRecipe.value, timeOfRecipe.value);
    })
}

export default submitForm;