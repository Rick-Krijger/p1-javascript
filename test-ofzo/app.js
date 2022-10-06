function color_change() {
    let title = "title";

    document.getElementById(title).style.color = "red";
    document.getElementById(title).style.fontWeight = "normal";
    document.getElementById(title).style.fontSize = "3rem";
}


function color_change_back() {
    let title = "title";

    document.getElementById(title).style.color = "black";
}

function background_color_change() {
    let paragraph = "paragraph";
    document.getElementById(paragraph).style.backgroundColor = "red";
}

function change_text() {
    let text = document.getElementById('text');
    text.innerText = 'Tekst weg!';
}