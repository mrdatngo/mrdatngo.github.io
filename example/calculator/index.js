const inputElem = document.querySelector('.cal-screen .screen-input');
const resultElem = document.querySelector('.cal-screen .screen-result');

inputElem.value = '';
resultElem.innerText = '';

const calBtns = document.querySelectorAll('.cal-btn');

calBtns.forEach((calBtn) => {
  calBtn.addEventListener('click', () => {
    const value = calBtn.getAttribute('cal-value');
    inputElem.value += value;
  });
});

const equalBtn = document.querySelector(
  '.cal-equal-btn-wrapper .cal-equal-btn'
);
equalBtn.addEventListener('click', () => {
  resultElem.innerText = eval(inputElem.value);
});
