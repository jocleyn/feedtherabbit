var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf
var appleImg,leafImg;
var redleafImg;
var redleaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
   leafImg = loadImage("leaf.png");
   redleafImg = loadImage("redImage.png");
}

function setup(){
  createCanvas(400,400);


  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  
  edges= createEdgeSprites();
  rabbit.x=mouseX;
  rabbit.collide(edges);
var rand=Math.round(random(1,3));
if (frameCount%80===0){
  if(rand===1){
    createApples();
    }
    else if(rand===2){
      createLeaf();
    }
    else{
      createredleaf();
    }
}
  drawSprites();
}
function createApples(){
apple=createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY=2;
apple.lifetime=150;
}

function createLeaf(){
leaf=createSprite(random(50,350),40,10,10);
leaf.addImage(leafImg);
leaf.scale=0.07;
leaf.velocityY=2;
leaf.lifetime=150;
}

function createredleaf(){
redleaf=createSprite(random(50,350),40,10,10);
redleaf.addImage(redleafImg);
redleaf.scale=0.07;
redleaf.velocityY=2;
redleaf.lifetime=150;
}