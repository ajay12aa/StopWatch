const hoursSpan = document.getElementsByClassName("hours")[0];
const minutesSpan = document.getElementsByClassName("minutes")[0];
const secondsSpan = document.getElementsByClassName("secs")[0];
const millisecondsSpan = document.getElementsByClassName("milisecs")[0];

const startButton = document.getElementById("button-start");
const stopButton = document.getElementById("button-stop");
const resetButton = document.getElementById("button-restart");

let counter = 0;
let intervalId;
let x;
function updateTimer() {
  counter++;
  x = counter * 10;

  const hours = Math.floor(x / 3600000);
  const minutes = Math.floor(x / 60000);
  const seconds = Math.floor(x / 1000);
  const milliseconds = x % 1000;

  hoursSpan.textContent = hours.toString().padStart(2, "0") + ":";
  minutesSpan.textContent = minutes.toString().padStart(2, "0") + ":";
  secondsSpan.textContent = seconds.toString().padStart(2, "0") + ":";
  millisecondsSpan.textContent = milliseconds
    .toString()
    .slice(0, -1)
    .padStart(2, "0");
}
startButton.addEventListener("click", () => {
  intervalId = setInterval(updateTimer, 10);
  startButton.disabled = true;
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  startButton.disabled = false;
});

resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  counter = 0;
  hoursSpan.textContent = "00:";
  minutesSpan.textContent = "00:";
  secondsSpan.textContent = "00:";
  millisecondsSpan.textContent = "00";
  startButton.disabled = false;
});
