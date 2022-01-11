const names = ["Pieter", "Dery", "Ahmad", "Jian", "Michael", "Dante", "Muhammet", "Nicolas", "Jordy", "Beryl", "Cynthia", "Magali", "Jawid", "Koen", "Kevin", "Benjamin", "Michelle", "Colin", "Feruz", "Ellen", "Sara"];

const article = document.querySelector("article");

function random_rgb() {
    var a = Math.round,
        b = Math.random,
        c = 255;
    return 'rgb(' + a(b() * c) + ',' + a(b() * c) + ',' + a(b() * c) + ')';
}

function BlackOrWhite(rgb) {
    rgb = rgb.match(/\d+/g);
    if ((rgb[0] * 0.299) + (rgb[1] * 0.587) + (rgb[2] * 0.114) > 128) {
        return 'black';
    } else {
        return 'white';
    }
}

const shuffledPeople = names.sort((a, b) => 0.5 - Math.random());

for (let oneName of names) {
    console.log(oneName);
    const newSection = document.createElement("section");
    newSection.style.backgroundColor = random_rgb();
    newSection.style.color = BlackOrWhite(newSection.style.backgroundColor);
    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = oneName;
    newSection.appendChild(newParagraph);
    article.appendChild(newSection);
}
