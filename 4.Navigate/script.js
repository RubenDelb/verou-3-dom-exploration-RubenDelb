const ol = document.querySelector('ol'); //select the ordered list in the DOM
const lastListItem = ol.children[4]; //set variable for the last child of the list
const firstListItem = ol.children[0]; //set variable for the first child of the list
ol.insertBefore(lastListItem, firstListItem); //Insert the last child as the first one in the list

const secondSection = document.querySelectorAll("section")[1]; //select the second section
const thirdSection = document.querySelectorAll("section")[2]; //select the third section
const thirdHeader = secondSection.children[0]; //set variable for the header that should be in the third section
const secondHeader = thirdSection.children[0].children[0]; //set variable for the header that should be in the second section
secondSection.insertBefore(secondHeader, secondSection.children[0]); //append the second header to the second section
thirdSection.insertBefore(thirdHeader, thirdSection.children[0]); //append the third header to the third section

thirdSection.remove(); //remove the third section of the DOM