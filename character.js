// This is the character class
class Character {

    // This is the constructor for the character
    constructor(game) {

        // Set the game engine
        this.game = game;
        this.speed = 50;
        this.rightX = 0;
        this.leftX = 562
        this.backY = 562
        this.frontY = 32;

        // Get the spriteshhett
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/MaleCasual.png");

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

    }

    // This is the update method called on each frame.
    update() {

        // Update the x or y value
        this.rightX += this.speed * this.game.clockTick;
        this.leftX -= this.speed * this.game.clockTick;
        this.backY -= this.speed * this.game.clockTick;
        this.frontY += this.speed * this.game.clockTick;

        // Reset the x or values
        if(this.rightX > 562) {
            this.rightX = 0;
        }

        if(this.leftX < 0) {
            this.leftX = 562;
        }

        if(this.backY < 0) {
            this.backY = 562;
        }

        if(this.frontY > 562) {
            this.frontY = 32;
        }

    };

    // This method will draw the Character.
    draw(ctx) {

        // Draw the animations
        this.animations[0].drawFrame(this.game.clockTick, ctx, this.rightX, 0);
        this.animations[1].drawFrame(this.game.clockTick, ctx, this.leftX, 32);
        this.animations[2].drawFrame(this.game.clockTick, ctx, 0, this.backY);
        this.animations[3].drawFrame(this.game.clockTick, ctx, 32, this.frontY);
    };
}
