var PLAY = 1;
var END = 0;
var gameState = PLAY;

var pikachu,pikachuImage;
var obstacle,o1,o2,o3;
var ground;
var bg;
var charizard,charizardImage;
var blastoise,blastoiseImage;
var venusaur,venusaurImages;
var fire,fireImage;
var water,waterimage;

function preload()
{
  bg=loadImage("bg.png");
  pikachuImage=loadAnimation("p1.png","p2.png","p3.png","p4.png")
  charizardImage=loadAnimation("c1.png","c2.png","c3.png","c4.png","c1.png","c1.png","c1.png","c1.png","c1.png","c1.png","c1.png","c5.png","c6.png","c7.png","c8.png","c9.png","c10.png","c11.png","c12.png","c13.png","c14.png","c15.png","c16.png","c17.png","c18.png","c19.png","c20.png","c21.png","c22.png","c23.png","c24.png","c25.png","c26.png","c27.png");
  blastoiseImage=loadAnimation("B1.png","B2.png","B3.png","B5.png","B6.png","B8.png","B9.png","B10.png","B11.png","B12.png","B13.png","B14.png","B15.png","B16.png","B17.png","B18.png","B20.png","B21.png","B22.png","B23.png","B24.png");
  venusaurImage=loadAnimation("v1.png","v2.png","v3.png","v4.png","v5.png","v6.png","v7.png","v8.png","v9.png","v10.png","v11.png","v12.png","v13.png","v14.png");
  fireImage=loadAnimation("f1.png","f2.png","f3.png","f4.png","f5.png","f6.png","f7.png");
}                         
function setup() 
{
  createCanvas(1350, 650);

  ground=createSprite(600,650,1350,20);
  ground.visible=false;

  pikachu=createSprite(600,640,25,30);
  pikachu.addAnimation("pikachu",pikachuImage)
  pikachu.scale=0.2
  pikachu.shapeColor=("yellow")

  charizard=createSprite(200,50,60,40);
  charizard.addAnimation("c",charizardImage)
  charizard.scale=0.5
  charizard.velocityX=random(-3,3)

  blastoise=createSprite(70,450,50,40);
  blastoise.addAnimation("b",blastoiseImage)
  blastoise.scale=2.3;
 

  venusaur=createSprite(1250,480,50,40);
  venusaur.addAnimation("v",venusaurImage)
  venusaur.scale=1;

}

function draw() 
{
  background(bg);

  if(keyDown("right"))
    {
     pikachu.x+=3;
    }
  
  if(keyDown("left"))
    {
      pikachu.x-=2;
      pikachu.addAnimation("pikachu",pikachuImage)
    }

  if(charizard.x<0 || charizard.x>1350)
    {
    charizard.x=600
    }
  
  if(keyDown("space") && pikachu.y>500)
    {
      pikachu.velocityY=-10
    }

  pikachu.velocityY=pikachu.velocityY+0.5   
  pikachu.collide(ground);

  spawnFire();
  spawnWater();
  spawnLeaf()

  drawSprites();
}
function spawnFire()
{
  if(frameCount % 50 ===0)
  {
    fire=createSprite(500,50,20,20);
      fire.addAnimation("f",fireImage);
    fire.scale=0.1
    fire.x=charizard.x-50;
    fire.shapeColor="orange";
    fire.velocityX=-2;
    fire.velocityY=6;
  }
}
function spawnWater()
{
  if(frameCount % 100 ===0)
  {
    water=createSprite(130,280,50,40);
    water.scale=0.3
    water.x=blastoise.x+55;
    water.y=blastoise.y-30
    water.shapeColor="blue";
    water.velocityX=random(6,30);
    water.velocityY=random(8,40);
  }
}
function spawnLeaf()
{
  if(frameCount % 80 ===0)
  {
    leaf=createSprite(130,280,50,40);
    leaf.scale=0.3
    leaf.x=venusaur.x;
    leaf.y=venusaur.y-100
    leaf.shapeColor="green";
    leaf.velocityX=random(-6,-30);
    leaf.velocityY=random(8,40);
  }
}