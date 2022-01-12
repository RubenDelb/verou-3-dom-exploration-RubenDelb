const recipes = [{
        picture: '/3.1Collection/Pictures/ChiliSinCarne.jpg',
        name: 'Chili Sin Carne',
        description: 'This flavorful dish is ideal for a quick stew on busy weeknights!',
        origin: 'Mexico',
        preparationTime: '45min',
        difficulty: 'easy',
    },
    {
        picture: '/3.1Collection/Pictures/BainganBartha.jpg',
        name: 'Baingan Bhartha',
        description: 'Baingan bharta is a divine mash of smoky aubergines, mixed with Indian seasonings. Delicious for dipping with bread.',
        origin: 'India',
        preparationTime: '#',
        difficulty: 'Medium',
    },
    {
        picture: '/3.1Collection/Pictures/paprikapestomascarponesoep.jpg',
        name: 'Pepper-pesto soup',
        description: 'A rich and intensely flavoured roasted red pepper soup made with juicy and charred yellow peppers & mascarpone.',
        origin: 'Italy',
        preparationTime: '#',
        difficulty: 'easy',
    },
    {
        picture: '/3.1Collection/Pictures/IndianShepherdsPie.jpg',
        name: 'Indian Shepherds Pie',
        description: 'A vegetarian Shepherd’s Pie infused with the most fragrant Indian spices.',
        origin: 'India',
        preparationTime: '#',
        difficulty: 'hard',
    },
    {
        picture: '/3.1Collection/Pictures/Shakshuka.jpg',
        name: 'Shakshuka',
        description: 'Shakshuka is a North African and Middle Eastern meal of poached eggs in a simmering tomato sauce with spices.',
        origin: 'Tunisia',
        preparationTime: '#',
        difficulty: 'easy',
    },
    {
        picture: '/3.1Collection/Pictures/PanaengCurry.jpg',
        name: 'Penaeng curry',
        description: 'It’s rich and spicy with a distinctly unique flavor from the addition of kaffir lime leaves and panang curry paste.',
        origin: 'Thailand',
        preparationTime: '#',
        difficulty: 'easy',
    },
    {
        picture: '/3.1Collection/Pictures/Tagine.jpg',
        name: 'Vegetarian Tagine',
        description: 'This full-flavoured tagine is a cheap, healthy way of getting extra vegetables into your family\'s diet. ',
        origin: 'Morocco',
        preparationTime: '#',
        difficulty: 'medium',
    },
    {
        picture: '/3.1Collection/Pictures/PadThai.jpg',
        name: 'Pad Thai',
        description: 'It\'s a stir-fried rice noodle dish commonly served as a street food in Thailand as part of the country\'s cuisine.',
        origin: 'Thailand',
        preparationTime: '#',
        difficulty: 'easy',
    },
    {
        picture: '/3.1Collection/Pictures/JaipuriAloo.jpg',
        name: 'Jaipuri Aloo',
        description: 'A heavenly preparation using potatoes and onions, cooked in a scrumptious curry, packed with savoury flavors',
        origin: 'India',
        preparationTime: '#',
        difficulty: 'medium',
    },
    {
        picture: '/3.1Collection/Pictures/LinguineCherrytomaten.jpg',
        name: 'Cherrytomato Linguine',
        description: 'Juicy cherry tomatoes that burst open in warm olive oil, creating a luxurious sauce that comes together in minutes.',
        origin: 'Italy',
        preparationTime: '#',
        difficulty: 'easy',
    },
]

const main = document.querySelector("main");

for (let recipe of recipes) {
    const newCard = document.createElement("div"); //Create a card
    newCard.className = "card"; //assign a classname to the card

    const topPart = document.createElement("img"); //Create the top-part for the picture
    topPart.className = "topPart"; //assign classname
    topPart.src = recipe.picture; //add the link of the picture to src of the img element
    newCard.appendChild(topPart);//add the image to the card

    const infoPart = document.createElement("div"); //Create the bottom-part-div for all the info
    infoPart.className = "infoPart"; //assign classname
    newCard.appendChild(infoPart);//add the bottompart to the card

    const titleInfo = document.createElement("div");//Create the top div for the infopart
    titleInfo.className = "titleInfo"; //assign classname
    infoPart.appendChild(titleInfo); //add to titleInfo the bottom part-div of the card (infoPart)

    const origin = document.createElement("p");//Create a paragraph for the origin
    origin.className = "origin"; //assign classname
    origin.innerHTML = recipe.origin; //implement the origin-name from the array to the paragraph
    infoPart.appendChild(origin); //add the paragraph to the bottom-part-div (infoPart)

    const description = document.createElement("p");//Create a paragraph for the description
    description.className = "description"; //assign classname
    description.innerHTML = recipe.description; //implement the description-name from the array to the paragraph
    infoPart.appendChild(description); //add the paragraph to the bottom-part-div (infoPart)

    const title = document.createElement("h2");//Create an h2 for the title
    title.className = "title"; //assign classname
    title.innerHTML = recipe.name; //implement the title-name from the array to the h2-element
    titleInfo.appendChild(title); //add the h2 to the titleInfo-div

    const difficulty = document.createElement("p");//Create an p for the difficulty
    difficulty.className = "difficulty"; //assign classname
    difficulty.innerHTML = recipe.difficulty; //implement the difficulty-name from the array to the p-element
    titleInfo.appendChild(difficulty); //add the p to the titleInfo-div

    const preparationTime = document.createElement("p");//Create an p for the preparationTime
    preparationTime.className = "preparationTime"; //assign classname
    preparationTime.innerHTML = recipe.preparationTime; //implement the preparationTime-name from the array to the p-element
    titleInfo.appendChild(preparationTime); //add the p to the titleInfo-div

    
    // const newTitle = document.createElement("h2"); //Create a Title
    // newTitle.className = "title"; //assign a classname to the title
    // newTitle.textContent = recipe.name; //asign a value to the Title
    // newCard.appendChild(newTitle); //add the title to the card

    // const newParagraph = document.createElement("p"); //Create a paragraph
    // newParagraph.textContent = recipe.description; //asign a value to the paragraph
    // newCard.appendChild(newParagraph); //add the paragraph to the card

    main.append(newCard);
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