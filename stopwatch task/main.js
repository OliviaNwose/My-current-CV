let hours= 00;
let minutes = 00;
let seconds = 00;
let milliseconds =00;
let Interval;

document.getElementById("start-button").onclick =() => start();
document.getElementById("pause-button").onclick =() => pause();
document.getElementById("reset-button").onclick =() => reset();

function start() {
    Interval =setInterval(() => {timer(); }, 10);
}

function pause () {
    clearInterval(Interval);
}

function reset () {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('hr').innerText = '00';
    document.getElementById('min').innerText = '00';
    document.getElementById('sec').innerText = '00';
    document.getElementById('millisecond').innerText = '00';
}

function timer() {
    milliseconds++
    if (milliseconds == 100){
        milliseconds = 0;
        seconds++
    }

    if (seconds == 60){
        seconds = 0;
        minutes++
    }

    if(minutes == 60) {
        minutes = 0;
        hours++;
    }
    

    document.getElementById('hr').innerText = returnData(hours);
    document.getElementById('min').innerText = returnData(minutes);
    document.getElementById('sec').innerText = returnData(seconds);
    document.getElementById('millisecond').innerText = returnData(milliseconds);
}

function returnData (input) {
    return input > 10 ? input : `0${input}`
}





