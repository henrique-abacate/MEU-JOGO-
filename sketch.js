var parede;
var player;
var inimigo;
var xplayer= 400;
var yplayer= 400;
var xinimigo= 300;
var yinimigo= 300;



function setup (){
    createCanvas (1200,600)
    player = createSprite (xplayer,yplayer,10,10);
inimigo = createSprite (xinimigo,yinimigo,10,10);
}
function draw(){
background("white")
if(keyDown ("RIGHT") ){
player.x+= 2;
}

if(keyDown ("LEFT") ){
player.x -=2;
}

if(keyDown ("UP") ){
player.y-=2;
}

if(keyDown ("DOWN") ){
player.y+=2;
}

drawSprites ()


}