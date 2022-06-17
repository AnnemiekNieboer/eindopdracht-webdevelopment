import axios from "axios"
import createTotalAmountsCalorieCalculator from "./calorie-create-total";

async function fetchCalorieData (ingredient) {
    try {
        const response = await axios.get("https://api.edamam.com/api/food-database/v2/parser", {
            params: {
                app_id: "c4dae90e",
                app_key: "35d78bdda0a8c00d9547f1e215801f3f",
                ingr: ingredient,
            }
        })
        const data = response.data;
        const selectedProduct = data.parsed[0].food;
        const nameOfProduct = selectedProduct.label;
        const nutrients = selectedProduct.nutrients;
        const calories = nutrients.ENERC_KCAL;
        const fat = nutrients.FAT;
        const carbs = nutrients.CHOCDF;
        const weightOfProduct = data.hints[0].measures[0].weight;

        const productCalorieContainer = document.getElementById("create-product-calorie-calculator");
        productCalorieContainer.replaceChildren();

        productCalorieContainer.innerHTML += `
                <td>${nameOfProduct}</td>
                <td>${weightOfProduct}</td>
                <td>gram</td>
        `
        const searchQueryFieldInput = document.getElementById("calorie-calculator-add-amount__input-field");
        const submitForm = document.getElementById("calorie-calculator-add-amount__form");

        submitForm.addEventListener("submit",(e) => {
            e.preventDefault();
            const totalCalories = Math.round(searchQueryFieldInput.value * calories * 100) / 100;  ;
            const totalFat = Math.round(searchQueryFieldInput.value * fat * 100) / 100 ;
            const totalCarbs = Math.round(searchQueryFieldInput.value * carbs * 100) / 100;
            const calorieCalculatorTable = document.getElementById("calorie-calculator-addedCalorie-data__table");
            const row = calorieCalculatorTable.insertRow(1);
            row.className = "calorie-calculator-data";
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            cell1.innerHTML = nameOfProduct;
            cell2.innerHTML = totalCalories;
            cell2.className = "calorie-calculator-data__calories";
            cell3.innerHTML = totalFat;
            cell3.className = "calorie-calculator-data__fat"
            cell4.innerHTML = totalCarbs;
            cell4.className = "calorie-calculator-data__carbs"

            createTotalAmountsCalorieCalculator("calorie-calculator-data__calories", "calorie-calculator__total-amount-of-calories", "kcal");
            createTotalAmountsCalorieCalculator("calorie-calculator-data__fat", "calorie-calculator__total-amount-of-fat", "g");
            createTotalAmountsCalorieCalculator("calorie-calculator-data__carbs", "calorie-calculator__total-amount-of-carbs", "g");
        })

    } catch (e) {
        console.error(e);
    }
}

export default fetchCalorieData