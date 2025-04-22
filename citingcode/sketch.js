function setup() {
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);
  strokeWeight(5);
  noFill();
  stroke(32, 8, 64);
}

function draw() {
  background(250, 180, 200);

  orbitControl();

  drawCubeSphere(0, 0, 0);    
  drawCubeSphere(800, 0, 0);  
  drawCubeSphere(-800, 0, 0); 
  drawCubeSphere(0, 800, 0); 
  drawCubeSphere(0, -800, 0); 
  drawCubeSphere(0, 0, 800); 
  drawCubeSphere(0, 0, -800); 
}

function drawCubeSphere(xOffset, yOffset, zOffset) {
  push();
  translate(xOffset, yOffset, zOffset);

  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();
      rotateZ(zAngle);
      rotateX(xAngle);
      translate(0, 400, 0);
      box();
      pop();
    }
  }

  pop();
}