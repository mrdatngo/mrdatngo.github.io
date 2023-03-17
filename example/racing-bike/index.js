const gameContainer = document.querySelector('.game-container');
const motobileWrapper = document.querySelector(
  '.game-container motobike-wrapper'
);
const bikeElemen = document.querySelector(
  '.game-container .motobike-wrapper .bike'
);

function privatePosition() {
  let position = 0;
  let getPosition = function () {
    return position;
  };

  let addPosition = function (x) {
    position += x;
  };

  return { getPosition, addPosition };
}

const { getPosition, addPosition } = privatePosition(); // closure position

const bike = {
  getPosition: getPosition,
  addPosition: addPosition,
  interval: 0,

  move: function () {
    this.interval = setInterval(() => {
      this.addPosition(3);
      bikeElemen.style.transform = `translate(${this.getPosition()}px, 0)`;
    }, 20);
  },
  stop: function () {
    clearInterval(this.interval);
  },
};

bikeElemen.addEventListener('mouseover', function () {
  bike.move();
});

bikeElemen.addEventListener('mouseout', function () {
  bike.stop();
});
