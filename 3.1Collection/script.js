import {
    recipes
} from "./collection.js";

const main = document.querySelector("main");

const header = document.querySelector("header");

// Create searchbar to filter item cards on title, difficulty or origin.
let searchBar = document.createElement("input");
searchBar.id = "searchBar";
searchBar.type = "text";
searchBar.name = "search";
searchBar.placeholder = "Search recipe/origin";
searchBar.onkeyup = function () {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let cardTitles = document.querySelectorAll("a.recipeLink");

    cardTitles.forEach((el) => {
        let recipeTitle = el.children[0].children[1].children[0].innerHTML;
        let recipeDifficulty = el.children[0].children[1].children[1].children[1].innerHTML;
        let recipeOrigin = el.children[0].children[1].children[2].innerHTML;

        if (recipeTitle.toLowerCase().includes(input) || recipeDifficulty.toLowerCase().includes(input) || recipeOrigin.toLowerCase().includes(input)) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });
};

header.appendChild(searchBar);

// Add class "dark-mode" dynamically with this function
const toggleDarkMode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const button = document.getElementById("darkMode");
button.addEventListener('click', toggleDarkMode) // When the darkMode-button is clicked, add class dark-mode

const timer = "./Pictures/timer-svgrepo-com (1).svg";

const chefshat = "./Pictures/chefshat.svg";

for (let recipe of recipes) {
    const links = document.createElement("a"); //Create an anchor-tag to add a link to the card when clicked.
    links.className = "recipeLink"; //assign a classname
    links.classList.add = recipe.difficulty;
    links.href = recipe.delink; //add the link in the anchortag
    links.target = "_blank";

    const newCard = document.createElement("div"); //Create a card
    newCard.className = "card"; //assign a classname to the card
    links.append(newCard);

    const topPart = document.createElement("img"); //Create the top-part for the picture
    topPart.className = "topPart"; //assign classname
    topPart.src = recipe.picture; //add the link of the picture to src of the img element
    newCard.appendChild(topPart); //add the image to the card

    const infoPart = document.createElement("div"); //Create the bottom-part-div for all the info
    infoPart.className = "infoPart"; //assign classname
    newCard.appendChild(infoPart); //add the bottompart to the card

    const title = document.createElement("h2"); //Create the top h2 for the name of the recipe
    title.className = "title"; //assign classname
    title.innerHTML = recipe.name; //implement the name form the array to the paragraph
    infoPart.appendChild(title); //add to title the bottom part-h2 of the card (infoPart)

    const preparation = document.createElement("div"); //Create an div for the preparation-section
    preparation.className = "preparation"; //assign classname
    infoPart.appendChild(preparation); //add the div to the infoPart-div

    const origin = document.createElement("p"); //Create a paragraph for the origin
    origin.className = "origin"; //assign classname
    origin.innerHTML = recipe.origin; //implement the origin-name from the array to the paragraph
    infoPart.appendChild(origin); //add the paragraph to the bottom-part-div (infoPart)

    const description = document.createElement("p"); //Create a paragraph for the description
    description.className = "description"; //assign classname
    description.innerHTML = recipe.description; //implement the description-name from the array to the paragraph
    infoPart.appendChild(description); //add the paragraph to the bottom-part-div (infoPart)

    const preparationDiv = document.createElement("div");
    preparationDiv.className = "preparationDiv"
    preparation.appendChild(preparationDiv);

    const timerImg = document.createElement("img");
    timerImg.className = "timerImg";
    timerImg.src = timer;
    preparationDiv.appendChild(timerImg);

    const difficultyDiv = document.createElement("div");
    difficultyDiv.className = "difficultyDiv";
    preparation.appendChild(difficultyDiv);

    const difficulty = document.createElement("p"); //Create an p for the difficulty
    difficulty.className = "difficulty"; //assign classname
    difficulty.innerHTML = "Level: " + "&nbsp;"; //implement the difficulty-name from the array to the p-element
    difficultyDiv.appendChild(difficulty); //add the p to the preparation-div 

    for (let i = 0; i < recipe.difficulty.length; i++) {
        const image = new Image()
        image.src = chefshat;
        image.alt = 'chefshatimg';
        image.classList.add('chefshatImg');
        difficultyDiv.appendChild(image);
    }

    const preparationTime = document.createElement("p"); //Create an p for the preparationTime
    preparationTime.className = "preparationTime"; //assign classname
    preparationTime.innerHTML = recipe.preparationTime; //implement the preparationTime-name from the array to the p-element
    preparationDiv.appendChild(preparationTime); //add the p to the preparation-div

    main.append(links);
}