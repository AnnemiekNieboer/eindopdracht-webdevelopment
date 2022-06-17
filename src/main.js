import submitForm from "./functions/recipe-search-function";
// import fetchRecipeHeaderData from "./functions/fetch-recipes-header";

submitForm();
// fetchRecipeHeaderData("carrot");

import axios from "axios"

async function fetchRecipeHeaderData(searchQuery) {
    try {
        const response = await axios.get("https://api.edamam.com/api/recipes/v2", {
            params: {
                type: "public",
                app_key: "2bff5b6a6765af87b83e36b90a02d38b",
                app_id: "a22b9b3d",
                q: searchQuery,
            }
        })
        const hits = response.data.hits;
        console.log(hits);

        let randomNum = Math.random() * 20;
        randomNum = randomNum + 3;
        const secondNum = Math.round(randomNum);
        const firstNum = secondNum - 3;

        const data = hits.slice(firstNum, secondNum);
        console.log(data);

        const recipeIdOne = data[0].recipe.uri.split("_")[1];
        const recipeIdTwo = data[1].recipe.uri.split("_")[1];
        const recipeIdThree = data[2].recipe.uri.split("_")[1];
        const roundedCaloriesOne = Math.round(data[0].recipe.calories);
        const roundedCaloriesTwo = Math.round(data[1].recipe.calories);
        const roundedCaloriesThree = Math.round(data[2].recipe.calories);

        const headerRecipeContainer = document.getElementById("fetch-header__recipe-data");
        const timeImage = new Image();
        timeImage.src = require("./assets/icons/time.png");

        headerRecipeContainer.innerHTML = `
        <div class="header-featured-recipes__recipe-card">
            <img src="${data[0].recipe.image}" alt="${data[0].recipe.label}">
            <div class="featured-recipes-recipe-card__text-section">
                <a href="/recipe-page.html?id=${recipeIdOne}" class="recipe-card__link">
                <h5 class="recipe-card__header">${data[0].recipe.label}</h5>
                <div class="featured-recipes-recipe-card__calories-and-time">
                    <p>${roundedCaloriesOne} calories | ${data[0].recipe.ingredients.length} ingredients</p>
                    <div class="featured-recipes-recipe-card__time">
                        <img src="${timeImage.src}" alt="time-icon">
                        <p>${data[0].recipe.totalTime} min</p>
                    </div>
                </div>
                </a>
            </div>
        </div>
        <div class="header-featured-recipes__recipe-card">
            <img src="${data[1].recipe.image}" alt="${data[1].recipe.label}"
                 class="featured-recipes-recipe-card__center-image">
            <div class="featured-recipes-recipe-card__text-section">
                <a href="/recipe-page.html?id=${recipeIdTwo}" class="recipe-card__link">
                <h5 class="recipe-card__header">${data[1].recipe.label}</h5>
                <div class="featured-recipes-recipe-card__calories-and-time">
                    <p>${roundedCaloriesTwo} calories | ${data[1].recipe.ingredients.length}10 ingredients</p>
                    <div class="featured-recipes-recipe-card__time">
                        <img src="${timeImage.src}" alt="time-icon">
                        <p>${data[1].recipe.totalTime} min</p>
                    </div>
                </div>
                </a>
            </div>
        </div>
        <div class="header-featured-recipes__recipe-card">
            <img src="${data[2].recipe.image}" alt="${data[2].recipe.label}">
            <div class="featured-recipes-recipe-card__text-section">
                <a href="/recipe-page.html?id=${recipeIdThree}" class="recipe-card__link">
                <h5 class="recipe-card__header">${data[2].recipe.label}</h5>
                <div class="featured-recipes-recipe-card__calories-and-time">
                    <p>${roundedCaloriesThree} calories | ${data[2].recipe.ingredients.length} ingredients</p>
                    <div class="featured-recipes-recipe-card__time">
                        <img src="${timeImage.src}" alt="time-icon">
                        <p>${data[2].recipe.totalTime} min</p>
                    </div>
                </div>
                </a>
            </div>
        </div>

        `

    } catch (e) {
        console.error(e)
    }
}

fetchRecipeHeaderData("cake")