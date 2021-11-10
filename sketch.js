var knife
var applesGroup
var SwooshSound

function preload(){
knifeImg=loadImage("knife.png")
appleImg=loadImage("fruit2.png")
SwooshSound=loadSound("knifeSwoosh.mp3")
}

function setup(){
  createCanvas(400,400)
  knife=createSprite(200,200)
  knife.addImage(knifeImg)
  knife.setCollider("rectangle",0,0,100,100)
  knife.debug=false
  applesGroup=new Group()
}

function draw(){
background("black")
  knife.x=mouseX
  knife.y=mouseY
  Apples()
  drawSprites ()
  if(knife.isTouching(applesGroup)){
    applesGroup.destroyEach()
    SwooshSound.play()
  }
}

function Apples (){
  if (frameCount % 60 === 0) {
    apple = createSprite(450,200);
   apple.y = Math.round(random(0,400));
   apple.addImage(appleImg);
   apple.scale = 0.5;
   apple.velocityX = -3
   applesGroup.add(apple)
}
}