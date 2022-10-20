let budget = 100;

// opdracht_7.1

// let product = 60;

// opdracht_7.2
let product = prompt("Hoeveel kost het product dat je wilt kopen?");

if (budget >= product) {
    document.write('<font color="green">' + "U heeft genoeg geld!")
    
} else {
    document.write('<font color="red">' + "Helaas, te weinig geld")
}

