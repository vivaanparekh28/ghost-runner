var ghost ,ghostimage
var door,doorgroup,doorimage
var tower,towerimage
var climber,climbergroup,climberimage
var invisibleblock,invisibleblockgroup;
var gameState="play"


function preload(){
  ghostimage=loadImage("ghost-standing.png");
  towerimage=loadImage("tower.png");
  doorimage=loadImage("door.png");
  climberimage=loadImage("climber.png")
}
function setup(){
  createCanvas(600,600)
  ghost=createSprite(300,300,20,20);
  ghost.addImage("gst",ghostimage);
  ghost.scale=0.25
  
  tower=createSprite(300,300,600,1200);
  tower.addImage("background",towerimage);
  doorgroup=new Group();
  climbergroup=new Group();
  invisibleblockgroup=new Group();
  
}
function draw(){
  background("white");
  if (gameSate==="play"){
    tower.velocityY=6
  if (tower.y>600){
    tower.y=300
  }
  if (keyDown("space")){
    ghost.velocityY=-10
  }
  ghost.velocityY=ghost.velocityY+0.8;
  
  if (keyDown(RIGHT_ARROW)){
    ghost.x=ghost.x+5
  }
  if (keyDown(LEFT_ARROW)){
    ghost.x=ghost.x-5
  }
  if (ghost.isTouching(climbergroup)){
    ghost.velocityY=0
  }
  
    spawndoors();
  
  ghost.depth=tower.depth+1
    if (ghost.isTouching(invisibleblock)||ghost.y<0){
      gameState="end"
    }
  }
    if (gameState==="end"){
      text("GAMEOVER",300,300);
      tower.velocityY=0
      ghost.velocityY=0
      
    }
      
  
  
  drawSprites();
}
function spawndoors(){
  if (frameCount % 100===0){
  
    door=createSprite(Math.round(random(100,400)),0,20,20);
  door.addImage("dr",doorimage);
  door.scale=0.75;
    door.depth=ghost.depth-1
    doorgroup.add(door)
  climber=createSprite(door.x,0,20,20);
  climber.addImage("climb",climberimage);
    climbergroup.add(climber)
  door.collide(climber);
    climber.velocityY=3
    door.velocityY=3
    invisibleblock=createSprite(door.x,door.y+70,80,10)
    invisibleblock.debug=false
    invisibleblock.velocityY=3
    invisibleblock.visible=false;
    invisibleblockgroup.add(invisibleblock);
  }
  
}
  
