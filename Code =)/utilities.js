function animate(){
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
    handleRipples();
    ctx2.drawImage(background_lvl2, 0, 0);
    handleParticles();
    frogger.draw();
    frogger.update();

    handleObstacles();
    handleScoreBoard();
    ctx4.drawImage(grass, 0, 0);
    frame++;
    requestAnimationFrame(animate);
}
animate();

// event listeners
window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.code] = true; 
    if (keys['ArrowLeft'] || keys['ArrowRight'] || keys['ArrowUp'] || keys['ArrowDown']) {

        frogger.jump();
    }
});

window.addEventListener('keyup', function(e){
    delete keys[e.code];
    frogger.moving = false;
    frogger.frameX = 0;
});

function scored(){
    score++; // increases score by 1
    gameSpeed += 0.05; // up the difficulty 
    frogger.x = canvas.width/2 - frogger.width/2; // reseting frog to its spawn point aka the middle
    frogger.y = canvas.height - frogger.height - 40; // resets frog at the bottom 
}

function handleScoreBoard(){
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Score', 265, 15);
    ctx4.font = '60px Verdana';
    ctx4.fillText(score, 270, 65);
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Collisions: ' + collisionsCount, 10, 175);
    ctx4.strokeText('Game Speed: ' + gameSpeed.toFixed(1), 10, 195);
}

// collision detection between frog and cars
function collision(first, second){
    return !(  first.x > second.x + second.width ||  // FROG HAS TO BE GREATER THAN THE CARS + THEIR WIDTH or else they would be colliding
                first.x + first.width < second.x ||
                first.y > second.y + second.height ||
                first.y + first.height < second.y);
}

function resetGame(){
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    collisionsCount++;
    gameSpeed = 1;
}