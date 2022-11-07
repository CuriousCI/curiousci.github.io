float n = 0; // noise input
PGraphics bg; // background
PGraphics tree;
ArrayList <PVector> leafs;
float minHue, maxHue;


/*---------------*/


void setup() {
  size(900, 700);
  colorMode(HSB);
  noLoop();
  noStroke();
  
  createBackground(); 
  tree = createGraphics(width, height);  
  leafs = new ArrayList<PVector>();  
}


/*---------------*/


void draw() {     
  image(bg, 0, 0); // display background  
  createTree();
  setHue();
  drawLeafs(10, 250, 0, 1);  // big smooth leafs
  image(tree, 0, 0);  //display tree    
  drawLeafs(0, 20, 10, 40);  // small rigid leafs
  ground();  
}


/*---------------*/


void mousePressed() {
  redraw();
   
  //delete leafs
  for (int i = leafs.size(); i >= 0; i--) {
    leafs.remove(0);
  }
}


/*---------------*/


void createBackground() {
  bg = createGraphics(width, height);
  bg.beginDraw();
  bg.noStroke();
  for (float diam = 1.5*width; diam > 0.5*width; diam -= 20) {
    bg.fill(map(diam, 0.5*width, 1.5*width, 255, 210));
    bg.ellipse(width/2, height/2, diam, diam);
  }
  bg.endDraw();
}


/*---------------*/


void setHue() {
  float rdn0 = random(255);
  float rdn1 = random(255);
  minHue = min(rdn0, rdn1);
  maxHue = max(rdn0, rdn1);
}


/*---------------*/


void createTree() {
  tree.beginDraw();
  tree.noStroke();
  tree.background(0, 0);  // clear PGraphics
  for (int i = 0; i < 3; i++) {
    tree.fill(map(i, 0, 2, 60, 20));
    branch(width/2, height, 70, -HALF_PI, 150, 0);
  }
  tree.endDraw();  
}


/*---------------*/


void branch(float x, float y, float bSize, float theta, float bLength, float pos) {
  n += 0.01;  // increment noise input
  float diam = lerp(bSize, 0.7*bSize, pos/bLength);  // gradually reduce the diameter
  diam *= map(noise(n), 0, 1, 0.4, 1.6);  // multiply by noise to add variation
  
  tree.ellipse(x, y, diam, diam);
  if (bSize > 0.6) {
    if (pos < bLength) {
      x += cos(theta + random(-PI/10, PI/10));
      y += sin(theta + random(-PI/10, PI/10));
      branch(x, y, bSize, theta, bLength, pos+1);
    } else {
      leafs.add(new PVector(x, y));  // add a leaf at the intersection
      boolean drawleftBranch = random(1) > 0.1;
      boolean drawrightBranch = random(1) > 0.1;
      if (drawleftBranch) branch(x, y, random(0.5, 0.7)*bSize, theta - random(PI/15, PI/5), random(0.6, 0.8)*bLength, 0);
      if (drawrightBranch) branch(x, y, random(0.5, 0.7)*bSize, theta + random(PI/15, PI/5), random(0.6, 0.8)*bLength, 0);
      
      if (!drawleftBranch && !drawrightBranch) {  // if none of the branchs are drawn, draw a tip
        tree.pushMatrix();
        tree.translate(x, y);
        tree.rotate(theta);
        tree.quad(0, -diam/2, 2*diam, -diam/6, 2*diam, diam/6, 0, diam/2);
        tree.popMatrix();
      }
    }
  }
}


/*---------------*/


void drawLeafs(float minDiam, float maxDiam, float minAlpha, float maxAlpha) {
  for (int i = 0; i < leafs.size(); i++) {
    float h = map(i, 0, leafs.size(), minHue, maxHue);
    float s = 255;
    float b = 255;
    float a = random(minAlpha, maxAlpha);
    fill(h, s, b, a);
    float diam = random(minDiam, maxDiam);
    float jitterX = random(-30, 30);
    float jitterY = random(-30, 30);
    ellipse(leafs.get(i).x + jitterX, leafs.get(i).y + jitterY, diam, diam);
  }
}


/*---------------*/


void ground() {
  fill(20);
  beginShape();
  vertex(0, height);
  for (int i = 0; i <= width; i += 50) {
    vertex(i, map(noise(n), 0, 1, height - 30, height));
    n += 0.1;
  }
  vertex(width, height);
  endShape();
}


