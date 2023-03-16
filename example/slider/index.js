let activeIndex = 0;
let imageShowers = document.querySelectorAll('.image-shower');
let total = imageShowers.length;

let timeout;
let interval;
let timoutFunction;
function start() {
  interval = setInterval(() => {
    moveNext(activeIndex, 1);
  }, 4000);
}

start();
let isMoving = false;

function moveNext(curIndex) {
  if (isMoving) {
    return;
  }
  isMoving = true;
  let nextIndex = (curIndex + 1) % total;
  imageShowers[curIndex].classList.add('active-left-to-right');
  imageShowers[nextIndex].classList.add('next-active-left-to-right');
  timeoutFunc = () => {
    imageShowers[curIndex].classList.remove('active');
    imageShowers[nextIndex].classList.add('active');
    imageShowers[curIndex].classList.remove('active-left-to-right');
    imageShowers[nextIndex].classList.remove('next-active-left-to-right');
    activeIndex = nextIndex;
    isMoving = false;
  };
  timeout = setTimeout(timeoutFunc, 1000);
}

function moveBack(curIndex) {
  if (isMoving) {
    return;
  }
  isMoving = true;
  let nextIndex = (curIndex - 1 + total) % total;
  imageShowers[curIndex].classList.add('active-right-to-left');
  imageShowers[nextIndex].classList.add('next-active-right-to-left');
  timeoutFunc = () => {
    imageShowers[curIndex].classList.remove('active');
    imageShowers[nextIndex].classList.add('active');
    imageShowers[curIndex].classList.remove('active-right-to-left');
    imageShowers[nextIndex].classList.remove('next-active-right-to-left');
    activeIndex = nextIndex;
    isMoving = false;
  };
  timeout = setTimeout(timeoutFunc, 1000);
}

let arrowLeft = document.querySelector('.arrow-wrapper .arrow-left');
let arrowRight = document.querySelector('.arrow-wrapper .arrow-right');
arrowLeft.addEventListener('click', function () {
  moveNext(activeIndex);
});

arrowRight.addEventListener('click', function () {
  moveBack(activeIndex);
});
