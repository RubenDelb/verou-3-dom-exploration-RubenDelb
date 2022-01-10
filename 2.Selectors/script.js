var a = document.querySelectorAll(".important");
for (var b = 0; b < a.length; b++) {
    a[b].setAttribute("title", "This is an important item");
}

var images = document.querySelectorAll("img");
for (var i=0; i<images.length; i++){
    if (images[i].classList.contains("important") === false) {
        images[i].style.display ="none"; 
    }
    console.log(images[i]);
}

function random_rgb() {
    var a = Math.round, b = Math.random, c = 255;
    return 'rgb(' + a(b()*c) + ',' + a(b()*c) + ',' + a(b()*c) + ')';
} 

var p = document.querySelectorAll("p");
for (var i=0; i<p.length; i++){
    console.log(p[i].innerHTML);
    if (p[i].className != ""){
        console.log("class=" + p[i].className);
    }
    else {
        (p[i]).style.color = random_rgb();
    }
}