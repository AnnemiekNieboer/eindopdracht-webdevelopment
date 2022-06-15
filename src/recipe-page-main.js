import axios from "axios";

document.addEventListener('DOMContentLoaded', (event) => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get('id');
    event.preventDefault();
    console.log(id);
    //hier functie uitvoeren voor recept vullen fetch recipe page
    async function createRecipeData() {
        try {
            const apiLinkFirstParam = "https://api.edamam.com/api/recipes/v2/";
            const apiLinkSecondParam = id;
            const respons = await axios.get(`${apiLinkFirstParam}${apiLinkSecondParam}`, {
                params: {
                    type: "public",
                    app_key: "2bff5b6a6765af87b83e36b90a02d38b",
                    app_id: "a22b9b3d",
                }
            })
            console.log(respons.data);
            const selectedRecipe = respons.data.recipe;
            const recipeContainer = document.getElementById("recipe-page-main__outer-container");
            const recipeTitle = selectedRecipe.label;
            const timeImage = new Image();
            timeImage.src = require("./assets/icons/time.png");
            const totalTime = selectedRecipe.totalTime;
            console.log(recipeTitle);

            recipeContainer.innerHTML = `
                <div class="recipe-description__header-container">
                <h1>${recipeTitle}</h1>
                <img src="${timeImage.src}" alt="time-icon">
                <p>${totalTime} min</p>
                </div>
            `


        } catch (e) {
            console.log(e)
        }
    }
    createRecipeData();
});

