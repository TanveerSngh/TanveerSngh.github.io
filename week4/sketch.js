var redBrick = {
    x: 0,
    y: 0,
    w: 62,
    h: 50,
    xSpeed: 10,
    ySpeed: 6,
    colour: 'green',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var blueBrick = {
    x: 50,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 30,
    ySpeed: 0,
    colour: 'red',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};
// redBrick.x++ returns current value then increments
// ++redBrick.x increments value and then returns   

function setup(){
    createCanvas(720,280);
}

function draw(){
    background('grey'); 
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
}