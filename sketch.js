var running;
var path;
var bomb;
var coin;
var drink;

function preload(){
  //pre-load images
  running = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  drinkImg = loadImage("energyDrink.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.veocityY=4;
  path.scale=1.2; 

  if (path.y > 400){
    path.y + hight/2;
  }
}
function draw () {
  background(0);

}
