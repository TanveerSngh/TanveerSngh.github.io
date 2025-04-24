var score = 0;
var highscore = 5;
var playername = "AAA";
var highscorer = "BBB";
var playernameinput;
function setup(){
    createCanvas(650, 280);
    if( getItem('highscore') > highscore    ){
        highscore = getItem('highscore');
        highscorer = getItem('highscorer');
    }
    var resetButton = createButton('Reset All Scores');
    resetButton.mousePressed(function(){
        highscore = 5;
        score = 0;
        highscorer = "BBB";
        clearStorage();
    });
    playernameinput = createInput('ART');
}

function draw(){
    background('pink');
    ellipse(100,100, 100, 100);
    text(score, 20,20);
    text(playernameinput.value(), 20, 30);
    text(highscore, width-20, 20);
    text(highscorer, width-20, 30);
}

function mousePressed(){
    if( dist(mouseX, mouseY, 100, 100) < 50 ){
        ++score;
        if(score > highscore){
            highscore = score;
            highscorer = playernameinput.value();
            storeItem("highscore", highscore);
            storeItem("highscorer", playername);
        }
    }
}