/**
 * Crafty Examples
 * >> Animation example code
 *
 * This code provides an example of how to use the Crafty.js game library
 * to create an eternally animated element.
 *
 * @author Adrian Gaudebert - adrian@gaudebert.fr
 * @version 1.0
 */
$(document).ready(function() {

    // Create the Crafty context, with a frame rate of 50 ips, and a window size of 130px * 130px
    Crafty.init(50, 130, 130);

    /*
     * Declare a sprite resource
     * Each part of the sprite is 128px * 128px
     * The "mino" part of the sprite begins in 4 * 128px / 0 * 128px and has a size of 1 * 128px / 1 * 128px
     */
    Crafty.sprite(128, "../resources/images/minotaur.png", {
        mino: [4, 0, 1, 1],
    });

    // Declare a Component called "animation"
    Crafty.c("animation", {
        init: function() {
            // If the "animate" component is not added to this one, then add it
            if (!this.has("animate"))
            {
                this.addComponent("animate");
            }

            // Bind the "enterframe" event, called every time the frame is displayed
            this.bind("enterframe", function() {
                // If the animation is not playing anymore, then reload it
                if (!this.isPlaying("anim"))
                {
                    this.sprite(4, 0, 1, 1);        // Go back to the first sprite of the animation
                    this.animate("anim", 20);       // Launch the animation, changing sprite every 20ms
                }
            });
        },
    });

    // Create a new entity which is a mino (previously declared sprite),
    // an animation (previously declared component), a 2D and a DOM element.
    var mino = Crafty.e("2D, DOM, mino, animation")
        .attr({x: 0, y: 0, w: 128, h: 128}) // Set the position
        .animate("anim", 5, 0, 11);         // Create the "anim" animation,
                                            // starting from coordinate x=5 and going to x=11, with y=0
});
