class Particle {
    constructor(x,y){
        this.x = x + 25; 
        this.y = y + 25; 
        this.radius = Math.random() * 20 + 1;                       // size of particles
        this.opacity = 1;                                           // to slowly fade particles
        this.directionX = Math.random() * 1 - 0.5;                  // random horizontal speed that the particles disappear
        this.directionY = Math.random() * 1 - 0.5;                  // ^ same but vertical 
    }
    draw(){
        ctx3.fillStyle = 'rgba(150,150,150,' + this.opacity + ')';                                     // last fourth value is for alpha opacity
        ctx3.beginPath();                                                           // pencil touching down on canvas to start drawing
        ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2);                      // draws a circle
        ctx3.fill();                                                                // fill path with color
        ctx3.closePath();
    }
    update(){                                                                       // will run every frame and move partc along x and y axis based on values in direction x and y values 
        this.x += this.directionX;
        this.y += this.directionY;
        if (this.opacity > 0.1){                                                    // need to make this an if statement because opacity can go negative and cause error
            this.opacity -= 0.9;
        }
        if (this.radius > 0.15){                                                    // for every frame of animation reduce radius by 0.14
            this.radius -= 0.14;
        }
        
    }
    drawRipple(){
        ctx1.strokeStyle = 'rgba(255, 255, 255,' + this.opacity + ')';                                     // last fourth value is for alpha opacity
        ctx1.beginPath();                                                           // pencil touching down on canvas to start drawing
        ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2);                      // draws a circle
        ctx1.stroke();                                                                // fill path with color
        ctx1.closePath();
    }
    ripple(){
        if (this.radius < 50){
            this.radius += 0.5; 
            this.x -= 0.03;
            this.y -= 0.03;
        }
        if (this.opacity > 0){
            this.opacity -= 0.02;
        }
    }
}

// dust
function handleParticles(){ 
    for (let i = 0; i < particlesArray.length; i++){ 
        particlesArray[i].update();
        particlesArray[i].draw();   
    }
    if (particlesArray.length > maxParticles){
        for (let i = 0; i <30; i++){
            particlesArray.pop();
        }
    }
    if (((keys['ArrowLeft'] || keys['ArrowUp'] || keys['ArrowRight'] || keys['ArrowDown'] )) && frogger.y > 250 && particlesArray.length < maxParticles + 10){
        for (let i = 0; i < 10; i++){
            particlesArray.unshift(new Particle(frogger.x, frogger.y));
        }
    }
}

// water ripples
function handleRipples(){
    for (let i = 0; i < ripplesArray.length; i++){ 
        ripplesArray[i].ripple();
        ripplesArray[i].drawRipple();   
    }
    if (ripplesArray.length > 20){
        for (let i = 0; i <5; i++){
            ripplesArray.pop();
        }
    }
    if (((keys['ArrowLeft'] || keys['ArrowUp'] || keys['ArrowRight'] || keys['ArrowDown'] )) && frogger.y < 250 && frogger.y > 100){
        for (let i = 0; i < 20; i++){
            ripplesArray.unshift(new Particle(frogger.x, frogger.y));                                     //unshift takes whatever we pass to it and places it in beginning of array
        }
    }
}