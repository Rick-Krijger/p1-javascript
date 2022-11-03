const countDate = new Date("December 23, 2022 15:15:00");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day =  hour * 24;

function countdown() {
    const now = new Date();
    const gap = countDate - now;
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second );
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

    if (textSecond == 1) {
        document.querySelector(".secondone").innerText = "Seconde";      
    }   else {
        document.querySelector(".secondone").innerText = "Seconden";
    }

    if (textMinute == 1) {
        document.querySelector(".minuteone").innerText = "Minuut";
    } else {
        document.querySelector(".minuteone").innerText = "Minuten";
    }
    
    if (textHour == 1) {
        document.querySelector(".hourone").innerText = "Uur";
    } else {
        document.querySelector(".hourone").innerText = "Uren";
    }

    if (textDay == 1) {
        document.querySelector(".dayone").innerText = "Dag";
    } else {
        document.querySelector(".dayone").innerText = "Dagen";
    }
}

setInterval(countdown, 1000);