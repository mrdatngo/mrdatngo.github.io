const element = document.getElementById('js-btn-event-handler');
// Add event handler code to an onclick event
element.onclick = function () {
  alert('assign click');
};
element.addEventListener('click', function () {
  alert('add click');
});
element.addEventListener('click', function () {
  alert('add click 2');
});
