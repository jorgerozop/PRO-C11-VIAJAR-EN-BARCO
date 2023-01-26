var sea, ship, pez, peces, tiburon1, tiburon2, tortuga, pajaros, planta, planta2;
var seaImg, shipImg, pezImg, pecesImg, tiburon1Img, tiburon2Img, tiburon2p2Img,tortugaImg, pajarosImg, plantaImg;
var seaSound, shipSound;

function preload(){
 seaImg = loadImage("sea.png");
 shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
 seaSound = loadSound("ocean.mp3");
 shipSound = loadSound("boat.mp3");
 pezImg = loadImage("pez.png");
 pecesImg = loadImage("peces.png");
 tiburon1Img = loadImage("tiburon 1.png");
 tiburon2Img = loadImage("tiburon 2.png");
 tiburon2p2Img = loadImage("tiburon 2 p3.png");
 tortugaImg = loadImage("tortuga.png");
 pajarosImg = loadAnimation("pajaros.png", "pajaros - copia.png", "pajaros p2.png", "pajaros p2 - copia.png");
 plantaImg = loadImage("planta.png");
} 

function setup(){
  createCanvas(400,400);
  preload(); 

  sea = createSprite(200,200,400,400);
  sea.addImage(seaImg);
  sea.scale = 0.3;

  ship = createSprite(100,270,50,50);
  ship.addAnimation("shipAnimation" ,shipImg);
  ship.scale = 0.15;

  sea.velocityX = -2;
 
  ship.velocityX = 2; 
  
  pez = createSprite(50,300,5,5);
  pez.addImage(pezImg);
  pez.scale = 0.05;
  pez.depth = ship.depth -1;
  pez.velocityX = 1;

  peces = createSprite(100,350,5,5);
  peces.addImage(pecesImg);
  peces.scale = 0.1;
  peces.velocityY = -1;

  tiburon1 = createSprite(25,375,5,5);
  tiburon1.addImage(tiburon1Img);
  tiburon1.scale = 0.1;
  tiburon1.velocityX = 1;

  tiburon2 = createSprite(320,250,5,5);
  tiburon2.addImage(tiburon2Img);
  tiburon2.scale = 0.3;
  tiburon2.depth = ship.depth -1;
  tiburon2.velocityY = -1.5;

  tortuga = createSprite(200,300,5,5);
  tortuga.addImage(tortugaImg);
  tortuga.scale = 0.06;
  tortuga.depth = ship.depth -1;
  tortuga.velocityX = 1;

  pajaros = createSprite(100, 50, 5, 5);
  pajaros.addAnimation("pajarosAnimation",pajarosImg);
  pajaros.scale = 0.3;  
  pajaros.velocityX = 1;

  planta = createSprite(100, 375, 5, 5);
  planta.addImage(plantaImg);
  planta.scale = 0.2;
  planta.depth = tiburon1.depth -1;

  planta2 = createSprite(300, 375, 5, 5);
  planta2.addImage(plantaImg);
  planta2.scale = 0.2;
  planta2.depth = tiburon1.depth -1;
}

function draw() {
  background(0);
  
  
  
  if(sea.x < -210 ){
    sea.x = width/2;
    seaSound.play();
  }
  
  if(ship.x > 300){
    ship.x = width/2;
  }
  
  if(ship.x ===300){
    ship.velocityX = -2;
    shipSound.play();
  }
  
  if(ship.x < 100){
    ship.velocityX = 2;
  }
  
  if(pajaros.x === 430 ){
    pajaros.x = width/4;
  
  }
  
  if(tiburon2.y < 200){
    tiburon2.addImage(tiburon2p2Img); 
    tiburon2.velocityY = 1.5;
  }
  
  if(tiburon2.y > 250){
    tiburon2.addImage(tiburon2Img);
    tiburon2.velocityY = -1.5;
  }
  
  if(tiburon1.x > 400){
    tiburon1.x = width/6;
  }

  if(peces.y === 330){
    peces.velocityY = 1;
  }
  
  if(peces.y === 350){
    peces.velocityY = -1;
  }
  
  if(pez.x > 400 ){
    pez.x = width/8;
  } 

  if(tortuga.x > 400 ){
    tortuga.x = width/8;
  }

  drawSprites();
}