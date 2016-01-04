//create scenes class to manage playing, menu and win loss scenes **********************************************
//create scene class
var Scenes = function(order) {
  //Variables that apply to the different scenes in the game, start menu, pause etc...
  this.order = order;
  this.xMove = canvas.height/6;
  this.yMove = canvas.height/6;
  this.images = [];


};

//create draw player area function for main play background
Scenes.prototype.drawPlayArea = function() {
  var rowImages = [
                'images/water-block.png',   // Top row is water
                'images/stone-block.png',   // Row 1 of 3 of stone
                'images/stone-block.png',   // Row 2 of 3 of stone
                'images/stone-block.png',   // Row 3 of 3 of stone
                'images/grass-block.png',   // Row 1 of 2 of grass
                'images/dirt-block.png'    // Row 2 of 2 of grass
            ],
            numRows = 6,
            numCols = 5,
            row, col;
  for (row = 0; row < numRows; row++) {
      for (col = 0; col < numCols; col++) {
         ctx.globalAlpha = 1;
         ctx.drawImage(Resources.get(rowImages[row]), col * canvas.height/6, row * canvas.width/6);
       }
  }

};

//create draw house function to manage drawing the complete house
Scenes.prototype.drawHouse = function () {


    ctx.globalAlpha = 1;
    ctx.drawImage(Resources.get('images/Window Tall.png'),  3 * this.xMove, 2 * this.yMove);
    ctx.drawImage(Resources.get('images/Door Tall Closed.png'),  2 * this.xMove, 2.3 * this.yMove);
    ctx.drawImage(Resources.get('images/Window Tall.png'),  1 * this.xMove, 2 * this.yMove);
    
    ctx.drawImage(Resources.get('images/Roof North East.png'),  3 * this.xMove, 0.5 * this.yMove);
    ctx.drawImage(Resources.get('images/Roof North.png'),  2 * this.xMove, 0.5 * this.yMove);
    ctx.drawImage(Resources.get('images/Roof North West.png'),  1 * this.xMove, 0.5 * this.yMove);
    
    ctx.drawImage(Resources.get('images/Roof South East.png'),  3 * this.xMove, 1.2 * this.yMove);
    ctx.drawImage(Resources.get('images/Roof South.png'),  2 * this.xMove, 1.3 * this.yMove);
    ctx.drawImage(Resources.get('images/Roof South West.png'),  1 * this.xMove, 1.2 * this.yMove);

    ctx.drawImage(Resources.get('images/Shadow South.png'),  3 * this.xMove, 2.1 * this.yMove);
    ctx.drawImage(Resources.get('images/Shadow South.png'),  2 * this.xMove, 2.1 * this.yMove);
    ctx.drawImage(Resources.get('images/Shadow South.png'),  1 * this.xMove, 2.1 * this.yMove);

    ctx.drawImage(Resources.get('images/Tree Short.png'),  3 * this.xMove, 3.1 * this.yMove);
    ctx.drawImage(Resources.get('images/Ramp South.png'),  2 * this.xMove, 3.3 * this.yMove);
    ctx.drawImage(Resources.get('images/Tree Short.png'),  1 * this.xMove, 3.1 * this.yMove);

};

//create shadow screen for start of game 
Scenes.prototype.drawShadow = function () {
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = 'gray';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

};

