export const createRecipeHeader = (selectedRecipe) => {
    const recipeContainer = document.getElementById("fetched-recipe-header-container");
    const recipeTitle = selectedRecipe.label;
    const timeImage = new Image();
    timeImage.src = require("../assets/icons/time.png");
    const totalTime = selectedRecipe.totalTime;

    recipeContainer.innerHTML = `
                <h1>${recipeTitle}</h1>
                <img src="${timeImage.src}" alt="time-icon">
                <p>${totalTime} min</p>
            `
}

export const createRecipeIngredientList = (selectedRecipe) => {
    selectedRecipe.ingredientLines.map((ingredient) => {
        const ingredienstContainer = document.getElementById("fetched-ingredients-container");
        ingredienstContainer.innerHTML += `
                    <li>${ingredient}</li>
                `
    })
}

export const createRecipeImage = (selectedRecipe) => {
    const recipeImage = selectedRecipe.image;
    const recipeImageContainer = document.getElementById("fetched-recipe__image");
    recipeImageContainer.innerHTML = `
            <img src="${recipeImage}" alt="placeholder text recipe image">
            `
}

export const createRecipePreparation = (selectedRecipe) => {
    const recipeLink = selectedRecipe.url;
    const recipeLinkContainer = document.getElementById("fetched-recipe__instructions-button");
    recipeLinkContainer.href = `${recipeLink}`
}

export const createNutrientsTable = (selectedRecipe) => {
    const nutrientsTableContainer = document.getElementById("fetched-recipe__nutrients");
    const totalNutrients = selectedRecipe.totalNutrients;
    const caloriesQuantity = Math.round(totalNutrients.ENERC_KCAL.quantity);
    const fatQuantity = Math.round(totalNutrients.FAT.quantity);
    const carbsQuantity = Math.round(totalNutrients.CHOCDF.quantity);
    const sugarQuantity = Math.round(totalNutrients.SUGAR.quantity);
    const proteinQuantity = Math.round(totalNutrients.PROCNT.quantity);
    const sodiumQuantity = Math.round(totalNutrients.NA.quantity);


    nutrientsTableContainer.innerHTML = `
   <tr>
   <td class="recipe-nutrients-items__column-2">${caloriesQuantity}</td>
   <td>${totalNutrients.ENERC_KCAL.unit}</td>
   </tr>
    <tr>
        <td class="recipe-nutrients-items__column-2">${fatQuantity}</td>
        <td>${totalNutrients.FAT.unit}</td>
    </tr>
    <tr>
        <td class="recipe-nutrients-items__column-2">${carbsQuantity}</td>
        <td>${totalNutrients.CHOCDF.unit}</td>
    </tr>
    <tr>
        <td class="recipe-nutrients-items__column-2">${sugarQuantity}</td>
        <td>${totalNutrients.SUGAR.unit}</td>
    </tr>
    <tr>
        <td class="recipe-nutrients-items__column-2">${proteinQuantity}</td>
        <td>${totalNutrients.PROCNT.unit}</td>
    </tr>
    <tr>
        <td class="recipe-nutrients-items__column-2">${sodiumQuantity}</td>
        <td>${totalNutrients.NA.unit}</td>
    </tr>
  `
}

export const createRecipeHealthLabels = (selectedRecipe) => {
    selectedRecipe.healthLabels.map((healthlabel) => {
        const healthLabelsContainer = document.getElementById("fetched-healthlabels__container");
        healthLabelsContainer.innerHTML += `
      <button class="recipe-page__health-label-item">${healthlabel}</button>
      `
    })
}
