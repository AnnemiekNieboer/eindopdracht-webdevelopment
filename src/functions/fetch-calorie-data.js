import axios from "axios"

async function fetchCalorieData (ingredient) {
    try {
        const response = await axios.get("https://api.edamam.com/api/food-database/v2/parser", {
            params: {
                app_id: "c4dae90e",
                app_key: "35d78bdda0a8c00d9547f1e215801f3f",
                ingr: ingredient,
            }
        })
        // console.log(response.data.hints);
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
            const totalCalories = searchQueryFieldInput.value * calories;
            const totalFat = searchQueryFieldInput.value * fat;
            const totalCarbs = searchQueryFieldInput.value * carbs;
            const calorieCalculatorTable = document.getElementById("calorie-calculator-addedCalorie-data__table");
            const row = calorieCalculatorTable.insertRow(1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            cell1.innerHTML = `${nameOfProduct}`;
            cell2.innerHTML = totalCalories;
            cell3.innerHTML = totalFat;
            cell4.innerHTML = totalCarbs;

            const allCalories = Number(cell2.textContent);
            console.log(allCalories);

            let totalOfAllCalories = 0
            for (let i = 2; i < calorieCalculatorTable.rows.length; i++) {
                totalOfAllCalories+=allCalories;
            }

            // totalOfAllCalories += allCalories;
            console.log(totalOfAllCalories);
            let totalCaloriesTableCell = document.getElementById("calorie-calculator__total-amount-of-calories")
            totalCaloriesTableCell.innerHTML = totalOfAllCalories;

            // const allFat = Number(cell2.textContent);
            // totalCaloriesTableCell.innerHTML = total;
            // totalCaloriesTableCell.innerHTML += allCalories;
            // console.log(allCalories);
        })

    } catch (e) {
        console.log(e);
    }
}

export default fetchCalorieData