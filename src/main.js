import axios from "axios"

async function fetchRecipeData(searchQuery) {
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
        // console.log(hits);

        let randomNum = Math.random() * 20;
        randomNum = randomNum + 6;
        const firstNum = Math.round(randomNum);
        const secondNum = firstNum - 6;

        console.log(hits.slice(secondNum, firstNum));

    } catch (e) {
        console.log(e)
    }
}

fetchRecipeData("carrot");