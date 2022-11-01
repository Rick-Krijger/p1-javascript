text = document.getElementById('text');
let inputone
let inputtwo
let answer

function multiply() {
    inputone = document.getElementById("inputone").valueAsNumber;
    inputtwo = document.getElementById("inputtwo").valueAsNumber;
    if (inputone > 0 &&	inputtwo > 0) {
        answer = inputone * inputtwo
        text.innerText = "het antwoord is: " + answer;
    } else {
        text.innerText = "het getal is te laag";
    }
}

function minus() {
    inputone = document.getElementById("inputone").valueAsNumber;
    inputtwo = document.getElementById("inputtwo").valueAsNumber;
    if (inputone > 0 &&	inputtwo > 0) {
        answer = inputone - inputtwo
        text.innerText = "het antwoord is: " + answer;
    } else {
        text.innerText = "het getal is te laag";
    }
}

function add() {
    inputone = document.getElementById("inputone").valueAsNumber;
    inputtwo = document.getElementById("inputtwo").valueAsNumber;
    if (inputone > 0 &&	inputtwo > 0) {
        answer = inputone + inputtwo
        text.innerText = "het antwoord is: " + answer;
    } else {
        text.innerText = "het getal is te laag";
    }
}

function devide() {
    inputone = document.getElementById("inputone").valueAsNumber;
    inputtwo = document.getElementById("inputtwo").valueAsNumber;
    if (inputone > 0 &&	inputtwo > 0) {
        answer = inputone / inputtwo
        text.innerText = "het antwoord is: " + answer;
    } else {
        text.innerText = "het getal is te laag";
    }
}