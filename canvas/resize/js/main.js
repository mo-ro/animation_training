var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100);
c.fillRect(300, 100, 40, 100);
c.fillRect(100, 500, 10, 100);
c.fillRect(100, 190, 100, 10);

console.log(canvas)