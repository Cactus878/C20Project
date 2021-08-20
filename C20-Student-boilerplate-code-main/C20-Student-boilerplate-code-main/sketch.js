
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var wall, wall2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  rock_options = {
    restitution: 0.85
  }
  
   var ball_options = {
    isStatic: false,
    restitution: 0.3,
    frictionAir: 0,
    density: 1.2
  }
   
   var ground_options ={
     isStatic: true
   };

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  wall = Bodies.rectangle(300,330,200,20,ground_options);
  World.add(world, wall);

  wall2 = Bodies.rectangle(375,330,200,20,ground_options);
  World.add(world, wall);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x, wall.position.y, 10,100)
  rect(wall2.position.x, wall2.position.y, 10,100)
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:-5})
  }
}