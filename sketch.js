
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin,ground;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(600,570,1200,20);

	paper= new Paper(60,450,40);

	dustbin= new Dustbin(980,height-135,150,180);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  Engine.update(engine);

  paper.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:195,y:-190});
	}
}
