const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot,ground,ground2;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(800,300,300,20);
    platform = new Ground(150,750, 300, 170);

    box1 = new Box(700,720,70,70);
    box2 = new Box(920,720,70,70);
    box5 = new Box(770,720,70,70);
    box6 = new Box(840,720,70,70);
    box3 = new Box(700,760,70,70);
    box4 = new Box(920,760,70,70);
    box7 = new Box(840,760,70,70);
    box8 = new Box(770,760,70,70);
    box9 = new Box(810,680,70,70);

    box10 = new Box(800,280,70,70);
    box11 = new Box(770,280,70,70);
    box12 = new Box(830,280,70,70);
    box13 = new Box(785,260,70,70);
    box14 = new Box(815,260,70,70);
    box15 = new Box(800,240,70,70);

    

    bird = new Hexagon(200,650);

    
    slingshot = new SlingShot(bird.body,{x:200, y:470});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    ground2.display();
    box3.display();
    box4.display();
    box5.display();
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
    box6.display();    
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
 if(keyCode===32){
    slingshot.attach(bird.body);
 }
}