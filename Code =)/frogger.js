class Frogger { // every class needs to have a constructor,

    constructor(){ // it runs only once when the object created by class is initialized and its only job is to create new blank object and assign it values and properties as declared 
        
        this.spriteWidth = 250; //sprite sheet is 1000 pixels high and it has 4 rows
        this.spriteHeight = 250; // sprite is the name of our frog :)
        this.width = this.spriteWidth/5; // dividing by 5 because the sprite is huge
        this.height = this.spriteHeight/5;
        this.x = canvas.width/2 - this.width/2; // these x and y corridantes are going to be where the sprite spawns at the start of the game
        this.y = canvas.height - this.height - 40;
        this.moving = false; // this prevents the frog from moving too fast across the screen when holding the keys
        this.frameX = 0;
        this.frameY = 0;
    }
    update(){
    
        if (keys['ArrowUp']){ // up arrow key
            if (this.moving === false){
                this.y -= grid; // frog will jump 80 px up when press up
                this.moving = true;
                this.frameX = 1;
                this.frameY = 0;
            } 
        }
        if (keys['ArrowDown']){ // down arrow key
            if (this.moving === false && this.y < canvas.height - this.height * 2){  // frog will jump 80 px down when press down key
                this.y += grid;    
                this.moving = true;
                this.frameY = 3;
            }
        }
        if (keys['ArrowLeft']){ // left arrow key
            if (this.moving === false && this.x > this.width){
                this.x -= grid; // 
                this.moving = true;
                this.frameY = 2;
            }   
        }
        if (keys['ArrowRight']){ // right arrow key
            if (this.moving === false && this.x < canvas.width - this.width * 2){ //move to the right 80px to the right
            this.x += grid; // 
            this.moving = true;
            this.frameY = 1;
        }   
    }
    if (this.y < 0) scored();
    
}
    draw(){ //using canvas 3 because it has our frog in it
        ctx3.drawImage(froggerSprite, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x -25, this.y - 25, this.width * 2, this.height * 2);
    }
    jump(){
        if (this.moving === false) this.frameX = 1;
        else if (this.frameX === 1) this.frameX = 0;

    }
}

const frogger = new Frogger();
// makes the constructor create a new blank object and fill it with the values in blueprint on lines 5-13