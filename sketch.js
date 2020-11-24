var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  thickness=random(22,83)

  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  bullet.shapeColor=(255);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0); 

  function hasCollided(Lbullet, Lwall){
    bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge){
      return true;
    }
      return false;
    }

    if(hascollided(bullet,wall)){
      bullet.velocity.x=0;
      var damage=0.5 *weight * speed* speed/(thickness *thickness *thickness);

      if(damage>10){

        wall.shapeColor=color(225,0,0);

      }

      if(damage<10){

        wall.shapeColor=color(0,225,0);

      }
    }
  
  drawSprites();
