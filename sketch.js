var parede;
var player;
var inimigo;
var inimigo2;
var inimigo3;
var inimigo4;
var inimigo5;
var inimigo6;
var xplayer= 230;
var yplayer= 500;
var xinimigo= 170;
var yinimigo= 240;
var xinimigo2= 840;
var yinimigo2= 250;
var xinimigo3= 500;
var yinimigo3= 350;
var xinimigo4= 736;
var yinimigo4= 350;
var xinimigo5= 400;
var yinimigo5= 250;
var xinimigo6= 600;
var yinimigo6= 250;
var gp1,gp2,gp3,gp4,gp5,gp6,gp7,gp8,gp9,gp10;
var fase1Img, fase2Img, fase3Img, fase4Img, fase5Img, fase6Img, fase7Img, fase8Img, fase9Img, fase10Img;
var verde;
var gameState=1;

function preload(){
    fase1Img = loadImage("fase1.png");
    fase2Img = loadImage("fase2.png");
    fase3Img = loadImage("fase3.png");
    fase4Img = loadImage("fase4.png");
    fase5Img = loadImage("fase5.png");
    fase6Img = loadImage("fase6.png");
    fase7Img = loadImage("fase7.png");
    fase8Img = loadImage("fase8.png");
    fase9Img = loadImage("fase9.png");
    fase10Img = loadImage("fase10.png");
}


function setup (){
    createCanvas (1200,600);

    paredesFase2();
    paredesFase1();

    verde = createSprite (225,120,135,125);
    verde.shapeColor = "green";

    player = createSprite (xplayer,yplayer,20,20);
    player.shapeColor = "red";

    inimigo = createSprite (xinimigo,yinimigo,20,20);
    inimigo.shapeColor = "blue";

    inimigo2 = createSprite (xinimigo2,yinimigo2,20,20);
    inimigo2.shapeColor = "blue";
   
    inimigo3 = createSprite (xinimigo3,yinimigo3,20,20);
    inimigo3.shapeColor = "blue";

    inimigo4 = createSprite (xinimigo4,yinimigo4,20,20);
    inimigo4.shapeColor = "blue";

    inimigo5 = createSprite (xinimigo5,yinimigo5,20,20);
    inimigo5.shapeColor = "blue";

    inimigo6 = createSprite (xinimigo6,yinimigo6,20,20);
    inimigo6.shapeColor = "blue";

inimigo.velocityX = 10
inimigo2.velocityY = 6
inimigo3.velocityY = 6
inimigo4.velocityY = 6
inimigo5.velocityY = 6
inimigo6.velocityY = 6


}

function draw(){
background("white");
if(keyDown ("RIGHT") ){
player.x+= 6;
}

if(keyDown ("LEFT") ){
player.x -=6;
}

if(keyDown ("UP") ){
player.y-=6;
}

if(keyDown ("DOWN") ){
player.y+=6;
}

if (gameState ==1){
    player.collide(gp1);

inimigo.bounceOff (gp1);
inimigo2.bounceOff (gp1);
inimigo3.bounceOff (gp1);
inimigo4.bounceOff (gp1);
inimigo5.bounceOff (gp1);
inimigo6.bounceOff (gp1);
}



if (player.isTouching(inimigo)||player.isTouching(inimigo2)||player.isTouching(inimigo3)||player.isTouching(inimigo4)||player.isTouching(inimigo5)||player.isTouching(inimigo6)){
    player.x =xplayer;
    player.y = yplayer;
}
if (player.isTouching(verde)){
gameState = 2
}

if(gameState ==2 ){
  gp1.destroyEach();
    gp2.setColorEach("gray");
  
    player.collide(gp2);

    inimigo.bounceOff (gp2);
    inimigo2.bounceOff (gp2);
    inimigo3.bounceOff (gp2);
    inimigo4.bounceOff (gp2);
    inimigo5.bounceOff (gp2);
    inimigo6.bounceOff (gp2);
    player.x =1050;
    player.y = 200;
}

drawSprites ()
}

function paredesFase1(){
    gp1 = new Group();
    var p1 = createSprite(150,300,20,500);
    var p2 = createSprite(300,110,20,140);
    var p3 = createSprite(300,480,20,140);
    var p4 = createSprite(1000,300,20,240);
    var p5 = createSprite(500,300,700,20);
    var p6 = createSprite(650,180,720,20);
    var p7 = createSprite(650,410,720,20);
    var p8 = createSprite(225,50,170,20);
    var p9 = createSprite(225,550,170,20);
    gp1.add(p1);
    gp1.add(p2);
    gp1.add(p3);
    gp1.add(p4);
    gp1.add(p5);
    gp1.add(p6);
    gp1.add(p7);
    gp1.add(p8);
    gp1.add(p9);
}

function paredesFase2(){
    gp2 = new Group();
    var p1 = createSprite(100,250,20,400);
    var p2 = createSprite(250,110,20,100);
    var p3 = createSprite(175,50,170,20);
    var p4 = createSprite(680,150,850,20);
    var p5 = createSprite(1100,190,20,100);
    var p6 = createSprite(1025,250,170,20);
    var p7 = createSprite(950,350,20,200);
    var p8 = createSprite(520,440,850,20);
    var p9 = createSprite(420,220,170,20);
    var p10 = createSprite(340,320,20,220);
    var p11 = createSprite(650,250,20,220);
    
    gp2.add(p1);
    gp2.add(p2);
    gp2.add(p3);
    gp2.add(p4);
    gp2.add(p5);
    gp2.add(p6);
    gp2.add(p7);
    gp2.add(p8);
    gp2.add(p9);
    gp2.add(p10);
    gp2.add(p11);
    gp2.setColorEach ("white");
}

function paredesFase3(){
    gp3 = new Group();
    var p1 = createSprite(50,200,20,200);
    var p2 = createSprite(150,160,20,120);
    var p3 = createSprite(100,100,120,20);
    var p4 = createSprite(190,210,100,20);
    var p5 = createSprite(250,180,20,80);
    var p6 = createSprite(300,150,100,20);
    var p7 = createSprite(350,180,20,80);
    var p8 = createSprite(580,210,480,20);
    var p9 = createSprite(270,290,450,20);
    var p10 = createSprite(600,320,20,80);
    var p11 = createSprite(800,290,390,20);
    var p12 = createSprite(550,360,120,20);
    var p13 = createSprite(500,320,20,80);
    var p14 = createSprite(820,180,20,80);
    var p15 = createSprite(880,150,120,20);
    var p16 = createSprite(950,180,20,80);
    var p17 = createSprite(950,180,20,80);
    var p18 = createSprite(950,180,20,80);
    var p19 = createSprite(950,180,20,80);
    var p20 = createSprite(950,180,20,80);
    
    gp3.add(p1);
    gp3.add(p2);
    gp3.add(p3);
    gp3.add(p4);
    gp3.add(p5);
    gp3.add(p6);
    gp3.add(p7);
    gp3.add(p8);
    gp3.add(p9);
    gp3.add(p10);
    gp3.add(p11);
    gp3.add(p12);
    gp3.add(p13);
    gp3.add(p14);
    gp3.add(p15);
    gp3.add(p16);
    gp3.add(p17);
    gp3.add(p18);
    gp3.add(p19);
    gp3.add(p20);
    p16.shapeColor = "purple";
}
