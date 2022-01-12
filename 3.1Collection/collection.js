const COLLECTION = [{
        picture: '/Pictures/ChiliSinCarne.jpg',
        name: 'Chili Sin Carne',
        description: 'This flavorful dish is ideal for a quick stew on busy weeknights!',
        origin: 'Mexico',
        preparationTime: '45min',
        difficulty: 'easy',
    },
    {
        picture: '/Pictures/BainganBartha.jpg',
        name: 'Baingan Bhartha',
        description: 'Baingan bharta is a divine mash of smoky aubergines, mixed with Indian seasonings. Delicious for dipping with bread.',
        origin: 'India',
        preparationTime: '#',
        difficulty: 'Medium',
    },
    {
        picture: '/Pictures/paprikapestomascarponesoep.jpg',
        name: 'Pepper-pesto soup',
        description: 'A rich and intensely flavoured roasted red pepper soup made with juicy and charred yellow peppers & mascarpone.',
        origin: 'Italy',
        preparationTime: '#',
        difficulty: 'easy',
    },
    {
        picture: '/Pictures/IndianShepherdsPie.jpg',
        name: 'Indian Shepherds Pie',
        description: 'A vegetarian Shepherd’s Pie infused with the most fragrant Indian spices.',
        origin: 'India',
        preparationTime: '#',
        difficulty: 'hard',
    },
    {
        picture: '/Pictures/Shakshuka.jpg',
        name: 'Shakshuka',
        description: 'Shakshuka is a North African and Middle Eastern meal of poached eggs in a simmering tomato sauce with spices.',
        origin: 'Tunisia',
        preparationTime: '#',
        difficulty: 'easy',
    },
    {
        picture: '/Pictures/PanaengCurry.jpg',
        name: 'Penaeng curry',
        description: 'It’s rich and spicy with a distinctly unique flavor from the addition of kaffir lime leaves and panang curry paste.',
        origin: 'Thailand',
        preparationTime: '#',
        difficulty: 'easy',
    },
    {
        picture: '/Pictures/Tagine.jpg',
        name: 'Vegetarian Tagine',
        description: 'This full-flavoured tagine is a cheap, healthy way of getting extra vegetables into your family\'s diet. ',
        origin: 'Morocco',
        preparationTime: '#',
        difficulty: 'medium',
    },
    {
        picture: '/Pictures/PadThai.jpg',
        name: 'Pad Thai',
        description: 'It\'s a stir-fried rice noodle dish commonly served as a street food in Thailand as part of the country\'s cuisine.',
        origin: 'Thailand',
        preparationTime: '#',
        difficulty: 'easy',
    },
    {
        picture: '/Pictures/JaipuriAloo.jpg',
        name: 'Jaipuri Aloo',
        description: 'A heavenly preparation using potatoes and onions, cooked in a scrumptious curry, packed with savoury flavors',
        origin: 'India',
        preparationTime: '#',
        difficulty: 'medium',
    },
    {
        picture: '/Pictures/LinguineCherrytomaten.jpg',
        name: 'Cherrytomato Linguine',
        description: 'Juicy cherry tomatoes that burst open in warm olive oil, creating a luxurious sauce that comes together in minutes.',
        origin: 'Italy',
        preparationTime: '#',
        difficulty: 'easy',
    },
]

const main = document.querySelector("main");

for (const recipe of COLLECTION) {
    console.log(recipe);
    const newDiv = document.createElement("div")
    newDiv.style.backgroundColor = "#fdfdf6";
    newDiv.append(recipe);
    main.append(newDiv);
}