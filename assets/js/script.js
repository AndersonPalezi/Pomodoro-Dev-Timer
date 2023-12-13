const btnStart = document.getElementById('btn-start');
const btnPause = document.getElementById('btn-pause');
const btnReset = document.getElementById('btn-reset');

let interval; // Variável para armazenar o intervalo do temporizador
let timerDuration; // Variável para armazenar a duração original do temporizador
let timerValue; // Variável para armazenar o valor atual do temporizador
let isPaused = false; // Flag para verificar se o temporizador está pausado

btnStart.addEventListener('click', startTimer);
btnPause.addEventListener('click', pauseTimer);
btnReset.addEventListener('click', resetTimer);

function startTimer() {
  const hours = document.getElementById('hour');
  const minutes = document.getElementById('minute');
  const seconds = document.getElementById('second');

  // Calcula a duração total do temporizador em segundos
  timerDuration = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60) + parseInt(seconds.value);

  // Inicializa o temporizador
  timerValue = timerDuration;
  display = document.getElementById('timer');

  // Chama a função do temporizador
  interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (!isPaused) {
    let hours = Math.floor((timerValue / 60) / 60);
    let minutes = Math.floor(timerValue / 60 - (hours * 60));
    let seconds = Math.floor(timerValue % 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.innerHTML = `${hours}:${minutes}:${seconds}`;

    timerValue -= 1;

    if (timerValue < 0) {
      display.innerHTML = 'ACABOU!!!';
      clearInterval(interval);
    }
  }
}

function pauseTimer() {
  isPaused = !isPaused;

  if (isPaused) {
    clearInterval(interval);
  } else {
    interval = setInterval(updateTimer, 1000);
  }
}

function resetTimer() {
  clearInterval(interval);
  timerValue = timerDuration;
  isPaused = false;
  updateTimer(); // Atualiza o display com o valor original do temporizador
}