//draw program start box with instructions
Scenes.prototype.drawStartMenu = function () {
//variables for the top of the box
var xTopLeftCorner = canvas.width/2 - 101;
var yTopLeftCorner = canvas.height/2 - 50;
var bezTL = 10;

var xTopRightCorner = canvas.width/2 + 101;
var yTopRightCorner = canvas.height/2 - 50;
var bezTR = 10;

//variables for the bottom of box
var xBottomLeftCorner = canvas.width/2 - 101;
var yBottomLeftCorner = canvas.height/2 + 100;
var bezBL = 10;

var xBottomRightCorner = canvas.width/2 + 101;
var yBottomRightCorner = canvas.height/2 + 100;
var bezBR = 10;

//draw box commands
ctx.globalAlpha = 0.75;
ctx.strokeStyle = 'black';
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.moveTo(xTopLeftCorner, yTopLeftCorner);
ctx.lineTo(xTopRightCorner, yTopRightCorner);
ctx.quadraticCurveTo(xTopRightCorner + bezTR , yTopRightCorner, xTopRightCorner + bezTR, yTopRightCorner + bezTR);
ctx.lineTo(xBottomRightCorner + bezTR, yBottomRightCorner);
ctx.quadraticCurveTo(xBottomRightCorner + bezTR, yBottomRightCorner + bezBR, xBottomRightCorner, yBottomRightCorner + bezBR);
ctx.lineTo(xBottomLeftCorner, yBottomLeftCorner + bezBR);
ctx.quadraticCurveTo(xBottomLeftCorner - bezBL, yBottomLeftCorner + bezBR, xBottomLeftCorner - bezBL, yBottomLeftCorner);
ctx.lineTo(xTopLeftCorner - bezTL, yTopLeftCorner + bezTL);
ctx.quadraticCurveTo(xTopLeftCorner - bezTL, yTopLeftCorner, xTopLeftCorner, yTopLeftCorner);
ctx.stroke();
ctx.fill();

ctx.fillStyle = 'black';
ctx.font = 'normal 20pt sans';
ctx.fillText('Press Down Key ', canvas.width/2 -90, canvas.height/2 + 20);
ctx.fillText('To Start', canvas.width/2 -45, canvas.height/2 + 60);

};


//Check for edge collision with right screen edge for moving forward in the game to chase the bugs and get your 
//house pieces back
Scenes.prototype.checkEdgeCollision = function(){

    if(player.x >= 450){
      player.x = 0;
    }
};

//keyboard control checks for scene changes
Scenes.prototype.checkKeyPress = function (key) {

//used to start the game
if(key === 'down') {
  if(scene.order === 0) {
    scene.order = 1;
    
}

}
//used to call the bug attack and destruction of house scene
if(key === 'up') {
  if(scene.order === 1) {
    scene.order = 2;
    
  }

}

//used to start the appearance of house pieces
if(key === 'right' && player.x >= canvas.width -canvas.width/2.5){
  
  if(pieceScenes.order === 0) {
    scene.order = 4;
    pieceScenes.order = 1;
    player.x = 0;
  }
  
}


};

//method to check for win condition
Scenes.prototype.checkWinCondition = function () {

  if(pieceScenes.order > 8) {
        scene.drawHouse();
        this.xMove = canvas.height/6;
        this.yMove = canvas.height/6;
        ctx.fillStyle ='white';
        ctx.fillText('You Win', canvas.width/2-50, canvas.height/2 - 200);
   }
};

//function for drawing all the scene objects
Scenes.prototype.render = function() {
  //draw main play background tiles
      scene.drawPlayArea();

  //draw health bar
      lifeBar.render();
 if(this.order ===0) {
  //draw player house
      scene.drawHouse();

  //cover in shadow 
     scene.drawShadow();

  // start menu
     scene.drawStartMenu();

  // check if player wants to start
     scene.checkKeyPress();

 }

 if(this.order === 1) {

      //draw player house
      scene.drawHouse();

      //draw first speech bubble
      firstSpeechBubble.render(1);

      //check if player moves
      scene.checkKeyPress();
      
 }
 if(this.order === 2) {
     

     // draw player house
     scene.drawHouse();

     // draw second speech bubble
     secondSpeechBubble.render(2);

     //draw bugs stealing the house pieces
     if(this.xMove >= 450) {
       this.xMove = 600;
       scene.order = 3;
       
     }

     //draw house piece collection counter   
     housePieceCollection.render();
 }
 if(scene.order >= 3){
     
     //draw house piece collection counter   
     housePieceCollection.render();

      //check if all house picese have been collected otherwise create more on the canvas
       if(pieceScenes.order <= 8) {
        if(pieceScenes.order >= 1) {
          
          ctx.drawImage(Resources.get(houseParts[pieceScenes.order - 1]),  xPosHousePiece[pieceScenes.order - 1], yPosHousePiece[pieceScenes.order - 1]);
          player.checkCollision(pieceScenes.order - 1);

          
        }
       }

       //if all house pieces have been collected start end game scene for winning
       scene.checkWinCondition();
       
       //check if player has any life left 
       player.checkLife();

       //used to initaite scene change for house piece collection
       scene.checkEdgeCollision();
             

 }

};

