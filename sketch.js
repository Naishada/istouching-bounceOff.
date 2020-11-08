
var movingRect, fixedRect;
var ball;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(200,200,30,60);
  movingRect.shapeColor = "red";

  ball = createSprite(300,180,20,20);
  ball.velocityX = 2;
  ball.velocityY = 2;
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if((fixedRect.x-movingRect.x)<(movingRect.width/2 + fixedRect.width/2) && 
    (movingRect.x-fixedRect.x) < (movingRect.width/2 + fixedRect.width/2)&&
    (movingRect.y - fixedRect.y)<(movingRect.height/2 + fixedRect.height/2)&&
    (fixedRect.y - movingRect.y)<(movingRect.height/2 + fixedRect.height/2)){
      
    fixedRect.shapeColor = "orange";
    movingRect.shapeColor = "yellow";
  }else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  if((fixedRect.x-ball.x)<(ball.width/2 + fixedRect.width/2) && 
    (ball.x-fixedRect.x) < (ball.width/2 + fixedRect.width/2)){
      
    ball.velocityX = -ball.velocityX;
  }

  if((ball.y - fixedRect.y)<(ball.height/2 + fixedRect.height/2)&&
    (fixedRect.y - ball.y)<(ball.height/2 + fixedRect.height/2)){
      ball.velocityY = -ball.velocityY;
    }

  drawSprites();

}