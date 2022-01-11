const names = ["Pieter", "Dery", "Ahmad", "Jian", "Michael", "Dante", "Muhammet", "Nicolas", "Jordy", "Beryl", "Cynthia", "Magali", "Jawid", "Koen", "Kevin", "Benjamin", "Michelle", "Colin", "Feruz", "Ellen", "Sara"];

const article = document.querySelector("article");

for (let oneName of names) {
    console.log(names[oneName])
    const newSection = document.createElement("section");
    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = oneName;
    newSection.appendChild(newParagraph);
    article.appendChild(newSection);
} 



/*names.forEach(function addElement() {
    const newElement = document.createElement("section");
    const newParagraph = document.createElement("p");
    newElement.appendChild(newParagraph);
    const currentSection = document.querySelector("article");
    newElement.appendChild(currentSection);
})
names.forEach function addElement() {
    const newSection = document.createElement("section");

    const newParagraph = document.createElement("p");
}
*/