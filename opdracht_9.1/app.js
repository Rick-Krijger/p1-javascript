let modal = document.getElementById("numberCheck");
let background = document.getElementById("body");
let text = document.getElementById("paragraph");
let age = document.getElementById("age");
let a = document.createElement('a'); 
let link = document.createTextNode("helaas je bent te jong");


function cookieWall() {
    modal.style.display = "block";
}

function ageCheck() {
    age = document.getElementById("age").valueAsNumber;
    if (age >= 18) {
        text.innerText = "Je wordt doorgestuurt"
        window.location.href = "https://github.com/Rick-Krijger/p1-javascript/tree/main/opdracht_9.1";
    } else {
        modal.style.display = "none";
        background.style.background = 'red';
        a.appendChild(link); 
        a.title = "Don't click me"; 
        a.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
        document.body.appendChild(a);
        text.innerText = "";
    }
}