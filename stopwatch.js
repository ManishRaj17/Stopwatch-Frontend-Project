// stopwatch.js

let timer;
let startTime;
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
  if (!running) {
    startTime = Date.now();
    timer = setInterval(updateDisplay, 1000);
    running = true;
  }
}

function stopTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  display.textContent = '00:00:00';
  running = false;
}

function updateDisplay() {
  const currentTime = new Date(Date.now() - startTime);
  const hours = String(currentTime.getUTCHours()).padStart(2, '0');
  const minutes = String(currentTime.getUTCMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getUTCSeconds()).padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
