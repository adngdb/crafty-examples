/**
 * Crafty Examples
 * >> Isometric Map example code
 *
 * This code provides an example of how to use the Crafty.js game library
 * to create an isometric map.
 *
 * @author Adrian Gaudebert - adrian@gaudebert.fr
 * @version 1.0
 */
$(document).ready(function() {

    var width = 800,
        height = 600,
        spriteSize = 64,
        iso = Crafty.isometric.init(spriteSize);

    // Create the Crafty context, with a frame rate of 50 ips, and a window size of 130px * 130px
    Crafty.init(50, width, height);

    /*
     * Declare sprite resources
     */
    Crafty.sprite(spriteSize, "../resources/images/map.png", {
        grass1: [0, 0, 1, 1],
        grass2: [1, 0, 1, 1],
        grass3: [2, 0, 1, 1],
        grass4: [3, 0, 1, 1],
    });

    for (var y = 0; y < height / spriteSize * 3; y++) {
        for (var x = 0; x < width / spriteSize - 1; x++) {
            var tile = Crafty.e('2D, DOM, grass1, mouse')
                .areaMap([32,16], [64,32], [32,48], [0,32])
                .bind("click", function() {
                    this.destroy();
                });
            iso.place(x, y, 0, tile);
        }
    }
});
