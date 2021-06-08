const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

Engine.run(engine)
obj1=Bodies.rectangle(100,100,50,50)
World.add(world,obj1)
  obj2=Bodies.circle(200,200,10)
  World.add(world,obj2)
  obj3=Bodies.rectangle(100,60,10)
  World.add(world,obj3)
  ground=Bodies.rectangle(200,400,400,20,{isStatic : true})
  World.add(world,ground)
  
  
  
}
function draw()
{
  background(0);
  rectMode(CENTER);
    rect(obj1.position.x,obj1.position.y,50,50);
    circle(obj2.position.x,obj2.position.y,60)
  rect(obj3.position.x,obj3.position.y,200,100)
  
}




