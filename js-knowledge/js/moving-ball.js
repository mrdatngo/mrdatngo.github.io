const btnElem = document.querySelector('.js-ball-game-code');
btnElem.addEventListener('click', () => {
  const ballContainerElem = document.querySelector('#ball-game-code-container');
  ballContainerElem.style.display = 'block';
});

const ball = document.querySelector('#ball');

if (ball) {
  // initial for position of ball
  let screenWidth = 200;
  let ballWidth = 30;
  let x = 5;
  let y = 5;
  let step = 2;
  vecX = step;
  vecY = step;
  moving();

  async function moving() {
    while (true) {
      ball.style.transform = `translate(${x}px, ${y}px)`;
      await sleep(20);
      if (
        x + vecX > screenWidth - ballWidth ||
        y + vecY > screenWidth - ballWidth ||
        x + vecX < 0 ||
        y + vecY < 0
      ) {
        vecX = randomVec(3);
        vecY = randomVec(3);
        if (x + vecX > screenWidth - ballWidth) {
          vecX = -vecX;
        }
        if (y + vecY > screenWidth - ballWidth) {
          vecY = -vecY;
        }
      }
      x += vecX;
      y += vecY;
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function randomVec(maxNumber) {
    return Math.floor(Math.random() * (maxNumber + 1)) + 1;
  }
}
