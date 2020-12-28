var fixedRect;
var movingRect;
var box1, box2; 
var num1, num2;


function setup(){
  createCanvas (400,400)
  
  fixedRect = createSprite(350,200,20,380);
  movingRect = createSprite(200,200,100,30);

  box1 = createSprite(200,100,10,20)
  box1.shapeColor = "yellow";
  box1.velocityX = 5;
  
  box2 = createSprite(200,200,20,10)
  box2.shapeColor = 'cyan'
  box2.velocityX = 5;
  movingRect.debug = true;
  fixedRect.debug = true;
  
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

}

function draw() {
  
  background("black");

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  //isTouching function calling with arguments
  if(isTouching(box2,fixedRect)){
   box2.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    box2.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  collide(fixedRect,box1);
  bounceOff(fixedRect,box2); 

  drawSprites()
}

