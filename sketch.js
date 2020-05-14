var sun,planet1,planet2,planet3,planet4,planet5,planet6,planet7,asteroid,kuiper;
var sun1,planet11,planet22,planet33,planet44,planet55,planet66,planet77,asteroid1,bg1;
var thetaRad = 0,thetaDeg = 0;

function preload(){
  sun1 = loadImage("sun.png");
  planet11 = loadImage("unnamed.png");
  planet22 = loadImage("venus.png");
  planet33 = loadImage("Untitled.png");
  planet44 = loadImage("mars.png");
  planet55 = loadImage("jupiter.png");
  planet66 = loadImage("saturn.png");
  planet77 = loadImage("Uranus.png");
  planet88 = loadImage("Uneptune.png");

  asteroid1 = loadImage("pngguru.com.png");
  bg1 = loadImage("photo-1538370965046-79c0d6907d47.jpg")
}

function setup() {
  createCanvas(2000,760);
  sun = createSprite(0,800,10,10);
  sun.addImage(sun1);
  sun.setCollider("circle",0,0,sun.width/2-70);

  planet1 = createSprite(0,400,10,10);
  planet1.scale = 0.2;
  planet1.addImage(planet11);
  planet1.setCollider("circle",0,0,planet1.width*2-30);

  planet2 = createSprite(0,200,10,10);
  planet2.addImage(planet22);
  planet2.scale = 0.2;
  planet2.setCollider("circle",0,0,width/6-80);

  planet3 = createSprite(0,0,200,10,10);
  planet3.addImage(planet33);
  planet3.scale = 0.2;
  planet3.setCollider("circle",0,0,width/6-80);

  planet4 = createSprite(330,0,10,10);
  planet4.addImage(planet44);
  planet4.scale = 0.1;
  planet4.setCollider("circle",0,0,width/8);

  asteroid = createSprite(300,450,10,10);
  asteroid.addImage(asteroid1);
  asteroid.scale = 1.5;

  planet5 = createSprite(850,0,10,10);
  planet5.addImage(planet55);
  planet5.scale = 0.5;
  planet5.setCollider("circle",0,0,width/12-10);

  planet6 = createSprite(1150,0,10,10);
  planet6.addImage(planet66);
  planet6.scale = 0.3;
  planet6.setCollider("circle",0,0,width/12);

  planet7 = createSprite(1450,0,10,10);
  planet7.addImage(planet77);
  planet7.scale = 0.3;
  planet7.setCollider("circle",0,0,width/12-20);

  planet8 = createSprite(1750,0,10,10);
  planet8.addImage(planet88);
  planet8.scale = 0.2;
  planet8.setCollider("circle",0,0,width/10+10);

  kuiper = createSprite(100,0,10,10);
  kuiper.addImage(asteroid1);
  kuiper.scale = 5.1;
}

function draw() {
  background(bg1);
  thetaRad = thetaRad + 0.01;
  thetaDeg = thetaDeg + 1;
  asteroid.rotation = asteroid.rotation + 0.1;
  kuiper.rotation = kuiper.rotation + 0.1

  planet1.x = 0 + 360 * Math.cos(thetaRad);  // radians
  planet1.y = 760 + 360 * Math.sin(thetaRad);  // radians

  planet2.x = 0 + 560 * Math.cos(thetaRad/2);  // radians
  planet2.y = 760 + 560 * Math.sin(thetaRad/2);  // radians

  planet3.x = 0 + 760 * Math.cos(thetaRad/3);  // radians
  planet3.y = 760 + 760 * Math.sin(thetaRad/3);  // radians

  planet4.x = 0 + 760 * Math.cos(thetaRad/3.6);  // radians
  planet4.y = 760 + 760 * Math.sin(thetaRad/3.6);  // radians

  planet4.x = 0 + 874 * Math.cos(thetaRad/3.6);  // radians
  planet4.y = 760 + 874 * Math.sin(thetaRad/3.6);  // radians

  planet5.x = 0 + 1174 * Math.cos(thetaRad/4);  // radians
  planet5.y = 760 + 1174 * Math.sin(thetaRad/4);  // radians

  planet6.x = 0 + 1378 * Math.cos(thetaRad/4.3);  // radians
  planet6.y = 760 + 1378 * Math.sin(thetaRad/4.3);  // radians

  planet7.x = 0 + 1673 * Math.cos(thetaRad/4.7);  // radians
  planet7.y = 760 + 1673 * Math.sin(thetaRad/4.7);  // radians

  planet8.x = 0 + 1908 * Math.cos(thetaRad/5);  // radians
  planet8.y = 760 + 1908 * Math.sin(thetaRad/5);  // radians
  //background(0);  
  drawSprites();
}