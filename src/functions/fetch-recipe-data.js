import axios from "axios"

async function fetchRecipeData(searchQuery, chosenMealType, chosenCuisine, chosenDiet, chosenTime) {
    try {
        const response = await axios.get("https://api.edamam.com/api/recipes/v2", {
            params: {
                type: "public",
                app_key: "2bff5b6a6765af87b83e36b90a02d38b",
                app_id: "a22b9b3d",
                q: searchQuery,
                mealType: chosenMealType ? chosenMealType : null,
                cuisineType: chosenCuisine ? chosenCuisine : null,
                diet: chosenDiet ? chosenDiet : null,
                time: chosenTime ? chosenTime : null,
            }
        })
        const hits = response.data.hits;
        const data = hits.slice(0, 18);
        const recipeItemsContainer = document.getElementById("fetched-recipe-data-search-query");
        recipeItemsContainer.replaceChildren();
        const timeImage = new Image();
        timeImage.src = require("../assets/icons/time.png");

        data.map((recipe) => {
            const recipeUri = recipe.recipe.uri;
            const recipeId = recipeUri.split("_")[1];
            const roundedCalories = Math.round(recipe.recipe.calories);
            recipeItemsContainer.innerHTML += `
            <div class="reusable-recipe-card__recipe-card">
            <img class="reusable-recipe-card__recipe-image" src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <div class="reusable-recipe-card__text-section">
                <a href="/recipe-page.html?id=${recipeId}" class="recipe-card__link">
                <h3 class="recipe-card__header">${recipe.recipe.label}</h3>
                <div class="reusable-recipe-card__calories-and-time">
                    <p>${roundedCalories} calories | ${recipe.recipe.ingredients.length} ingredients</p>
                    <div class="reusable-recipe-card__time">
                        <img src="${timeImage.src}" alt="time-icon">
                        <p>${recipe.recipe.totalTime} min</p>
                    </div>
                </div>
                </a>
            </div>
            </div>
            `
        })

    } catch (e) {
        console.error(e);
    }
}

export default fetchRecipeData;


