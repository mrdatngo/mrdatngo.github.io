import Player from './player.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
var img = document.createElement('img');
img.src = './images/player.png';

function fillBackground() {
  ctx.fillStyle = '#e6e3e3';
  ctx.fillRect(0, 0, 500, 500);
}

let player = new Player(ctx, img, 100, 50);
window.onload = function () {
  setInterval(() => {
    // fps (frame per second!)
    fillBackground();
    player.draw();
  }, 10);
};

function initEventHandler() {
  document.addEventListener('keydown', (event) => {
    let key = event.key;
    switch (key) {
      case 'ArrowRight':
        player.moveRight();
        break;
      case 'ArrowLeft':
        player.moveLeft();
        break;
      case 'ArrowUp':
        player.moveUp();
        break;
      case 'ArrowDown':
        player.moveDown();
        break;
    }
  });
}

initEventHandler();
