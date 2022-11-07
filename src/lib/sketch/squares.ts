function Particle(posX, posY)  {
  this.posX = posX;
  this.posY = posY;
  this.changePosX = random(-2,2);
  this.changePosY = random(-2,2);
  this.color = color(random(55,155),155,100);
  this.lifespan = 255;
} 

Particle.prototype = {
constructor: Particle,
  move : function() {
    this.posX += this.changePosX;
    this.posY += this.changePosY;
    this.lifespan -= 3;
  }
};

var particles = []; 

function setup() {
  createCanvas (500,500);
}

function draw(){
  background(0);
  noStroke();
  particles.push(new Particle(mouseX,mouseY));
  for (var i = 0; i < particles.length; i++){
    if (particles[i].lifespan <= 0){
      particles.splice(i,1);
    } else {
      noFill();
      stroke(
        red(particles[i].color), 
        green(particles[i].color),
        blue(particles[i].color),
        particles[i].lifespan
      );
       push();
       translate(width/2,height/2);
       //rotate(frameCount / 100.0);
       rectMode(CENTER);
       rect(0,0,particles[i].posX, particles[i].posY);
       pop();
       particles[i].move();
    }
  }
}
