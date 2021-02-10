var cat,catImg1,catImg2,catImg3,catImg4;
var rat,ratImg1,ratImg2,ratImg3,ratImg4;
var gardenImg;
function preload() {
    //load the images here
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
  
    catImg3=loadAnimation("images/cat4.png");
    ratImg1=loadAnimation("images/mouse1.png");
    ratImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    
    ratImg3=loadAnimation("images/mouse4.png");
    gardenImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,650);                         
    //create tom and jerry sprites here             
    cat=createSprite(800,500);            
    cat.addAnimation("catSleeping",catImg1);
    cat.scale=0.2

    rat=createSprite(200,500);
    rat.addAnimation("ratStanding",ratImg1);
    rat.scale=0.15


}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
if (cat.x-rat.x<(cat.width-rat.width)/2){
cat.velocityX=0;
cat.addAnimation("catStoped",catImg3);
cat.x=300;
cat.scale=0.2;
cat.changeAnimation("catStoped");
rat.addAnimation("ratrunning",ratImg3);
rat.changeAnimation("ratrunning");
rat.scale=0.15;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode===LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
      rat.addAnimation("ratteasing",ratImg2);
      rat.changeAnimation("ratteasing");
  }
  text(mouseX+','+mouseY,10,45);

}
