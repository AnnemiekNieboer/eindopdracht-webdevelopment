import fetchCalorieData from "./fetch-calorie-data";

const submitProductCalorieDataForm = () => {
    const searchQueryInputField = document.getElementById("searchQuery__calorie-calculator");
    const submitForm = document.getElementById("submit-calorie-calculator__form");

    submitForm.addEventListener("submit",(e) => {
        e.preventDefault();
        // console.log(searchQueryInputField.value);
        fetchCalorieData(searchQueryInputField.value)
    })
}

export default submitProductCalorieDataForm;



