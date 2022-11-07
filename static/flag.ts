//-- Inktober 05 - Strokes
//-- Siddhartha, Delft, 5th Oct, 2019
int N = 350;
int N2 = 200;

drip2 [] drips = new drip2[N];
drip2 [] drips2 = new drip2[N2];

int count = 0;
int countMax = 150;
color [] colbg = {#d90368, #3b3561, #261c15, #f2f5ea};
color [] colst = {#ffd400, #c84c09, #f05d23, #e00d3e};
int indx;

void setup() {
  // size(1000,1000);
	fullScreen();
  indx = 3;
  background(#000000);
    
  for(int i=0; i<N; ++i){
    drips[i] = new drip2(width/2 + random(-250,250), 50, random(500,800), 1000, 8, 20, colst[indx]);
  }

  for(int i=0; i<N2; ++i){
    drips2[i] = new drip2(width/2 + random(-100,100), 50, random(500,800), 1000, 8, 20, colbg[indx]);
  }
  
}

void draw() {
  if(count<countMax){
    for(int i=0; i<N; ++i){
      drips[i].show(count);
    }
    for(int i=0; i<N2; ++i){
      drips2[i].show(count);
    }
    count++;
  }
}

void mousePressed() {
  fill(0);
  noStroke();
  rect(0,0,width,height);
  
  float R1 = random(50,300);
  float R2 = random(20,100);  
  
  for(int i=0; i<N; ++i){
    drips[i] = new drip2(width/2 + random(-R1, R1), 50, random(500,800), 1000, 8, 20, colst[indx]);
  }

  for(int i=0; i<N2; ++i){
    drips2[i] = new drip2(width/2 + random(-R2, R2), 50, random(500,800), 1000, 8, 20, colbg[indx]);
  }
  
  count = 0;
}

class drip{
  float xc;
  float yc;
  float len;
  float stwt;
  float alpha;
  int steps;
  float jitter;
  float theta;
  float alBase;
  color col;
  
  drip(float x, float y, float l, int step, float st, float al, color c) {
    xc = x;
    yc = y;
    len = l;
    stwt = st;
    alBase = al;
    steps = step;
    float jitter = 10.0;
    col = c;
  }

  void show( int indx ) {
    stwt = 1 + 4.0*(countMax - indx)/float(countMax);
    alpha = alBase + 100*float(indx)/float(countMax);
    // jitter = 6.0*float(countMax - indx)/countMax;
    jitter = 6.0*float(indx)/countMax;
    strokeWeight(stwt);
    stroke(col, alpha);
    theta = noise(xc*0.001,yc*0.001);
    point(xc + random(-jitter, jitter), yc + len*indx/float(countMax) + random(-jitter, jitter)*0.5);
    // point(xc + cos(theta), yc + sin(theta));
    // xc += random(-jitter, jitter);
    // yc = len*indx/float(countMax);
  }
}


class drip2{
  float xc;
  float yc;
  float len;
  float stwt;
  float alpha;
  int steps;
  float jitter;
  float theta;
  float alBase;
  color col;
  
  drip2(float x, float y, float l, int step, float st, float al, color c) {
    xc = x;
    yc = y;
    len = l;
    stwt = st;
    alBase = al;
    steps = step;
    float jitter = 10.0;
    col = c;
  }

  void show( int indx ) {
    stwt = 1 + 15*(countMax - indx)/float(countMax);
    alpha = alBase + 100*float(indx)/float(countMax);
    // jitter = 6.0*float(countMax - indx)/countMax;
    jitter = 1.0 + 6.0*float(indx)/countMax;
    noStroke();
    strokeWeight(stwt);
    fill(col, alpha);
    theta = noise(xc*0.001,yc*0.001);
    // point(xc + random(-jitter, jitter), yc + len*indx/float(countMax) + random(-jitter, jitter)*0.5);
    ellipse(xc + random(-jitter, jitter), yc + len*indx/float(countMax) + random(-jitter, jitter)*0.5, stwt, stwt);
    // point(xc + cos(theta), yc + sin(theta));
    // xc += random(-jitter, jitter);
    // yc = len*indx/float(countMax);
  }
}
