const wrapper = document.querySelector(".displayedsquare-wrapper");

const _initTime = Date.now()

function getElapsedTime() {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const list = document.querySelector("ul");

function alertMessage(e) {
    alert(e.target.classList[1]);
}

function clickOnSquare(e) {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
    const newDiv = document.createElement("div");
    newDiv.className = "displayedsquare" + " " + e.target.classList[1];
    wrapper.appendChild(newDiv);
    const displayedsquares = document.querySelectorAll('.displayedsquare');
    for (let displayedsquare of displayedsquares) {
        displayedsquare.addEventListener('click', alertMessage);
    }
    const newListItem = document.createElement("li");
    newListItem.innerHTML = "[" + getElapsedTime() + "]" + " Created a new " + e.target.classList[1] + " square.";
    list.append(newListItem);
}

const actionsquares = document.querySelectorAll('.actionsquare')

for (let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', clickOnSquare)
}

function random_rgb() {
    var a = Math.round,
        b = Math.random,
        c = 255;
    return 'rgb(' + a(b() * c) + ',' + a(b() * c) + ',' + a(b() * c) + ')';
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        document.body.style.backgroundColor = random_rgb();
        const newListItem = document.createElement("li");
        newListItem.innerHTML = "[" + getElapsedTime() + "]" + " Spacebar has been smashed!";
        list.append(newListItem);
    }
    const listI = document.querySelector("ul");
    if (e.keyCode == 76) {
        listI.innerHTML="";
        //Alternative for line 51
        // const listItems = document.querySelector("ul").children;
        // for (let i = listItems.length - 1; i >= 0; --i) {
        //     listItems[i].remove();
        // }
    }
    if (e.keyCode == 83) {
        wrapper.innerHTML="";
    }
}
