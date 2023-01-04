// This is the character class
class Character {

    // This is the constructor for the character
    constructor(game) {

        // Set the game engine
        this.game = game;

        // Get the spriteshhett
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/MaleCasual.png");

        // Set the animator
        //this.animator = new Animator(this.spritesheet, 32, 32, 32, 32, 4, 0.2);

        // Get the animations
        this.animations = [];
        this.getAnimations();
    };

    // This method will get all the animations.
    getAnimations() {

        // Spinning animation
        this.animations[0] =  new Animator(this.spritesheet, 0, 0, 32, 32, 4, 0.2);

        // Walking right animation
        this.animations[1] =  new Animator(this.spritesheet, 0, 32, 32, 32, 7, 0.2);

        // Walking back animation
        this.animations[2] =  new Animator(this.spritesheet, 0, 64, 32, 32, 7, 0.2);

        // Walking front animation
        this.animations[3] =  new Animator(this.spritesheet, 0, 96, 32, 32, 7, 0.2);

        // Walking left animation
        this.animations[4] =  new Animator(this.spritesheet, 0, 128, 32, 32, 7, 0.2);
    }

    // This is the update method called on each frame.
    update() {

    };

    // This method will draw teh Character.
    draw(ctx) {

        // Properties
        const x = 25;
        var y = 25;

        // Draw the animations
        for(var i = 0; i < this.animations.length; i++) {
            this.animations[i].drawFrame(this.game.clockTick, ctx, x, y);
            y += 32;
        }
    };

}