//create speech Bubbles class creator
var SpeechBubbles = function(bubble){
  //variables for speach bubbles
  this.x = bubble.x;
  this.y = bubble.y;
  this.img = 'images/SpeechBubble.png';
  bubbleHeight = 50;
  this.xText = this.x + 15;
  this.yText = this.y + 100 ;
  this.text = bubble.text;
  this.text2 = bubble.text2;
  this.text3 = bubble.text3;
  this.text4 = bubble.text4;
  this.text5 = bubble.text5;

};

//method to draw the speech bubbles
SpeechBubbles.prototype.render = function (num) {
  if(num === 1){
    ctx.drawImage(Resources.get(firstSpeechBubble.img), player.x + 75, player.y-100);
    ctx.fillStyle = 'black';
    ctx.font = 'normal 9pt sans';
    ctx.fillText(firstSpeechBubble.text, player.x + 85, player.y );
    ctx.fillText(firstSpeechBubble.text2, player.x + 85, player.y + 10);
    ctx.fillText(firstSpeechBubble.text3, player.x + 85, player.y + 20);
    ctx.fillText(firstSpeechBubble.text4, player.x + 85, player.y + 30);
    ctx.fillText(firstSpeechBubble.text4, player.x + 85, player.y + 30);
    ctx.fillText(firstSpeechBubble.text5, player.x + 85, player.y + 40);
    ctx.fillText(firstSpeechBubble.text5, player.x + 85, player.y + 40);

  }
  if(num === 2){
    ctx.drawImage(Resources.get(secondSpeechBubble.img), player.x + 75, player.y);
    ctx.fillStyle = 'black';
    ctx.font = 'normal 9pt sans';
    ctx.fillText(secondSpeechBubble.text, player.x + 85, player.y + 100);
    ctx.fillText(secondSpeechBubble.text2, player.x + 85, player.y + 110);
    ctx.fillText(secondSpeechBubble.text3, player.x + 85, player.y + 120);
    ctx.fillText(secondSpeechBubble.text4, player.x + 85, player.y + 130);
    ctx.fillText(secondSpeechBubble.text4, player.x + 85, player.y + 130);
    ctx.fillText(secondSpeechBubble.text5, player.x + 85, player.y + 140);
    ctx.fillText(secondSpeechBubble.text5, player.x + 85, player.y + 140);
  }
};


// Enemies our player must avoid
var Enemy = function(creature) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.number = creature.number || 3;
    this.speed = creature.speed || 5;
    this.x = 0;
    this.y = creature.y;
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = creature.img ||'images/enemy-bug.png';
};

//Ensure we keep our enemy count on the screen at the right number
Enemy.prototype.checkCount = function(){

if(allEnemies.length < this.number) {
      creatureCreator(this);
    }
};

