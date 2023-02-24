let firstChildsColors = document.querySelectorAll(
  '.table-of-color tr td:first-child'
);
firstChildsColors.forEach((e) => {
  console.log(e);
  e.style.backgroundColor = e.innerText;
});
