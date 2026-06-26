let secondHand = document.querySelector(".second");
let minuteHand = document.querySelector(".minute");
let hourHand = document.querySelector(".hour");

function setTime(){

    let date  = new Date();
    let second  = date.getSeconds();
    
    let minute = date.getMinutes();
    let hour = date.getHours();

    console.log(minute);
    

    let secondDegree = second * 360 / 60 + 90;
    let minuteDegree = minute * 360 / 60 + 90;
    let hourDegree = hour * 360 / 12 + 90 + (minute * 30 / 60);

    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setTime , 1000);