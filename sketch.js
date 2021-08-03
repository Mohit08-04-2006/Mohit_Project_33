const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var particle;

var divisions = [];
var plinkos = [];
var divisionHeight = 200;

var score = 0;
var count = 0;

var gameState = "PLAY";
var END;

function setup() {
  var canvas = createCanvas(480,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,570,width,10);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k,470, 10, divisionHeight));
  }


   for (var j = 30; j <=width; j=j+50) { 
      plinkos.push(new Plinko(j,50));
   }

   for (var j = 60; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,100));
   }

    for (var j = 30; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,150));
   }

    for (var j = 60; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,200));
   }

   for (var j = 30; j <=width; j=j+50){
     plinkos.push(new Plinko(j,250));
   }
   
  }

function draw() {
  background(0); 
  textSize(20);
  fill("skyblue");
  text("score = "+score,10,20);
  text("500",20,390);
  text("500",100,390);
  text("100",180,390);
  text("100",260,390);
  text("200",340,390);
  text("200",420,390);
  //text("x="+mouseX,420,320);
  //text("y="+mouseY,420,350);

  Engine.update(engine);

  ground.display();

  if ( gameState == "END") {
    textSize(100);
    text("GameOver", 150, 250);
     
   }
 
  if(particle!=null){
    particle.display();
      
    if (particle.body.position.y>380){
     if (particle.body.position.x < 155) {
       score=score+500;      
       particle=null;

       if ( count>= 5) gameState = "END";

      }

     else if (particle.body.position.x < 315 && particle.body.position.x > 165 ) {
       score = score + 100;
       particle=null;

       if ( count>= 5) gameState = "END";

      }

     else if (particle.body.position.x < 325 && particle.body.position.x > 475 ){
       score = score + 200;
       particle=null;

       if ( count>= 5)  gameState = "END";

      }              
    }
  }
   
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}

function keyPressed(){
if (keyCode = DOWN_ARROW){
  if(gameState=="PLAY"){
    console.log("hi");
    count++;
    particle=new Particles(mouseX, 10, 10, 10); 
  }
 }   
}