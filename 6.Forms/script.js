const firstInput = document.getElementById("firstname");
const secondInput = document.getElementById("age");
const pwdInput = document.getElementById("pwd");
const pwdConfirmInput = document.getElementById("pwd-confirm");

const addName = (event) => {
    event.preventDefault();

    const newFirstName = event.target.value;
    document.getElementById("display-firstname").innerHTML = newFirstName;
}

firstInput.addEventListener('keyup', addName);

const checkAge = (event) => {
    event.preventDefault();
    const aHardTruth = document.getElementById("a-hard-truth");
    const newAge = event.target.value;
    if (newAge >= 18) {
        aHardTruth.style.visibility = "visible";
    }
    else {
        aHardTruth.style.visibility = "hidden";
    }
}

secondInput.addEventListener('keyup', checkAge);

const passwordCheck = (event) => {
    event.preventDefault();

    const newPwd = event.target.value;
    if (newPwd.length < 6) {
        pwdInput.style.backgroundColor = "coral";
    }
    else {
        pwdInput.style.backgroundColor = "lightgreen";
    }
}

pwdInput.addEventListener('keyup', passwordCheck);

const passwordDoubleCheck = (event) => {
    event.preventDefault();

    const checkPwd = event.target.value;
    const newPwd = pwdInput.value;
    if (checkPwd === newPwd) {
        pwdConfirmInput.style.backgroundColor = "lightgreen";
    }
    else {
        pwdConfirmInput.style.backgroundColor = "coral";
    }
}

pwdConfirmInput.addEventListener('keyup', passwordDoubleCheck);

const selectMode = document.getElementById("toggle-darkmode");

const switchMode = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    if (event.target.value === "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }

}

selectMode.addEventListener('change', switchMode);