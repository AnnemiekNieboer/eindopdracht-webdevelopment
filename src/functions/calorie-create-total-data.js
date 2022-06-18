function createTotalAmountsCalorieCalculator(classNameOfItems, selectedTableCell, label) {
    const productData = document.getElementsByClassName(classNameOfItems);
    const arrayOfAllNutrients = [];

    for (let i = 0; i < productData.length; i++) {
        arrayOfAllNutrients.push(productData[i].innerText);
    }
    const arrayOfAllNutrientsToNum = arrayOfAllNutrients.map(str => {
        return Number(str);
    });

    const initialValue = 0;
    const sumOfAllNutrients = arrayOfAllNutrientsToNum.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue
    );

    let totalNutrientsTableCell = document.getElementById(selectedTableCell);
    totalNutrientsTableCell.innerHTML = `${Math.round(sumOfAllNutrients * 100) / 100} ${label}`;
}

export default createTotalAmountsCalorieCalculator;