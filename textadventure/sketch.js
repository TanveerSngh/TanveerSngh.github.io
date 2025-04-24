let input, button, speedSlider, sizeSlider, colorPicker;
let animationMode = "none";
let textToAnimate = "";
let chars = [];
let angleOffset = 0;
let bounceData = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  input = select("#textInput");
  button = select("#submitButton");
  speedSlider = select("#speedSlider");
  sizeSlider = select("#sizeSlider");
  colorPicker = select("#colorPicker");

  select("#waveButton").mousePressed(() => setAnimation("wave"));
  select("#fillScreenButton").mousePressed(() => setAnimation("fill"));
  select("#bounceButton").mousePressed(() => setAnimation("bounce"));
  select("#fullscreenButton").mousePressed(() => fullscreen(!fullscreen()));
  select("#clearButton").mousePressed(() => clearAnimation());

  button.mousePressed(() => {
    textToAnimate = input.value();
    initializeCharacters();
  });

  input.input(() => {
    textToAnimate = input.value();
    initializeCharacters();
  });
}

function draw() {
  background(240);
  fill(colorPicker.value());
  textSize(sizeSlider.value());
  let speed = float(speedSlider.value());

  if (animationMode === "wave") {
    drawWave(speed);
  } else if (animationMode === "fill") {
    drawFillScreen();
  } else if (animationMode === "bounce") {
    drawBounce(speed);
  } else {
    text(textToAnimate, width / 2, height / 2);
  }
}

function setAnimation(mode) {
  animationMode = mode;
  initializeCharacters();
}

function clearAnimation() {
  animationMode = "none";
  redraw();
}

function initializeCharacters() {
  chars = textToAnimate.split("");
  bounceData = [];
  for (let i = 0; i < chars.length; i++) {
    bounceData.push({
      x: random(width),
      y: random(height),
      vx: random(-3, 3),
      vy: random(-3, 3),
    });
  }
}

function drawWave(speed) {
  angleOffset += 0.05 * speed;
  let fontSize = sizeSlider.value();
  let spacing = fontSize + 10;
  let startX = (width - spacing * chars.length) / 2;

  for (let i = 0; i < chars.length; i++) {
    let x = startX + i * spacing;
    let y = height / 2 + sin(angleOffset + i * 0.5) * 50;
    text(chars[i], x, y);
  }
}

function drawFillScreen() {
  let fontSize = sizeSlider.value();
  let cols = floor(width / fontSize);
  let rows = floor(height / fontSize);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let index = (i + j * cols) % chars.length;
      text(chars[index], i * fontSize + fontSize / 2, j * fontSize + fontSize / 2);
    }
  }
}

function drawBounce(speed) {
  let fontSize = sizeSlider.value();
  for (let i = 0; i < chars.length; i++) {
    let b = bounceData[i];
    b.x += b.vx * speed;
    b.y += b.vy * speed;

    if (b.x < 0 || b.x > width) b.vx *= -1;
    if (b.y < 0 || b.y > height) b.vy *= -1;

    text(chars[i], b.x, b.y);
  }
}

function keyPressed() {
  if (keyCode === ESCAPE && fullscreen()) {
    fullscreen(false);
  }
}
