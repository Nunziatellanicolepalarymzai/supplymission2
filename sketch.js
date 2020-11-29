var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-5, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
var x=600;
var y=680;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 leftbody = Bodies.rectangle(x-100,y-50,20,100, {isStatic:true} );
 	World.add(world, leftbody);

	 rightbody = Bodies.rectangle(x+100,y-50,20,100, {isStatic:true} );
 	World.add(world, rightbody);

	 basebody = Bodies.rectangle(x,y,200,20, {isStatic:true} );
 	World.add(world, basebody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
rect(leftbody.position.x,leftbody.position.y,20,100)
rect(rightbody.position.x,rightbody.position.y,20,100)
rect(basebody.position.x,basebody.position.y,200,20)

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
if(keyCode===LEFT_ARROW){
	helicopterSprite.x=helicopterSprite.x-20;
	 translation={x:-20,y:0}
	 Matter.Body.translate(packageBody, translation)

}





if(keyCode===RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+20;
	translation={x:+20,y:0}
	Matter.Body.translate(packageBody, translation)



}

}