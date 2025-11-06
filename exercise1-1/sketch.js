class Star {
    x;
    y;
    speedx;
    speedy;
    constructor(){
        this.x = x;
        this.y = y;
        this.speedx = this.speedx
        this.speedy = this.speedy
    }
}
let myStar = new star(100, 300);

myStar.draw();
  draw();
 fill(255, 234, 0);
    noStroke();
    triangle(x, y - 50, x - 20, y, x + 20, y);
    triangle(x - 50, y - 20, x, y - 20, x, y + 10);
    triangle(x + 50, y - 20, x, y - 20, x, y + 10);
    triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
    triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);



function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
}

/**
 * Draws a star at the given coordinates.
 * @param {number} x 
 * @param {number} y 
 */
function star(x, y) {
}