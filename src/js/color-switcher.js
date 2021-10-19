import { colors, colorChangerDelay } from '../data/data';

const saveTimer = {
  timerId: null,
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setColor() {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
}

////// RUN //////

refs.startBtn.addEventListener('click', () => {
  saveTimer.timerId = setInterval(setColor, colorChangerDelay);
  if (saveTimer.timerId) {
    refs.startBtn.setAttribute('disabled', true);
  }
});

refs.stopBtn.addEventListener('click', () => {
  clearTimeout(saveTimer.timerId);
  refs.startBtn.removeAttribute('disabled');
});
