/* Engine.js
 * This file provides the game loop functionality (update entities and render),
 * draws the initial game board on the screen, and then calls the update and
 * render methods on your player and enemy objects (defined in your app.js).
 *
 * A game engine works by drawing the entire game screen over and over, kind of
 * like a flipbook you may have created as a kid. When your player moves across
 * the screen, it may look like just that image/character is moving or being
 * drawn but that is not the case. What's really happening is the entire "scene"
 * is being drawn over and over, presenting the illusion of animation.
 *
 * This engine is available globally via the Engine variable and it also makes
 * the canvas' context (ctx) object globally available to make writing app.js
 * a little simpler to work with.
 */

var Engine = (function(global) {
    /* Predefine the variables we'll be using within this scope,
     * create the canvas element, grab the 2D context for that canvas
     * set the canvas elements height/width and add it to the DOM.
     */
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 505;
    canvas.height = 606;
    canvas.squareCenterX= canvas.width/2.5;
    canvas.squareCenterY = canvas.height/2.75;
    doc.body.appendChild(canvas);

    /* This function serves as the kickoff point for the game loop itself
     * and handles properly calling the update and render methods.
     */
    function main() {
        /* Get our time delta information which is required if your game
         * requires smooth animation. Because everyone's computer processes
         * instructions at different speeds we need a constant value that
         * would be the same for everyone (regardless of how fast their
         * computer is) - hurray time!
         */
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        /* Call our update/render functions, pass along the time delta to
         * our update function since it may be used for smooth animation.
         */
        update(dt);
        render();

        /* Set our lastTime variable which is used to determine the time delta
         * for the next time this function is called.
         */
        lastTime = now;

        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        win.requestAnimationFrame(main);
    }

    /* This function does some initial setup that should only occur once,
     * particularly setting the lastTime variable that is required for the
     * game loop.
     */
    function init() {
        reset();
        lastTime = Date.now();
        main();
    }

    /* This function is called by main (our game loop) and itself calls all
     * of the functions which may need to update entity's data. Based on how
     * you implement your collision detection (when two entities occupy the
     * same space, for instance when your character should die), you may find
     * the need to add an additional function call here. For now, we've left
     * it commented out - you may or may not want to implement this
     * functionality this way (you could just implement collision detection
     * on the entities themselves within your app.js file).
     */
    function update(dt) {
        updateEntities(dt);
        // checkCollisions();
    }

    /* This is called by the update function  and loops through all of the
     * objects within your allEnemies array as defined in app.js and calls
     * their update() methods. It will then call the update function for your
     * player object. These update methods should focus purely on updating
     * the data/properties related to  the object. Do your drawing in your
     * render methods.
     */
    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
    }

    /* This function initially draws the "game level", it will then call
     * the renderEntities function. Remember, this function is called every
     * game tick (or loop of the game engine) because that's how games work -
     * they are flipbooks creating the illusion of animation but in reality
     * they are just drawing the entire screen over and over.
     */
    function render() {
        /* This array holds the relative URL to the image used
         * for that particular row of the game level.
         */



        // var rowImages = [
        //         'images/water-block.png',   // Top row is water
        //         'images/stone-block.png',   // Row 1 of 3 of stone
        //         'images/stone-block.png',   // Row 2 of 3 of stone
        //         'images/stone-block.png',   // Row 3 of 3 of stone
        //         'images/grass-block.png',   // Row 1 of 2 of grass
        //         'images/dirt-block.png'    // Row 2 of 2 of grass
        //     ],
        //     numRows = 6,
        //     numCols = 5,
        //     row, col;
        //     // var rowImages = [
        //     //     'images/water-block.png',   // Top row is water
        //     //     'images/stone-block.png',   // Row 1 of 3 of stone
        //     //     'images/stone-block.png',   // Row 2 of 3 of stone
        //     //     'images/stone-block.png',   // Row 3 of 3 of stone
        //     //     'images/grass-block.png',   // Row 1 of 2 of grass
        //     //     'images/grass-block.png'    // Row 2 of 2 of grass
        //     // ],
        //     // numRows = 6,
        //     // numCols = 5,
        //     // row, col;

        // /* Loop through the number of rows and columns we've defined above
        //  * and, using the rowImages array, draw the correct image for that
        //  * portion of the "grid"
        //  */
        // for (row = 0; row < numRows; row++) {
        //     for (col = 0; col < numCols; col++) {
        //         /* The drawImage function of the canvas' context element
        //          * requires 3 parameters: the image to draw, the x coordinate
        //          * to start drawing and the y coordinate to start drawing.
        //          * We're using our Resources helpers to refer to our images
        //          * so that we get the benefits of caching these images, since
        //          * we're using them over and over.
        //          */
                
        //         ctx.drawImage(Resources.get(rowImages[row]), col * canvas.height/6, row * canvas.width/6);
                
        //         //Starting Menu House Scene
        //         ctx.drawImage(Resources.get('images/Window Tall.png'),  3 * canvas.height/6, 2 * canvas.height/6);
        //         ctx.drawImage(Resources.get('images/Door Tall Closed.png'),  2 * canvas.height/6, 2.3 * canvas.height/6);
        //         ctx.drawImage(Resources.get('images/Window Tall.png'),  1 * canvas.height/6, 2 * canvas.height/6);
                
        //         ctx.drawImage(Resources.get('images/Roof North East.png'),  3 * canvas.height/6, 0.5 * canvas.height/6);
        //         ctx.drawImage(Resources.get('images/Roof North.png'),  2 * canvas.height/6, 0.5 * canvas.height/6);
        //         ctx.drawImage(Resources.get('images/Roof North West.png'),  1 * canvas.height/6, 0.5 * canvas.height/6);
                
        //         ctx.drawImage(Resources.get('images/Roof South East.png'),  3 * canvas.height/6, 1.2 * canvas.height/6);
        //         ctx.drawImage(Resources.get('images/Roof South.png'),  2 * canvas.height/6, 1.3 * canvas.height/6);
        //         ctx.drawImage(Resources.get('images/Roof South West.png'),  1 * canvas.height/6, 1.2 * canvas.height/6);

        //         ctx.drawImage(Resources.get('images/Shadow South.png'),  3 * canvas.height/6, 2.1 * canvas.height/6);
        //         ctx.drawImage(Resources.get('images/Shadow South.png'),  2 * canvas.height/6, 2.1 * canvas.height/6);
        //         ctx.drawImage(Resources.get('images/Shadow South.png'),  1 * canvas.height/6, 2.1 * canvas.height/6);

        //         ctx.drawImage(Resources.get('images/Tree Short.png'),  3 * canvas.height/6, 3.1 * canvas.height/6);
        //         ctx.drawImage(Resources.get('images/Ramp South.png'),  2 * canvas.height/6, 3.3 * canvas.height/6);
        //         ctx.drawImage(Resources.get('images/Tree Short.png'),  1 * canvas.height/6, 3.1 * canvas.height/6);
        //     }
        
        // }

        renderScene();
        renderEntities();
    }

    /*This function is called by the render function and is called each game tick.
     *It's purpose is to then call on the scene render function to draw the 
     *background image to create the different levels and menus in the game within
     *app.js.
     */
     function renderScene() {
        scene.render();
     }

    /* This function is called by the render function and is called on each game
     * tick. It's purpose is to then call the render functions you have defined
     * on your enemy and player entities within app.js
     */
    function renderEntities() {
        /* Loop through all of the objects within the allEnemies array and call
         * the render function you have defined.
         */
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });

        player.render();
    }

    /* This function does nothing but it could have been a good place to
     * handle game reset states - maybe a new game menu or a game over screen
     * those sorts of things. It's only called once by the init() method.
     */
    function reset() {
        // noop
    }

    /* Go ahead and load all of the images we know we're going to need to
     * draw our game level. Then set init as the callback method, so that when
     * all of these images are properly loaded our game will start.
     */
    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/dirt-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png',
        'images/Roof East.png',
        'images/Roof North East.png',
        'images/Roof North.png',
        'images/Roof North West.png',
        'images/Roof South.png',
        'images/Roof South East.png',
        'images/Roof South West.png',
        'images/Roof West.png',
        'images/Wood Block.png',
        'images/Window Tall.png',
        'images/Wall Block.png',
        'images/Wall Block Tall.png',
        'images/Door Tall Closed.png',
        'images/Door Tall Open.png',
        'images/Gem Orange.png',
        'images/Gem Green.png',
        'images/Gem Blue.png',
        'images/Heart.png',
        'images/Key.png',
        'images/Rock.png',
        'images/Selector.png',
        'images/Star.png',
        'images/Chest Open.png',
        'images/Chest Lid.png',
        'images/Chest Closed.png',
        'images/Shadow South.png',
        'images/Ramp South.png',
        'images/Tree Short.png',
        'images/Tree Tall.png',
        'images/Tree Ugly.png',
        'images/Brown Block.png',
        'images/Window Front.png',
        'images/SpeechBubble.png',
        'images/Heart.png'

    ]);
    Resources.onReady(init);

    /* Assign the canvas' context object to the global variable (the window
     * object when run in a browser) so that developer's can use it more easily
     * from within their app.js files.
     */
    global.ctx = ctx;
    global.canvas = canvas;


})(this);