//check to see what the enemies are running into
Enemy.prototype.checkCollision = function(){
      if(scene.order === 2){
        if(((this.x+30) >= scene.xMove && this.x <= (scene.xMove+40) /*&& (this.y >= scene.yMove && this.y <= (scene.yMove+40))*/) ) {
          scene.xMove = this.x;
          

        }

      }
      if(scene.order >= 3) {
        if(((this.x+30) >= player.x && this.x <= (player.x+40)) && (this.y >= player.y && this.y <= (player.y+40))) {
          lifeBar.item++;
          player.life--;
          player.x = playerStartX;
          player.y = playerStartY;
        }
      }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // multiplied any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    var gameTime = 0;
    gameTime += dt;
    
    if(scene.order === 1){

    }
    if(scene.order >= 2){
      this.x += this.speed * dt;
      if(this.x >= 500){
        var loc = allEnemies.indexOf(this);
        allEnemies.splice(loc, 1);
      }
      for(var i=0; i < allEnemies.length; i++){
        allEnemies[i].checkCount();
        allEnemies[i].checkCollision();
      }
    }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  if(player.life > 0) {
   if(pieceScenes.order <= 8){
    if(scene.order === 1 ) {

     }
    if(scene.order >= 2) {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
   }
  }
};


//Create player class for interaction with the game
var Player = function(x,y, life) {
    //Variables applied to each instance goes here
    this.x = x;
    this.y = y;
    // The image/sprite for our player character
    this.sprite = 'images/char-boy.png';
    this.life = life;
    this.piecesCollected = 0;
};

//check to see if the player has any life left and then initiate you lose screen if the player is at 0
Player.prototype.checkLife = function () {
if(player.life <= 0){
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle ='white';
  ctx.fillText('You Lose', canvas.width/2-50, canvas.height/2);
}

};

//check to see if the player collects the house pieces and provide them to the house collection bar to
//display how many pieces left for the player
Player.prototype.checkCollision = function (num) {
    if(((this.x) >= xPosHousePiece[num] && this.x <= (xPosHousePiece[num] +50)) && (this.y >= yPosHousePiece[num] && this.y <= (yPosHousePiece[num]+50))){
        pieceScenes.order += 1;
        xPosHousePiece[num] = 600;
        player.piecesCollected += 1; // this does nothing yet but could if we wanted to add a feature
        housePieceCollection.total -= 1;

    }

};

//strating place and check for running into water
Player.prototype.update = function(dt) {
    // multiplied any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    
    if(player.y <= canvas.height/20){
      lifeBar.item++;
      player.life--;
      player.x = playerStartX;
      player.y = playerStartY;

    }


};

//draw the player
Player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    
};

//method for handling keyboard input and initiating player mowement
Player.prototype.handleInput = function(key){
   

     if(key === 'left' && player.x >= canvas.width/5){
        player.x -= canvas.width/5;
    }
     if(key === 'right' && player.x <= canvas.width -canvas.width/3){
        player.x += canvas.width/5;
    }
     if(key === 'up' /*&& player.y >= canvas.height/7*/){
        player.y -= canvas.height/7;
    }
     if(key === 'down' && player.y < canvas.height - canvas.height/2){
        player.y += canvas.height/7;
  
    }
  

};

//make house piece and life counters display bars

var Counters = function(title, total, x, y, type) {
  this.title = title;
  this.item = 0;
  this.total = total;
  this.font = 'normal 15pt arial';
  this.xCounter = x;
  this.yCounter = y;
  this.array = [];
  this.type = type;

};

//method for drawing the counters on the player screen
Counters.prototype.render = function (){
  if(this.type === 'life') {
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'black';
    ctx.font = lifeBar.font;
    ctx.fillText(lifeBar.title, lifeBar.xCounter, lifeBar.yCounter);
    for (var heart = 0; heart < lifeBar.total*20; heart+=20) {
      ctx.drawImage(Resources.get('images/Heart.png'), lifeBar.xCounter + 75 + heart, lifeBar.yCounter - 22, 20, 30);
    }
    for (var box = 0; box < lifeBar.item*20; box+=20) {
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = 'grey';
      ctx.fillRect(lifeBar.xCounter + 155 - box, lifeBar.yCounter - 22, 20, 30);
    }
  }
  if(this.type === 'house') {
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = 'grey';
    ctx.fillRect(housePieceCollection.xCounter + 200, housePieceCollection.yCounter - 22, 20, 30);
    ctx.globalAlpha = 1;
    ctx.font = housePieceCollection.font;
    ctx.fillStyle = 'black';
    ctx.fillText(housePieceCollection.title, housePieceCollection.xCounter, housePieceCollection.yCounter);
    ctx.fillText(housePieceCollection.total, housePieceCollection.xCounter + 200, housePieceCollection.yCounter);
  }
};

