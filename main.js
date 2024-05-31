let timerInterval;
let startTime;
let elapsedTime = 0;
let running=false;

const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const milisecElement = document.getElementById("milisec");

function startTimer() {
    if(!running){
    running=true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    }
}

function stopTimer() {
    if(running){
    clearInterval(timerInterval);
    running=false
    }
    
}

function resetTimer() {
    clearInterval(timerInterval);
    running=false;
    elapsedTime = 0;
    updateTimerDisplay();
}

function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hourElement.textContent = padTime(hours);
    minuteElement.textContent = padTime(minutes);
    secondElement.textContent = padTime(seconds);
    milisecElement.textContent = padTime(milliseconds);
}

function padTime(time) {
    return time < 10 ? "0" + time : time;
}


document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

