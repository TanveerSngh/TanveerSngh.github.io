

function setup(){
    createCanvas (windowWidth,windowHeight)
}

function draw(){
    background(100, 0, 78, 10);

    fill('black')
     if(mouseX < 200){
        rect(mouseX,mouseY,100,10,23);
        }else{
            rect(mouseX, mouseY, 10,50,4);
        }
}