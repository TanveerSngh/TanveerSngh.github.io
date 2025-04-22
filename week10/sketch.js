// load image
// load a video
// load a sound
// playback rate 
// volume 
// many kitties
var kitten;
var kindle;
var meow;
var numberofkitties = 12;
function setup(){
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    kitten = loadImage('kitten.jpeg');
    kindle = createVideo('kittens.mp4');
    kindle.hide();
    kindle.volume(0);
    kindle.play();
    meow = createAudio('meow.wav');
    meow.speed(10);
}

function draw(){
    background('green');
    imageMode(CORNER);
    for(var x = 0; x < numberofkitties; x++){
        for(var y = 0; y < numberofkitties; y++){
            push();
            translate(x * width/numberofkitties, y * height/numberofkitties);
            rotate(frameCount/50);
            image(kindle, 0, 0, 200, 200);
            pop();
        }
    }
    imageMode(CENTER);
    push();
    translate(mouseX, mouseY);
    rotate(frameCount/60);
    image(kitten, 0, 0);
    pop();
}

function mousePressed(){
    kindle.play();
    meow.speed(10);
    meow.play();
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}