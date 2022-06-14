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
                cuisine: chosenCuisine ? chosenCuisine : null,
                diet: chosenDiet ? chosenDiet : null,
                time: chosenTime ? chosenTime : null,
            }
        })
        const hits = response.data.hits;
        // console.log(hits);

        // let randomNum = Math.random() * 20;
        // randomNum = randomNum + 6;
        // const firstNum = Math.round(randomNum);
        // const secondNum = firstNum - 6;

        // console.log(hits.slice(secondNum, firstNum));
        // const data = hits.slice(secondNum, firstNum);
        const data = hits.slice(0, 12);
        const recipeItemsContainer = document.getElementById("fetched-recipe-data-search-query");
        recipeItemsContainer.replaceChildren();
        const timeImage = new Image();
        timeImage.src = require("../assets/icons/time.png");

        data.map((recipe) => {
            const recipeUri = recipe.recipe.uri;
            const recipeId = recipeUri.split("_")[1];
            // console.log(recipeId);
            const roundedCalories = Math.round(recipe.recipe.calories);
            recipeItemsContainer.innerHTML += `
            <div class="main-fetched-recipes__recipe-card">
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <div class="fetched-recipes-recipe-card__text-section">
                <a href="/recipe-page.html?id=${recipeId}" class="recipe-card__link">
                <h5 class="recipe-card__header">${recipe.recipe.label}</h5>
                <div class="fetched-recipes-recipe-card__calories-and-time">
                    <p>${roundedCalories} calories | ${recipe.recipe.ingredients.length} ingredients</p>
                    <div class="fetched-recipes-recipe-card__time">
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
        console.log(e);
    }
}

export default fetchRecipeData;


