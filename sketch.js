
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, ball, ground,rightSide,leftSide, pin1, pin2, pin3;
function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    var ball_options = {
      isStatic:false,
      restitution: -0,
      friction:0,
      density:1.2
    }
    var ground_options ={
      isStatic: true
    };
   




    ground = Bodies.rectangle(300,550,2000,10,ground_options);
    World.add(world,ground);
  
    
    ball = Bodies.circle(100,500,20,ball_options);
    World.add(world,ball);
   
    pin1 = Bodies.rectangle(400,500,50,10,ground_options);
    World.add(world,pin1);

    pin2 = Bodies.rectangle(360,470,100,10,ground_options);
    World.add(world,pin2);



    pin3 = Bodies.rectangle(440,470,100,10,ground_options);
   World.add(world,pin3);






    //ground = new Ground(width/2,670,width,20);
    //leftSide = new Ground(300,600,20,120);
    //rightSide = new Ground(600,600,20,120);

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(0);
  
 
    
  

  //ground.display();

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,2000,20);
  rect(pin1.position.x,pin1.position.y,0,20);
  rect(pin2.position.x,pin2.position.y,10,100);
  rect(pin3.position.x,pin3.position.y,10,100);


}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(ball,{x:40,y:-60},{x:35,y:-60});
    }
  }



