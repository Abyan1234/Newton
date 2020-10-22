
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var roof;
var bob1,bob2,bob3,bob4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof(300,200,270,20);
	roof1 = new Roof(300,200,20,20);
	roof2 = new Roof(340,200,20,20);
	roof3 = new Roof(260,200,20,20);
	roof4 = new Roof(380,200,20,20);
	roof5 = new Roof(220,200,20,20);
	bob1= new Bob(300,450,40);
	bob2=new Bob(340,450,40);
	bob3=new Bob(260,450,40);
	bob4=new Bob(380,450,40);
	bob5=new Bob(220,450,40);
	rope =new Rope(bob1.body,roof1.body);
	rope1 =new Rope(bob2.body,roof2.body);
	rope2 =new Rope(bob3.body,roof3.body);
	rope3 =new Rope(bob4.body,roof4.body);
	rope4 =new Rope(bob5.body,roof5.body);



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  


  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
  rope1.display();
  rope2.display();	
  rope3.display();
  rope4.display();
  
 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-100,y:200});

  
	}
}



