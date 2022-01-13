const recipes = [{
        delink: 'https://dagelijksekost.een.be/gerechten/chili-no-carne',
        picture: '/3.1Collection/Pictures/ChiliSinCarne.jpg',
        name: 'Chili Sin Carne',
        description: 'This flavorful dish is ideal for a quick stew on busy weeknights!',
        origin: 'Mexico',
        preparationTime: '45min',
        difficulty: 'Easy',
    },
    {
        delink: 'https://www.indianhealthyrecipes.com/baingan-bharta/',
        picture: '/3.1Collection/Pictures/BainganBartha.jpg',
        name: 'Baingan Bhartha',
        description: 'Baingan bharta is a divine mash of smoky aubergines, mixed with Indian seasonings. Delicious for dipping with bread.',
        origin: 'India',
        preparationTime: '35min',
        difficulty: 'Medium',
    },
    {
        delink: 'https://www.libelle-lekker.be/bekijk-recept/18130/paprikasoep-met-mascarpone-en-pesto',
        picture: '/3.1Collection/Pictures/paprikapestomascarponesoep.jpg',
        name: 'Pepper-pesto soup',
        description: 'A rich and intensely flavoured roasted red pepper soup made with juicy and charred yellow peppers & mascarpone.',
        origin: 'Italy',
        preparationTime: '30min',
        difficulty: 'Medium',
    },
    {
        delink: 'https://www.feastingathome.com/vegetarian-shepherds-pie/',
        picture: '/3.1Collection/Pictures/IndianShepherdsPie.jpg',
        name: 'Indian Shepherds Pie',
        description: 'A vegetarian Shepherd\'s Pie infused with the most fragrant Indian spices.',
        origin: 'India',
        preparationTime: '1h15min',
        difficulty: 'Hard',
    },
    {
        delink: 'https://www.leukerecepten.nl/recepten/shakshuka/',
        picture: '/3.1Collection/Pictures/Shakshuka.jpg',
        name: 'Shakshuka',
        description: 'Shakshuka is a North African and Middle Eastern meal of poached eggs in a simmering tomato sauce with spices.',
        origin: 'Tunisia',
        preparationTime: '35min',
        difficulty: 'Easy',
    },
    {
        delink: 'https://cookieandkate.com/thai-panang-curry-recipe/',
        picture: '/3.1Collection/Pictures/PanaengCurry.jpg',
        name: 'Penaeng curry',
        description: 'It\'s rich and spicy with a distinctly unique flavor from the addition of kaffir lime leaves and panaeng curry paste.',
        origin: 'Thailand',
        preparationTime: '45min',
        difficulty: 'Easy',
    },
    {
        delink: 'https://www.healthyfood.com/healthy-recipes/vegetarian-tagine/',
        picture: '/3.1Collection/Pictures/Tagine.jpg',
        name: 'Vegetarian Tagine',
        description: 'This full-flavoured tagine is a cheap, healthy way of getting extra vegetables into your family\'s diet. ',
        origin: 'Morocco',
        preparationTime: '1h10min',
        difficulty: 'Medium',
    },
    {
        delink: 'https://www.veguru.be/recipe/vegan-stoverij/',
        picture: '/3.1Collection/Pictures/vegan-stew.jpg',
        name: 'Vegan Stew',
        description: 'A delicious stew with fries always tastes great! This Flemish classic is easy to make without meat.',
        origin: 'Belgium',
        preparationTime: '2h15min',
        difficulty: 'Hard',
    },
    {
        delink: 'https://chickslovefood.com/recept/pad-thai-met-tofu/',
        picture: '/3.1Collection/Pictures/PadThai.jpg',
        name: 'Pad Thai',
        description: 'It\'s a stir-fried rice noodle dish commonly served as a street food in Thailand as part of the country\'s cuisine.',
        origin: 'Thailand',
        preparationTime: '25min',
        difficulty: 'Easy',
    },
    {
        delink: 'https://www.mygingergarlickitchen.com/jaipuri-aloo-pyaaz-ki-sabzi-potato-onion-curry-video-recipe/',
        picture: '/3.1Collection/Pictures/JaipuriAloo.jpg',
        name: 'Jaipuri Aloo',
        description: 'A heavenly preparation using potatoes and onions, cooked in a scrumptious curry, packed with savoury flavors',
        origin: 'India',
        preparationTime: '#',
        difficulty: 'Medium',
    },
    {
        delink: 'https://www.hellofresh.be/recipes/linguine-met-cherrytomaten-uit-de-oven-5be18ffeae08b5275a1375f2',
        picture: '/3.1Collection/Pictures/LinguineCherrytomaten.jpg',
        name: 'Cherrytom. Linguine',
        description: 'Juicy cherry tomatoes that burst open in warm olive oil, creating a luxurious sauce that comes together in minutes.',
        origin: 'Italy',
        preparationTime: '30min',
        difficulty: 'Easy',
    },
    {
        delink: 'https://www.libelle-lekker.be/bekijk-recept/84072/veganistische-vol-au-vent-1',
        picture: '/3.1Collection/Pictures/vol-au-vegan.jpg',
        name: 'Vol-Au-Vegan',
        description: 'An extremely delicious vegan version of the classic vol-au-vent.',
        origin: 'Belgium',
        preparationTime: '45min',
        difficulty: 'Medium',
    },
]

const main = document.querySelector("main");

for (let recipe of recipes) {
    const links = document.createElement("a"); //Create an anchor-tag to add a link to the card when clicked.
    links.className = "recipeLink"; //assign a classname
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

    const preparationTime = document.createElement("p"); //Create an p for the preparationTime
    preparationTime.className = "preparationTime"; //assign classname
    preparationTime.innerHTML = recipe.preparationTime; //implement the preparationTime-name from the array to the p-element
    preparation.appendChild(preparationTime); //add the p to the preparation-div

    const difficulty = document.createElement("p"); //Create an p for the difficulty
    difficulty.className = "difficulty"; //assign classname
    difficulty.innerHTML = recipe.difficulty; //implement the difficulty-name from the array to the p-element
    preparation.appendChild(difficulty); //add the p to the preparation-div


    // const newTitle = document.createElement("h2"); //Create a Title
    // newTitle.className = "title"; //assign a classname to the title
    // newTitle.textContent = recipe.name; //asign a value to the Title
    // newCard.appendChild(newTitle); //add the title to the card

    // const newParagraph = document.createElement("p"); //Create a paragraph
    // newParagraph.textContent = recipe.description; //asign a value to the paragraph
    // newCard.appendChild(newParagraph); //add the paragraph to the card

    main.append(links);
}


// const names = recipes.map(o => o.name).flat();

// const picture = recipes.map(o => o.picture).flat();

// const description = recipes.map(o => o.description).flat();

// const origin = recipes.map(o => o.description).flat();

// const preparationTime = recipes.map(o => o.preparationTime).flat();

// const difficulty = recipes.map(o => o.difficulty).flat();

// for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
//     const newDiv = document.createElement("div");
//     newDiv.style.backgroundColor = "#fdfdf6";
//     const newImg = document.createElement("img");
//     newImg.src = picture[i];
//     newDiv.append(newImg);
//     newDiv.append(names[i]);
//     newDiv.append(description[i]);
//     newDiv.append(origin[i]);
//     newDiv.append(preparationTime[i]);
//     newDiv.append(difficulty[i]);
//     main.append(newDiv);
// }