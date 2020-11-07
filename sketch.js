const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,side1,side2,bottom;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();	
	world = engine.world;

	ground = new Ground(800, 650);

	bottom = new Box(1150, 630, 219, 20);
	side1 = new Box(1050, 600, 20, 80);
	side2 = new Box(1250, 600, 20, 80);

	ball = new Ball(200, 450, 40);

	Engine.run(engine);
}

function draw() {	
  background("white");
  drawSprites();
  Engine.update(engine);

  ball.display();
  ground.display();
  bottom.display();
  side1.display();
  side2.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position, {x:85, y:-85});

	}
}