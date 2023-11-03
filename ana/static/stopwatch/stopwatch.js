let timeLeft = 30;
let milliseconds = 0;
const timerElement = document.getElementById("timer");
const beepSound = document.getElementById("beep");
const clickSound = document.getElementById("click");
const startButton = document.getElementById("startButton");
let timerInterval;

function formatTime(seconds, milliseconds) {
    return `${seconds < 10 ? "0" : ""}${seconds}.${milliseconds < 10 ? "0" : ""}${milliseconds}`;
}

function updateTimer() {
    timerElement.innerHTML = formatTime(timeLeft, milliseconds);
    if (timeLeft === 10 && milliseconds === 0) {
        setTimeout(() => beepSound.play(), 100);
    }
    if (timeLeft === 5 && milliseconds === 0) {
        setTimeout(() => beepSound.play(), 100);
        setTimeout(() => beepSound.play(), 500);
    }
    if (timeLeft === 0 && milliseconds === 0) {
        setTimeout(() => beepSound.play(), 100);
        setTimeout(() => beepSound.play(), 500);
        setTimeout(() => beepSound.play(), 1000);
        clearInterval(timerInterval);
        startButton.textContent = "START";
    }
    if (milliseconds === 0) {
        timeLeft--;
        milliseconds = 99;
    } else {
        milliseconds--;
    }
}

startButton.addEventListener("click", () => {
    if (!timerInterval) {
        startButton.textContent = "RESTART";
        timerInterval = setInterval(() => {
            updateTimer();
        }, 10); // Update the timer every 10 milliseconds
    } else {
        clearInterval(timerInterval);
        timeLeft = 30;
        milliseconds = 0;
        timerElement.innerHTML = formatTime(timeLeft, milliseconds);
        startButton.textContent = "START";
        timerInterval = null;
        timerInterval = setInterval(() => {
            updateTimer();
        }, 10);
    }
    clickSound.play();
});


const quote = document.getElementById("quote");

function changeQuoteColor() {
  const colors = [
    "red",
    "darkred",
    "crimson",
    "darkorange",
    "blue",
    "darkblue",
    "darkcyan",
    "midnightblue",
    "royalblue",
    "turqouise"
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  quote.style.color = randomColor;
}

changeQuoteColor();
