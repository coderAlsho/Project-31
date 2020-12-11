const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Bodies;
var engine,world;

var particles =[];
var plinkos =[];
var divisions=[];
var divisionHeights = 300;
var ground;

var ourengine,ourworld;
var ground,ball;
function setup() {
  createCanvas(872,800);
  //createSprite(400, 200, 50, 50);


  ourengine = Engine.create();
  ourworld = ourengine.world;
  var ground_options = {
 isStatic: true

  }
  ground = new Ground(width/2,height,width,20);
  
  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j<=width;j=j+40){
    plinkos.push(new Plinko(j,75));
  }

  for(var j=15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j = 40; j<=width;j=j+40){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j<=width;j=j+40){
    plinkos.push(new Plinko(j,375));
  }
ground = Bodies.rectangle(200,390,400,20,ground_options)
World.add(ourworld,ground)
//console.log(ground);

var ball_options = {
restitution: 0.8

}

ball = Bodies.circle(200,100,20,ball_options);
World.add(ourworld,ball);
}

function draw() {
  background(0); 
  Engine.update(ourengine)
  rectMode(CENTER);
  Engine.update(engine);
  ground.Display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Partical(random(width/2-30, width/2+30), 10,10));
    //score++;
  }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].Display();
}
   //rect (200,200,50,50)
   rect(ground.position.x,ground.position.y,400,20)
   ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,20,20);
  //drawSprites();
}