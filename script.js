console.log(document.title);

document.title = "Modifying the DOM";

console.log(document.title);

function random_rgb() {
    var a = Math.round, b = Math.random, c = 255;
    return 'rgb(' + a(b()*c) + ',' + a(b()*c) + ',' + a(b()*c) + ')';
}

var randomColor = random_rgb()

document.body.style.backgroundColor = randomColor;

var d = document.body.children;
for (const element of d) {
    console.log(element);
}
