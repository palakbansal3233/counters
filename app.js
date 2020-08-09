var secDown;
var minDown;
var sec1;
var secUp;
var minUp;
var sec2;
var totalSec;
var intervalHandle;
var duration;
let status = "started";
let status2 = "started";
var Laps1 = document.getElementById("laps1");
var Laps2 = document.getElementById("laps2");

function tick() {
  var timeDisplay = document.getElementById("timeDown");
  var timeDisplay2 = document.getElementById("timeUp");

  minDown = Math.floor(secDown / 60);
  sec1 = secDown - minDown * 60;

  if (sec1 < 10) {
    sec1 = "0" + sec1;
  }

  var message = minDown.toString() + ":" + sec1;

  timeDisplay.innerHTML = message;

  if (secDown === 0) {
    clearInterval(intervalHandle);
    Laps2.innerHTML = "";
  }
  if (duration) {
    secDown = secDown - duration;
  } else {
    secDown--;
  }

  minUp = Math.floor(secUp / 60);
  sec2 = secUp - minUp * 60;

  if (sec2 < 10) {
    sec2 = "0" + sec2;
  }

  var message2 = minUp.toString() + ":" + sec2;

  timeDisplay2.innerHTML = message2;

  if (secUp === totalSec) {
    clearInterval(intervalHandle);
    Laps1.innerHTML = "";
  }
  if (duration) {
    secUp = parseInt(secUp) + parseInt(duration);
  } else {
    secUp++;
  }
}

function recordLap1() {
  Laps1.innerHTML += "<li>" + minUp + ":" + sec2 + "</li>";
}

function recordLap2() {
  Laps2.innerHTML += "<li>" + minDown + ":" + sec1 + "</li>";
}

function resetValues() {
  window.clearInterval(intervalHandle);
  secUp = 0;
  secDown = 0;
  var timeDisplay = document.getElementById("timeDown");
  var timeDisplay2 = document.getElementById("timeUp");
  timeDisplay.innerHTML = "00:00";
  timeDisplay2.innerHTML = "00:00";
}
function PauseResume() {
  if (status === "started") {
    window.clearInterval(intervalHandle);
    document.getElementById("p1").innerHTML = "Resume";
    status = "stopped";
  } else {
    intervalHandle = setInterval(tick, 1000);
    document.getElementById("p1").innerHTML = "Pause";
    status = "started";
  }
}
function PauseResume2() {
  if (status2 === "started") {
    window.clearInterval(intervalHandle);
    document.getElementById("p2").innerHTML = "Resume";
    status2 = "stopped";
  } else {
    intervalHandle = setInterval(tick, 1000);
    document.getElementById("p2").innerHTML = "Pause";
    status2 = "started";
  }
}
function startCounter() {
  var myInput = document.getElementById("minutes").value;
  var myInputDuration = document.getElementById("seconds").value;

  if (isNaN(myInput)) {
    alert("Type a valid number please");
    return;
  }
  secDown = myInput * 60;
  meriValue = myInput;
  totalSec = myInput * 60;
  secUp = 0;
  duration = myInputDuration;
  intervalHandle = setInterval(tick, 1000);
}

window.onload = function () {
  var myInput = document.createElement("input");
  myInput.setAttribute("type", "text");
  myInput.setAttribute("id", "minutes");
  myInput.setAttribute("required", true);

  document.getElementById("inputArea").appendChild(myInput);

  var myInputDuration = document.createElement("input");
  myInputDuration.setAttribute("type", "text");
  myInputDuration.setAttribute("id", "seconds");

  document.getElementById("inputArea2").appendChild(myInputDuration);
  document.getElementById("inputArea").appendChild(myInput);
  document.getElementById("inputArea2").appendChild(myInputDuration);
};
