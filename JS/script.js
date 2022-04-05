const day = document.getElementById("day");
const week = document.getElementById("week");
const month = document.getElementById("month");
const time = document.querySelectorAll(".time");

let dataJSON;

fetch('../data.json').then(res => res.json()).then(data => {dataJSON = data;});



function retrieveDayData() {

    document.querySelector(".active").classList.remove("active");
    day.classList.add("active");

    for (let i = 0; i < time.length; i++) {
        time[i].textContent = "day";
    }

    for (let i = 0; i < dataJSON.length; i++) {
        console.log(dataJSON[i].timeframes.daily.current)
        document.querySelector(`[title="${dataJSON[i].title}"] .current-time`).textContent = dataJSON[i].timeframes.daily.current + "hrs";
        document.querySelector(`[title="${dataJSON[i].title}"] .previous-time`).textContent = dataJSON[i].timeframes.daily.previous + "hrs";  
    }
}

function retrieveWeekData() {

    document.querySelector(".active").classList.remove("active");
    week.classList.add("active");

    for (let i = 0; i < time.length; i++) {
        time[i].textContent = "week";
    }

    for (let i = 0; i < dataJSON.length; i++) {
        console.log(dataJSON[i].timeframes.daily.current)
        document.querySelector(`[title="${dataJSON[i].title}"] .current-time`).textContent = dataJSON[i].timeframes.weekly.current + "hrs";
        document.querySelector(`[title="${dataJSON[i].title}"] .previous-time`).textContent = dataJSON[i].timeframes.weekly.previous + "hrs";  
    }
}

function retrieveMonthData() {

    document.querySelector(".active").classList.remove("active");
    month.classList.add("active");

    for (let i = 0; i < time.length; i++) {
        time[i].textContent = "month";
    }

    for (let i = 0; i < dataJSON.length; i++) {
        console.log(dataJSON[i].timeframes.daily.current)
        document.querySelector(`[title="${dataJSON[i].title}"] .current-time`).textContent = dataJSON[i].timeframes.monthly.current + "hrs";
        document.querySelector(`[title="${dataJSON[i].title}"] .previous-time`).textContent = dataJSON[i].timeframes.monthly.previous + "hrs";  
    }
}

day.addEventListener("click", retrieveDayData);
week.addEventListener("click", retrieveWeekData);
month.addEventListener("click", retrieveMonthData);