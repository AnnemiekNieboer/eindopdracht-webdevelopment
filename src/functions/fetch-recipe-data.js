import axios from "axios"

async function fetchRecipeData(searchQuery, chosenMealType, chosenCuisine, chosenDiet, chosenTime) {
    try {
        const response = await axios.get("https://api.edamam.com/api/recipes/v2", {
            params: {
                type: "public",
                app_key: "2bff5b6a6765af87b83e36b90a02d38b",
                app_id: "a22b9b3d",
                q: searchQuery,
                mealType: chosenMealType,
                cuisine: chosenCuisine,
                diet: chosenDiet,
                time: chosenTime,
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
        const data = hits.slice(0, 6);
        const recipeItemsContainer = document.getElementById("fetched-recipe-data-search-query");
        const timeImage = new Image();
        timeImage.src = require("../assets/icons/time.png");

        data.map((recipe) => {
            const roundedCalories = Math.round(recipe.recipe.calories);
            recipeItemsContainer.innerHTML += `
            <div class="main-fetched-recipes__recipe-card">
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <div class="fetched-recipes-recipe-card__text-section">
                <h5>${recipe.recipe.label}</h5>
                <div class="fetched-recipes-recipe-card__calories-and-time">
                    <p>${roundedCalories} calories | ${recipe.recipe.ingredients.length} ingredients</p>
                    <div class="fetched-recipes-recipe-card__time">
                        <img src="${timeImage.src}" alt="time-icon">
                        <p>${recipe.recipe.totalTime} min</p>
                    </div>
                </div>
            </div>
            </div>
            `
        })

    } catch (e) {
        console.log(e)
    }
}

export default fetchRecipeData;
