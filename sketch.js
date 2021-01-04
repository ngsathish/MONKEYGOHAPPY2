var bananaImage, obstacleImage, obstacleGroup, backImage, food, foodGroup, invisiground, obstacle;

var score = 0

function preload() {
  backImage = loadImage("jungle.jpg");
  Monkey = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("stone.png")
}

function setup() {
  createCanvas(400, 400);
  
  background1 = createSprite(200,200,10,10)
  background1.addImage(backImage)
  
  background1.velocityX = -2
  
  player = createSprite(100,350,10,10)
  player.addAnimation("Monkey_running", Monkey)
  player.scale = 0.1
 
foodGroup = new Group();
obstacleGroup = new Group();  

  invisiground = createSprite(200,380,400,5)
  invisiground.visible = false
  

}

function draw() {
  
  background(220);
  
    if (player.isTouching(obstacleGroup)){
  player.scale = 0.1
}
  
  if(frameCount % 180 === 0){
  obstacle = createSprite(350,350,10,10)
  obstacle.addImage("rock",obstacleImage)
  obstacle.scale = 0.2
  obstacle.velocityX = -5
  obstacle.lifetime = 150   
  obstacleGroup.add(obstacle);
}
  
  player.collide(invisiground)
  
if(keyDown("space")) {
    player.velocityY = -7;
  }
  
  if (player.y < 175){
    player.velocityY = 7
  }
  
  if (foodGroup.isTouching(player)){
    foodGroup.destroyEach();
    score = score + 2 
    
    switch(score){
      case 10: player.scale=0.2;
                   break; 
      case 20: player.scale=0.3;
                   break;       
      case 30: player.scale=0.4;
                   break;              
      case 40: player.scale=0.5;
                   break; 
                   default: break;             
    }
  }
  
   if(frameCount % 60 === 0){
      food = createSprite(350,200,10,10)
  food.addImage("banana", bananaImage)
  food.scale = 0.05
  food.velocityX = -5
  rand = random(180,320)
  food.y = rand
  food.lifetime = 150   
  foodGroup.add(food);
}
  
  if(background1.x < 0){
    background1.x = 200
  }
  drawSprites();
  
    stroke("white")
  textSize(20)
  fill("blue")
 text("Score: "+ score, 100,150);

}