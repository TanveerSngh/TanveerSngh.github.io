
setInterval(function() {
    alert("Why Do You Keep Stopping?");
}, 10000);  


setInterval(function() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}, 3000);  



document.addEventListener('mousemove', function(e) {
    let trailElement = document.createElement('div');
    trailElement.style.position = 'absolute';
    trailElement.style.top = (e.clientY + 10) + 'px';
    trailElement.style.left = (e.clientX + 10) + 'px';
    trailElement.style.width = '100px';
    trailElement.style.height = '100px';
    trailElement.style.backgroundColor = 'black';
    trailElement.style.borderRadius = '50%';
    document.body.appendChild(trailElement);
    
    setTimeout(function() {
        trailElement.remove(); 
    }, 200);  
});


let sounds = [
    "peter laugh.mp3",  
    "ally has been slain.mp3",
    "chickenjockey.mp3"
];


function playRandomSound() {
    let randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    let audio = new Audio(randomSound);
    audio.play();
}


setInterval(playRandomSound, Math.random() * (6000 - 3000) + 3000);  


function toggleVideoVisibility() {
    let videoContainer = document.getElementById('videoContainer');
    let randomShowTime = Math.random() * 5000 + 2000;  
    let randomHideTime = Math.random() * 5000 + 2000; 

    setTimeout(function() {

        videoContainer.style.display = 'block';
        videoContainer.style.transition = 'all 0.5s'; 
        let randomX = Math.random() * (window.innerWidth - videoContainer.offsetWidth);
        let randomY = Math.random() * (window.innerHeight - videoContainer.offsetHeight);
        
        videoContainer.style.left = randomX + 'px';
        videoContainer.style.top = randomY + 'px';
        
        let videoElement = document.getElementById('videoElement');
        videoElement.play();

        setTimeout(function() {
            videoContainer.style.display = 'none';  
        }, 10000);  

    }, randomShowTime); 


    setTimeout(function() {
        videoContainer.style.display = 'none'; 
    }, randomHideTime);  
}

setInterval(toggleVideoVisibility, 15000);  

function changeCalculatorSize() {
    let calculator = document.querySelector('.calculator');
    
    let randomWidth = Math.floor(Math.random() * (600 - 200 + 1)) + 200;  

    let randomHeight = Math.floor(Math.random() * (400 - 150 + 1)) + 150;  

    calculator.style.width = randomWidth + 'px';
    calculator.style.height = randomHeight + 'px';
}


setInterval(changeCalculatorSize, 5000);  
