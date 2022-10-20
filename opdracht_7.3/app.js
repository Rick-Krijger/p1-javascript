let result = 0;

function counting() {
    counter = document.getElementById('count');
    result++;
    counter.innerText = result;

    if (result >= 10) {
        result = 0
        counter.innerText = "0";
    } else {
        
    }
}