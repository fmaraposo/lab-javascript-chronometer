class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    setInterval(() => {
      this.currentTime ++;
    },1000);
  }

  getMinutes() {
    if(this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 60;
    }
  }
  twoDigitsNumber(number) {
    if (number.toString().length <= 2) {
      return `0${number}`;
    } else {
      return number;
    }
  }
  stopClick() {
    clearInterval();
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  } 
}

let andre = new Chronometer;

andre.splitClick();
