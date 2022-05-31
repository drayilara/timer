
/*--------THIS TIMER ONLY WORKS IF SET ON JAN 1ST OF THE YEAR, USE DATE() FOR DYNAMIC UPDATING-----------
ITS A FLEX OF JS MUSCLE.
*/





function getElements() {
    let seconds = document.getElementById("seconds");
    let minutes = document.getElementById("mins");
    let hours = document.getElementById("hours");
    let days = document.getElementById("days");

    return {seconds, minutes, hours, days};
}

function start() {

    let {seconds} = getElements();
    let start = 60;

    setInterval(function() {
        if(start == 0){
            start = 60;
            setMinutes();
        }
        --start;
        seconds.textContent = start;
    }, 1000);
}

function setMinutes() {
    let {minutes, seconds} = getElements();

    if(seconds.textContent == 0) {
        let currentMinutes = Number(minutes.textContent);
        if(!currentMinutes) {
            setHours();
            currentMinutes = 60;
        }else {
            currentMinutes--;
        }   
        
        minutes.textContent = currentMinutes;
    }
}

function setHours() {
    let {hours, minutes} = getElements();

    if(minutes.textContent == 0) {
        let currentHours = Number(hours.textContent);

        if(!currentHours) {
            setDays();
            currentHours = 24;
        }else {
            currentHours--;
        }

        hours.textContent = currentHours;
    }
}

function setDays() {

    let {days, hours} = getElements();

    if(hours.textContent == 0) {
        let currentDays = Number(days.textContent);

        if(!currentDays) {
            document.querySelector("h1").textContent = "Happy New year";
        } else {
            currentDays--;
        }

        days.textContent = currentDays;
    }
}


start();