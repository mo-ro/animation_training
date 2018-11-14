var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillStyle = "rgba(0, 100, 0, 0.3)";
// c.fillRect(100, 100, 100, 100);
// c.fillRect(300, 100, 40, 100);
// c.fillRect(100, 500, 10, 100);
// c.fillRect(100, 190, 100, 10);

// c.beginPath();
// c.moveTo(50, 400);
// c.lineTo(400, 10);
// c.lineTo(300, 500);
// c.strokeStyle = "#a41839";
// c.stroke();

// console.log(canvas)

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for(var i = 0; i < 10000; i++) {
//   x = Math.random() * window.innerWidth;
//   y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();
// }

var circleArray = [];

for(var i = 0; i < 800; i++) {
  var x = Math.random() * (window.innerWidth - radius * 2) + radius;
  var y = Math.random() * (window.innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5);
  var dy = (Math.random() - 0.5);
  var radius = 30;

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
  };

  this.update = function() {
    this.draw();

    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  };
}

// var circle = new Circle(200, 200, 3, 3, 30);

var x = 200;
var y = 200;
var dx = 6;
var dy = 6;
var radius = 30;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
