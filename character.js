// This is the character class
class Character {

    // This is the constructor for the character
    constructor(game) {

        // Properties
        this.game = game;
        this.speed = 50;
        this.x = 0;
        this.y = 0;
        this.index = 6;

        // Get the spriteshhett
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/MaleCasual.png");
        this.animator = new Animator(this.spritesheet, 0, 32, 32, 32, 7, 0.2);

        // Get the animations
        this.animations = [];
        this.getAnimations();
    };

    // This method will get all the animations.
    getAnimations() {

        // Walking right animation
        this.animations[0] =  new Animator(this.spritesheet, 0, 32, 32, 32, 7, 0.2);

        // Walking left animation
        this.animations[1] =  new Animator(this.spritesheet, 0, 128, 32, 32, 7, 0.2);

        // Walking back animation
        this.animations[2] =  new Animator(this.spritesheet, 0, 64, 32, 32, 7, 0.2);

        // Walking front animation
        this.animations[3] =  new Animator(this.spritesheet, 0, 96, 32, 32, 7, 0.2);

        // Idle left
        this.animations[4] =  new Animator(this.spritesheet, 96, 0, 32, 32, 1, 100000);

        // Idle right
        this.animations[5] =  new Animator(this.spritesheet, 64, 0, 32, 32, 1, 100000);

        // Idle front
        this.animations[6] =  new Animator(this.spritesheet, 0, 0, 32, 32, 1, 100000);

        // Idle back
        this.animations[7] =  new Animator(this.spritesheet, 32, 0, 32, 32, 1, 100000);

    }

    // This is the update method called on each frame.
    update() {


        // Update based on player movement.
        if (this.game.keys["d"] || this.game.keys["D"]) {
            this.x += this.speed * this.game.clockTick;
            this.index = 0;
        } else if (this.game.keys["a"] || this.game.keys["A"]) {
            this.x -= this.speed * this.game.clockTick;
            this.index = 1;
        } else if (this.game.keys["w"] || this.game.keys["W"]) {
            this.y -= this.speed * this.game.clockTick;
            this.index = 2;
        } else if (this.game.keys["s"] || this.game.keys["S"]) {
            this.y += this.speed * this.game.clockTick;
            this.index = 3;
        } else {

            // If the player is not pressing a key
            if(this.index == 0) {
                this.index = 5;
            } else if(this.index == 1) {
                this.index = 4;
            } else if(this.index == 2) {
                this.index = 7;
            } else if(this.index == 3) {
                this.index = 6;
            } 
        }
    };

    // This method will draw the Character.
    draw(ctx) {

        // Draw the animations
        this.animations[this.index].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}
