import axios from "axios";
import { createRecipeHeader, createRecipeIngredientList, createRecipePreparation, createRecipeImage, createNutrientsTable, createRecipeHealthLabels} from "./functions/create-recipe-page-data";

document.addEventListener('DOMContentLoaded', (event) => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get('id');
    event.preventDefault();

    async function createRecipeData() {
        try {
            const apiLink = "https://api.edamam.com/api/recipes/v2/";
            const respons = await axios.get(`${apiLink}${id}`, {
                params: {
                    type: "public",
                    app_key: "2bff5b6a6765af87b83e36b90a02d38b",
                    app_id: "a22b9b3d",
                }
            })
            console.log(respons.data);
            const selectedRecipe = respons.data.recipe;

            createRecipeHeader(selectedRecipe);
            createRecipeIngredientList(selectedRecipe);
            createRecipePreparation(selectedRecipe);
            createRecipeImage(selectedRecipe);
            createNutrientsTable(selectedRecipe);
            createRecipeHealthLabels(selectedRecipe);

        } catch (e) {
            console.error(e)
        }
    }
    createRecipeData();
});