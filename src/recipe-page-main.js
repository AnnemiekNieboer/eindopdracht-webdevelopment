document.addEventListener('DOMContentLoaded', (event) => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get('id');
    event.preventDefault();
    console.log(id);
    //hier functie uitvoeren voor recept vullen fetch recipe page
});