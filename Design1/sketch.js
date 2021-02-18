const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var ball;

function setup(){
   engine = Engine.create();
   world = engine.world;

   createCanvas(800,800);
   
   ground = new Ground(400,700,800,20);
   ball = new Ball(400, 400, 20);
   ball2 = new Ball(500, 400, 20);
   ball3 = new Ball(600, 400, 20);
   ball4 = new Ball(700, 400, 20);
   ball5 = new Ball(100, 400, 20);
   ball6 = new Ball(200, 400, 20);
   ball7 = new Ball(300, 400, 20);
   
}

function draw(){
   background("black")
   Engine.update(engine);
   ground.display();

   ball.display();
   ball2.display();
   ball3.display();
   ball4.display();
   ball5.display();
   ball6.display();
   ball7.display();


  
   
   
drawSprites();
}
