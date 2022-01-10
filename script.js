//show document title in the console
console.log(document.title);

//change the document title
document.title = "Modifying the DOM";

//show the new document title
console.log(document.title);

//add a random rgb background color when the page loads
function random_rgb() {
    var a = Math.round, b = Math.random, c = 255;
    return 'rgb(' + a(b()*c) + ',' + a(b()*c) + ',' + a(b()*c) + ')';
}

document.body.style.backgroundColor = random_rgb();

//show all the child elements of the body in the console
var d = document.body.children;
for (const element of d) {
    console.log(element);
}
