var PLAY = 1
var END = 0
gameState = PLAY

var score=0

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350, 900, 10)
  ground.velocityX = -4;
  ground.x = ground.width/2
  
  obstacleImage = loadImage("obstacle.png") 

  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0
}



function draw() {
createCanvas(800,400)
background("white")
  
  text('Score:'+ score, 500,50)
  
  if(ground.x < 400){
    
    ground.x = ground.width/2
    
  }
  if(keyDown ("space") && monkey.y > 310){
    monkey.velocityY = -16
  }
  
  monkey.velocityY = monkey.velocityY+0.8 
  
  monkey.collide(ground)
  
  if(gameState === PLAY && monkey.isTouching(bananaGroup)){
    score = score+10 }
  
  
  if(gameState === PLAY && monkey.isTouching(bananaGroup)){
     }
  
  if(monkey.isTouching(obstacleGroup)){
     gameState = END
     }
  
  if (gameState === END){
    obstacleGroup.setVelocityXEach(0)
    bananaGroup.setVelocityXEach(0)
    
    if(keyDown ("space") && monkey.y > 310){
    monkey.velocityY = 0
  }
    monkey.changeAnimation = ("")
    
    textSize(35);
    text('GAME OVER Press "R" to restart', 50,200)
   
  }
  
  
  if(keyDown ("r")){
    reset();
  }
  
  SpawnFood()
  SpawnObstacles()
  drawSprites()
}

 function SpawnObstacles(){
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(625,330,20,50)
    obstacle.velocityX = -6
    obstacleGroup.add(obstacle);
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1
    obstacle.debug = true
    }
  
  }  
  
function SpawnFood(){
  if(frameCount % 80 === 0) {
    var banana = createSprite(625,0, 20,50)
    banana.velocityX = -6
    bananaGroup.add(banana);
    banana.addImage(bananaImage)
    banana.scale = 0.1
    
    banana.y = Math.round(random(120,200))
    
  }
}

function reset(){
  gameState = PLAY
  
  obstacleGroup.destroyEach()
  bananaGroup.destroyEach()
  
  score = 0 
  
}

