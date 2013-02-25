var box = document.getElementById("box");
var x = 100;
var y = 200;
var dx = 3;
var dy = 5;

function update() {

    box.style.marginLeft = x + "px";
    box.style.marginTop = y + "px";

    if (x < 0 || x > 650) dx = -dx;
    if (y < 0 || y > 500) dy = -dy;
    x += dx;
    y += dy;

};

setInterval(update, 1000 / 60);