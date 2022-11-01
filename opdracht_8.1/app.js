text = document.getElementById('text');
let inputone
let inputtwo
let answer

function multiply() {
    inputone = document.getElementById("inputone").valueAsNumber;
    inputtwo = document.getElementById("inputtwo").valueAsNumber;
    answer = inputone * inputtwo
    text.innerText = "het antwoord is: " + answer;
}

function minus() {
    inputone = document.getElementById("inputone").valueAsNumber;
    inputtwo = document.getElementById("inputtwo").valueAsNumber;
    answer = inputone - inputtwo
    text.innerText = "het antwoord is: " + answer;
}

function add() {
    inputone = document.getElementById("inputone").valueAsNumber;
    inputtwo = document.getElementById("inputtwo").valueAsNumber;
    answer = inputone + inputtwo
    text.innerText = "het antwoord is: " + answer;
}

function devide() {
    inputone = document.getElementById("inputone").valueAsNumber;
    inputtwo = document.getElementById("inputtwo").valueAsNumber;
    answer = inputone / inputtwo
    text.innerText = "het antwoord is: " + answer;
}