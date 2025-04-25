let rainDrops = [];
let img;
let isRaining = true;

function preload() {
    img = loadImage('storm sky.jpeg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    const button = select('#toggleButton');
    button.mousePressed(toggleRain);
}

function draw() {
    background(img);

    if (isRaining) {
        if (frameCount % 5 === 0) {
            rainDrops = [];
        }

        let numRaindrops = 5;
        for (let i = 0; i < numRaindrops; i++) {
            rainDrops.push(new RainDrop(random(width), 0));
        }

        for (let i = 0; i < rainDrops.length; i++) {
            rainDrops[i].update();
            rainDrops[i].display();
        }
    }

    frameCount++;
}

class RainDrop {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, random(5, 10));
        this.length = random(1000, 2000);
    }

    update() {
        this.position.add(this.velocity);

        if (this.position.y > height) {
            this.position.y = -this.length;
        }
    }

    display() {
        fill(138, 185, 255, 150);
        rect(this.position.x, this.position.y, 2, this.length);
    }
}

function toggleRain() {
    isRaining = !isRaining;
    const button = select('#toggleButton');
    if (isRaining) {
        button.html('Stop Rain');
    } else {
        button.html('Start Rain');
    }
}
