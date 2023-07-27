const mainPin = document.getElementById("mainPin");
const pinForm = document.getElementById("enterPin");
const password = document.getElementById("pin");
const seekbar = document.getElementById("seekbar");
const player = document.getElementById("player");
const box = document.getElementById("box");
const start = document.getElementById("start");
const queue = document.getElementById("queue");
const game = document.getElementById("game");
const backdrop = document.getElementById("backdrop");
const round = document.getElementById("round");
const text = document.getElementById("text");
const nameForm = document.getElementById("nameForm")
var fired = false;

queue.volume = 0.3;

function startGame() {
  fadeout(backdrop);
  fadein(game);
  fadein(round);  
  fadein(countdown);
  queue.play();
  setTimeout(() => {countdown.textContent = "2";}, 1000);
  setTimeout(() => {queue.play();}, 1000);
  setTimeout(() => {countdown.textContent = "1";}, 2000);
  setTimeout(() => {queue.play();}, 2000);
  setTimeout(() => fadeout(countdown), 3000);
  setTimeout(() => fadein(box), 3000);
  setTimeout(() => {player.play();}, 3000);
  setTimeout(() => {game.onsubmit = (e) => multiplier();}, 3000);
  setTimeout(() => fadeout(start), 4500);
}

function endGame() {
  fadein(start);
  start.style.alignSelf = "flex-start";
  start.textContent = "3";
  queue.play();
  setTimeout(() => {start.style.alignSelf = "center";}, 1000);
  setTimeout(() => {start.textContent = "2";}, 1000);
  setTimeout(() => {queue.play();}, 1000);
  setTimeout(() => {start.style.alignSelf = "flex-end";}, 2000);
  setTimeout(() => {start.textContent = "1";}, 2000);
  setTimeout(() => {queue.play();}, 2000);
  setTimeout(() => {document.forms["game"].submit();}, 3000);
}

function multiplier() { 
  document.getElementById("timer").value = (1-(player.currentTime/player.duration)) + 0.3;
}

function fadein(item) {
  item.style.visibility = "visible";
  item.style.opacity = "1";
}

function checkPin(redirect) {
    if (mainPin.value == "0142857") {
      fadeout(pinForm);
      
      if (redirect == 1) {
        window.location.href = "/game";
      }
      else {
        if (redirect == 2) {
          window.location.href = "/auflösung";
        }
      }
  } else {
    
  }
}

function fadeout(item) {
  item.style.opacity = "0";
  item.addEventListener("transitionend" , 
    function () {
      if (item.style.opacity == "0") {
        item.style.visibility = "hidden";
      }
    }
  );
}

function showPassword() {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
}

$('#player').on('timeupdate', function() {
  if((this.duration - this.currentTime) <= 3 && !fired) {
    endGame();
    fired = true;
  }
});

$('#player').on('timeupdate', function() {
  $('#seekbar').attr("value", this.currentTime / this.duration);
});