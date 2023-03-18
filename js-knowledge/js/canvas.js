const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw a line
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(400, 400);
ctx.stroke();

// Draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);

// Draw a circle
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(250, 250, 50, 0, 2 * Math.PI);
ctx.fill();

// Draw text
ctx.font = '30px Arial';
ctx.fillStyle = 'green';
ctx.fillText('Hello, world!', 50, 400);

// Draw a image

const img = new Image();
img.onload = function () {
  ctx.drawImage(img, 0, 0, 200, 200); // Draw the image at point (0,0)
};
img.src = './images/player.png'; // Replace 'your-image.jpg' with the path to your image file
