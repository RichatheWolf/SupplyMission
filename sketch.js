var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var ground, package1 = 0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	packageSprite = createSprite(helicopterSprite.x, helicopterSprite.y + 55, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255);

	engine = Engine.create();
	world = engine.world;
	
	// Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, {isStatic: true});
 	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if (package1 != 0) {
	packageSprite.x = package1.body.position.x;
	packageSprite.y = package1.body.position.y; 
  }
  drawSprites();
}

function keyPressed() {
 	if (package1 == 0 && keyCode == DOWN_ARROW) {
    	// Look at the hints in the document and understand how to make the package body fall only on the ground
		package1 = new packages(helicopterSprite.x, helicopterSprite.y + 55, 20, 20);
	}
}