//Begin creation of game elements****************************************************

//create the scenes menu, lvl and others

var scene = new Scenes(0);

//create house pieces array for random house placement
    var houseWindow = 'images/Window Front.png';
    var door = 'images/Door Tall Closed.png';
    var roofCorner = 'images/Roof South West.png';
    var roofMiddle = 'images/Roof South.png';


//this is the house piece image array
    var houseParts = [
       houseWindow,
       door,
       houseWindow,
       roofCorner,
       roofMiddle,
       roofCorner,
       roofMiddle,
       roofCorner,
       roofCorner

    ];

//this is the array for random coordinates for house piece image placement
    var xPosHousePiece = [ 0, 101, 202, 303, 404, 0, 101, 202, 303, 404, 0, 101, 202, 303, 404, 0, 101, 202, 303, 404];
    var yPosHousePiece = [ 86, 174, 260, 86, 174, 260, 86, 174, 260, 86, 174, 260, 86, 174, 260,];

//this is the function call to shuffle the arrays for random placement
    shuffle(xPosHousePiece);
    shuffle(yPosHousePiece);
    shuffle(houseParts);

//this is the scene object used for piece placement transitions
var pieceScenes = new Scenes (0);



// create a randomizer for the bug position y and bug speed. Use Fisher-Yates shuffle
    function shuffle(array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array[0];

    }


//Create arrays for bug speed and row randomization
    var speed = [50, 100, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375];
    var enemyRow = [canvas.height/2.75, canvas.height/2.75-canvas.height/7.25, canvas.height/2.75-(2*(canvas.height/7.25))];

//Create the enemy array
    var allEnemies = [];

//Create our first enemy object
    var bug = {
      number: 3,
      speed: shuffle(speed),
      y: canvas.height/2.75, //enemyRow[shuffle(enemyRow)],
      img: 'images/enemy-bug.png'
    };


//assign the enemy object to the Enemy constructor class and add it to the allEnemies array
    var creatureCreator = function(creature){

    while(allEnemies.length < creature.number){
    // run through this and create one creature per the number
    // need an array to represent the different creatures
       var en = new Enemy(creature);
       en.speed = shuffle(speed);
       en.y = shuffle(enemyRow);
       allEnemies.push(en);
    }

    };

//actually call  the assignment and creation function for the enemy array
     creatureCreator(bug);

//create the player character and assign the starting position
var playerStartX = canvas.width/2.5;
var playerStartY = canvas.height - canvas.height/2.75;
var player = new Player(playerStartX,playerStartY, 5);


//Create speech bubbles for player interaction
    var firstSpeechBubble = new SpeechBubbles({
       x : player.x + 75,
          y : player.y - 110,
          text : "Finally I am home,",
          text2 : "Guess I will head",
          text3 : "inside.",
          text4 : "Press Up Arrow",
          text5 : "to move Up"
    });
    var secondSpeechBubble = new SpeechBubbles({
      x : player.x + 75,
          y : player.y - 110,
          text : "Oh No!!!",
          text2 : "They are stealing",
          text3 : "My House!",
          text4 : "I need te get",
          text5 : "it Back!!!",
    });

//create life text bar
    var lifeBar = new Counters(  'Health', 5, 20, 30, 'life');


//create house piece bar
    var housePieceCollection = new Counters(  'House Parts Missing', 8, 252, 30, 'house');


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
    document.addEventListener('keyup', function(e) {
        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };
        //collecting key commands for scene changes
        scene.checkKeyPress(allowedKeys[e.keyCode]);
        //collecting key commands for playe movement
        player.handleInput(allowedKeys[e.keyCode]);

    });
