var canvas;
var background_img;
var bg;
var t;

function preload() {
 background_img=loadImage("/assets/Jungle Bg.jpg")
}

function setup() {
createCanvas(900, 700);



bg = createSprite(450,350);
bg.addImage("ground",background_img);
bg.velocityX=-3
//t= createSprite(50,300,50,50)


}

function draw() {
  background("black");
  



drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
