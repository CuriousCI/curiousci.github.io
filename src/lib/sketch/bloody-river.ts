let particle = [];
let particleNum = 5000;
let magnity = 0;
let speed = 0.001;
let r = 10;
let colorRandom = [];
let strokeRandom = [];
let weights = [];

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(255);
    colorMode(HSB);
    let h1 = random(100,355);
    let h2 = h1-150;
    noStroke();
    fill(color(h2+random(0,10), 5, 98));
    frameRate(30);
    colorRandom = [color(h2+random(0,10),67,34),//dark blue
        color(h2,24,86),// bright blue
    color(h1, 75, 80),// red
    color(h2+random(0,10) , 56, 62),// normal blue
    color(h1+random(0,10) , 93, 40),// dark red
    color(h1+random(0,10) , 87, 64)//  medium red
    ]

    strokeRandom = [1,1,0.1,4,3,2]
    weights = [5, 2, 1 , 1, 3, 1];
    rect(width/4,0,width/2,height);
    addP();


}

function draw() {
    push();
    translate(width/2,height/2);
    for(let j = 0; j < particle.length; j++){
        particle[j].update();
        particle[j].display();
    }
    magnity +=speed;
    pop();

    for(let j = 0; j < 1000; j++){
        noFill();
        stroke(color("#F1FAEE"));
        point(random(width),random(height));
    }
    // seperation();

}

function addP(number){

    for (let i = 0; i< particleNum; i++){
        let uni= new drawParticle(random(-windowWidth/4,windowWidth/4),random(-height/2,height/2));
        particle.push(uni);
    }

}

function seperation(){
    let step = height/4;
    // rectMode(CENTER);
    fill(255);
    noStroke();
    // for(let i = 0; i < 4; i++){
    //  rect(0,step*i,width,10);
    // }
    rect(width/4,0, 10, height);
}


function randomWeight(elements,weights){
    let sum = 0;

    for(let i=0;i < elements.length; i++)
    {
        sum += weights[i];
    }

    let rr = random(0,sum);

    for(let j=0;j < elements.length;j++)
    {

        if (weights[j] >= rr)
            {
                return elements[j];
            }
            rr -= weights[j];
    }

}

class drawParticle {

    constructor(x, y){
        this.pos = new createVector(x,y);
        this.vel = new createVector();
        this.weight =randomWeight(strokeRandom,weights);
        this.color = randomWeight(colorRandom,weights);
        this._noiseZ = 0.1;

    }

    update(){
        let noiseScale = 0.001;
        let noiseStrength =8;
        let xoffset = 1
        let yoffset = 2

        let noiseValue =  noise(this.pos.x*noiseScale+xoffset,this.pos.y*noiseScale+yoffset);
        let ang = noiseValue*2*PI*noiseStrength;

        this.pos.x += cos(ang)*magnity;
        this.pos.y += sin(ang)*magnity;
        // this._noiseZ += 0.001;


        //     this.vel.set(cos(ang)*magnity,sin(ang)*magnity);
        //     this.pos.add(this.vel);
        if(this.pos.x<-width/2 || this.pos.x > width/2 || this.pos.y < -height/2 || this.pos.y > height/2){
            this.pos.set(random(-width/2,width/2), random(-height/2,height/2));
        }

    }

    display(){
        fill(this.color);
        noStroke();
        // strokeWeight(this.color);
        circle(this.pos.x,this.pos.y,this.weight);
    }

}

function mousePressed(){

    for(let j = 0; j < particleNum/100; j++){
        fill(color(255),random(50,100))
        noStroke();
        circle(random(width),random(height),random(0,10));
    }
}

