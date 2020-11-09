var car,wall;
var speed,weight;
function setup() {
  createCanvas(windowWidth,400);
  speed=random(55,90);
  weight=random(400,1500);
 
  car=createSprite(50,200,50,50);
  wall=createSprite(width-100,200,50,height/2);
  wall.shapeColor=rgb(80,80,80);
  car.velocityX=speed;
  

}

function draw() {
  background("blue");  
  isTouching(car,wall);
  drawSprites();
}

