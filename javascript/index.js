const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');


// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  // ... your code goes here
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.className = 'btn split';
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.className = 'btn start';
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  // ... your code goes here
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if(btnLeft.classList.contains('start')) {
      chronometer.startClick(printTime);
      setStopBtn();
      setSplitBtn();
    } else {
      setStartBtn();
      setResetBtn();
      chronometer.stopClick();
    }
  });
// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains('reset')) {
    btnRight.classList.remove("reset");
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.add("split");
  } else {
    btnRight.classList.contains("split");
    btnRight.classList.remove("split");
    btnRight.innerHTML = "RESET";
    btnRight.classList.add("reset");
  }
});
