var car,wall;
var deformation
var speed,weight
var half
function setup() {
  createCanvas(800,400);
  car=createSprite(200, 200, 20, 20);
  wall=createSprite(700, 200, 20, 80);
  speed=random(55,90)
  weight=random(400,1500);
  car.velocityX=speed
  half=0.5
  deformation=(half*speed*speed*weight)/22500
  wall.depth=car.depth-1
}

function draw() {
  background(0); 
 // movingRect.x=mouseX
  //movingRect.y=mouseY

  if(wall.x-car.x<wall.width/2+car.width/2
    ){
      car.velocityX=0
      if (deformation<100){
        car.shapeColor="green"}
       else if (deformation>100&&deformation<180){
      car.shapeColor="yellow"}
     else  if (deformation>180){
      car.shapeColor="red"}
    }
      
  
  drawSprites();
}