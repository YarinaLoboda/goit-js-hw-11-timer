import { targetDate, selectorId } from '../data/timer';

class CountdownTimer {
  constructor(selectorId, targetDate) {
    this.targetDate = Date.parse(targetDate);

    if (!this.targetDate) {
      alert('Target data is not correct "' + targetDate + '"');
      return;
    }
    this.selectorId = selectorId;
    this.timerContainer = document.getElementById(this.selectorId);

    if (!this.timerContainer) {
      alert('Not find tag with ID "' + selectorId + '"');
      return;
    }

    this.getRefsElem();

    this.start();
  }

  getRefsElem() {
    this.dayContainer = this.timerContainer.querySelector(
      'span[data-value="days"]',
    );

    if (!this.dayContainer) {
      alert('Check tag with class .data-value="days"');
      return;
    }

    this.hourContainer = this.timerContainer.querySelector(
      'span[data-value="hours"]',
    );

    if (!this.hourContainer) {
      alert('Check tag with class .data-value="hours"');
      return;
    }

    this.minContainer = this.timerContainer.querySelector(
      'span[data-value="mins"]',
    );

    if (!this.minContainer) {
      alert('Check tag with class .data-value="mins"');
      return;
    }

    this.secContainer = this.timerContainer.querySelector(
      'span[data-value="secs"]',
    );
    if (!this.secContainer) {
      alert('Check tag with class .data-value="secs"');
      return;
    }
  }

  start() {
    const deltaTime = this.targetDate - Date.now();

    if (deltaTime <= 0) {
      const date = new Date();
      alert('Target date/time must be greater than the current date ' + date);
      return;
    }

    this.timerID = setInterval(() => {
      if (this.targetDate - Date.now() <= 0) {
        alert('Time is over !!!');
        clearInterval(this.timerID);
        return;
      }
      this.render(this.getTimeComponents(this.targetDate - Date.now()));
    }, 1000);
  }

  render(result) {
    this.dayContainer.textContent = result['days'];
    this.hourContainer.textContent = result['hours'];
    this.minContainer.textContent = result['mins'];
    this.secContainer.textContent = result['secs'];
  }

  getTimeComponents(time) {
    const timeComponentArray = [];

    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    timeComponentArray['days'] = days;
    timeComponentArray['hours'] = hours;
    timeComponentArray['mins'] = mins;
    timeComponentArray['secs'] = secs;

    return timeComponentArray;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer(selectorId, targetDate);
