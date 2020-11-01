
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  
  
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  monkeystops=loadImage("sprite_0.png")
}



function setup() {
   createCanvas(600, 400); 
  
   monkey=createSprite(80,320,10,10);
  monkey.addAnimation("running",monkeyrunning); 
  monkey.scale=0.1
  ground = createSprite(400,350,1000,5);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  console.log(ground.x)
  ground2=createSprite(450,350,300,5);
  
 score=0; 
}


function draw() {
 background("white");
  if (ground.x < 0){
      ground.x = ground.width/2;
 }
   if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -15
   }
        monkey.velocityY = monkey.velocityY + 0.5
 
  spawnbanana();
  spawnstones();
   monkey.collide(ground);
   drawSprites();
   score = score + Math.round(frameCount/200);
   text("survival time:"+score,450,50)
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(90,150));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
    banana.lifetime = 200;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;

  }
}
function spawnstones() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    stones = createSprite(600,310,40,10);
    stones.addImage(obstacleImage);
    stones.scale = 0.2;
    stones.velocityX = -4;
    
    stones.lifetime = 200;
    
    stones.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}






