var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Events= Matter.Events;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var ground;
function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width,20);
for(var k=0; k<=width; k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,divisionHeight))

}
for(var j=75;j<=width;j=j+50){
plinkos.push(new Plinko(j,75))

}
for(var j=50;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175))
  
  }
  for(var j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
    
    }
    for(var j=50;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,375))
      
      }
}

function draw() {
  background("black");
  textSize(20);
  Engine.update(engine);  
  ground.display();
  for(var i=0; i<plinkos.length;i++){
    plinkos[i].display();
  }
  for(var j=0; j<particles.length;j++){
  particles[j].display();
  }
  for(var s=0; s<divisions.length;s++){
    divisions[s].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
    score++;
  }
}