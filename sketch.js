var zombie,zombieImg, zombie2, zombie3;
var z4,z5,z6;
var player,playerShooting, playerImg;
var heart1,heart2,heart3;
var heart1Img,heart2Img,heart3Img;
var backgroundImg;
var bullet;
var part21,bg2I;
var cr;

function setup(){

    player = createSprite (50,350,10,10);
    player.scale = 0.2;
    player.velocityY = 0;

    zombie = createSprite(800,200,10,10); 
    zombie.addImage(zombieImg)
    zombie.scale=0.1;
    zombie.y=Math.round(random(100,600));

    zombie2 = createSprite(800,200,10,10); 
    zombie2.addImage(zombieImg)
    zombie2.scale=0.1;
    zombie2.y=Math.round(random(100,600));

    zombie3 = createSprite(800,200,10,10); 
    zombie3.addImage(zombieImg)
    zombie3.scale=0.1;
    zombie3.y=Math.round(random(100,600));


        bullet = createSprite(50,100, 5,5 );
        bullet.velocityX = 70;

}

function preload(){
backgroundImg = loadImage("bg2.png");
zombieImg = loadImage("zombie.png");
part21 = loadImage("shooter_3.png");

playerImg = loadImage("shooter_1.png")
bg2I = loadImage("bg.jpeg");
}

function draw(){
    createCanvas(800,600);
    background(bg2I);

    textSize(25);
    fill("gold");
    text("Press Z to spawn more Zombies", 400,100);
    
    if(keyDown("UP_ARROW")){
        player.velocityY = -3;
    }

    if(keyDown("DOWN_ARROW")){
        player.velocityY = 3;
    }

    if(keyDown("LEFT_ARROW")){
        player.velocityX = -3;
    }
    if(keyDown("RIGHT_ARROW")){
        player.velocityX = 3;
    }

    if(player.isTouching(zombie) || player.isTouching(zombie2) || player.isTouching(zombie3)){
        textSize(20);
        fill("gold")
        text("You are a Zombie Now! :o", 300,350);
        
        zp = createSprite(player.position.x -35,player.position.y,50,50);
        zp.addImage(zombieImg);
        zp.scale = 0.27;

        player.velocityY = 0;
        player.velocityX = 0;
        zombie.velocityX = 0;
        zombie2.velocityX = 0;
        zombie3.velocityX = 0;
        z4.velocityX = 0;
        z5.velocityX = 0;
        z6.velocityX = 0;
        z4.velocityY = 0;
        z5.velocityY = 0;
        z6.velocityY = 0;
    }


    if(keyDown("z")){
        z4 = createSprite(850,200,10,10); 
        z4.addImage(zombieImg)
        z4.scale=0.1;
        z4.y=Math.round(random(10,600));
    
        z5 = createSprite(800,200,10,10); 
        z5.addImage(zombieImg)
        z5.scale=0.1;
        z5.y=Math.round(random(10,600));
    
        z6 = createSprite(850,200,10,10); 
        z6.addImage(zombieImg)
        z6.scale=0.1;
        z6.y=Math.round(random(10,600));
        
        z4.velocityX = -0.7;
        z5.velocityX = -0.3;
        z6.velocityX = -0.2;
    }

    shoot();
    drawSprites();
}



function shoot(){
    player.addImage(part21);
    if(keyDown("space")){
        bullet =createSprite(player.position.x,player.position.y -15,5,5);
        bullet.shapeColor = "gold";
        bullet.velocityX = 70;
    }
}