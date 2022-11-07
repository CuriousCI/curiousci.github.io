let _minWidth;
let _palette =
["C6C8D7","026877","D1A781","2F9184","ECCFCB","EDE9CC","AA2D3A"];
let _points;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 255);
  frameRate(30);
  setObject();
}

function setObject() {
  _minWidth = min(width, height) * 0.8;
  shuffle(_palette, true);
  noStroke();
  _points = new Points();
  setBg();
}

let _bg;
function setBg() {
  _bg = createGraphics(windowWidth, windowHeight);
  _bg.noStroke();
  _bg.colorMode(HSB, 360, 100, 100, 255);
  let d = _bg.pixelDensity();
  _bg.loadPixels();
  for (let x = 0; x < _bg.width * d; x++) {
    for (let y = 0; y < _bg.height * d; y++) {
      let index = (y * _bg.width * d + x) * 4;
      let brt = int(random(255));
      let alp = 50;
      _bg.pixels[index] = brt;
      _bg.pixels[index+1] = brt;
      _bg.pixels[index+2] = brt;
      _bg.pixels[index+3] = alp;
    }
  }
  _bg.updatePixels();
}

class Points {
  constructor() {
    this.numPoints = 20;//14;
    this.noiseSeedInit = [];
    for (let i = 0; i < this.numPoints; i++) {
      this.noiseSeedInit[i] = [random(1000), random(1000)];
    }

    this.noiseSpeed = [0.0015, 0.001/3];//[0.0015, 0.0015];
    this.noiseFreq = [3, 3];
  }

  update() {
    this.aryPoints = [];

    for (let i = 0; i < this.numPoints; i++) {
      // let x = _minWidth / 2 * sin(2*PI * this.noiseFreq[0] * noise(this.noiseSpeed[0] * frameCount + this.noiseSeedInit[i][0]));
      // let y = _minWidth / 2 * sin(2*PI * this.noiseFreq[1] * noise(this.noiseSpeed[1] * frameCount + this.noiseSeedInit[i][1]));
      // this.aryPoints[i] = createVector(x, y);

      let r = _minWidth * 0.6 * sin(2*PI * this.noiseFreq[0] * noise(this.noiseSpeed[0]   * frameCount + this.noiseSeedInit[i][0]));
      let ang = 2*PI * sin(2*PI * this.noiseFreq[1] * noise(this.noiseSpeed[1] * frameCount + this.noiseSeedInit[i][1]));
      this.aryPoints[i] = createVector(r * cos(ang), r * sin(ang));
    }

    this.aryPoints.push(createVector(-width*1, -height*1));
    this.aryPoints.push(createVector(width*1, -height*1));
    this.aryPoints.push(createVector(width*1, height*1));
    this.aryPoints.push(createVector(-width*1, height*1));
  }
}

function calcDelaunayDiagram(aryPoints) { //return triangle array of Delaunay diagram
  let aryTriangles = [];
  let baseTriangle = getBaseTriangle();

  aryTriangles[0] = baseTriangle;
  let currentAryPoints = [];
  currentAryPoints = [[baseTriangle.xy1, -1], [baseTriangle.xy2, -1], [baseTriangle.xy3, -1]];
  for (let i = 0; i < aryPoints.length; i++) {
    let aryTrianglesLength = aryTriangles.length;
    
    let aryAddTriangles = [];
    for (let j = aryTrianglesLength - 1; j >= 0; j--) {
      if (checkPointInCircumcircle(aryTriangles[j], [aryPoints[i], i]) == true) {
        let triangel1 = new Triangle(aryPoints[i], aryTriangles[j].xy1, aryTriangles[j].xy2, i, aryTriangles[j].i1, aryTriangles[j].i2);
        let triangel2 = new Triangle(aryPoints[i], aryTriangles[j].xy2, aryTriangles[j].xy3, i, aryTriangles[j].i2, aryTriangles[j].i3);
        let triangel3 = new Triangle(aryPoints[i], aryTriangles[j].xy3, aryTriangles[j].xy1, i, aryTriangles[j].i3, aryTriangles[j].i1);
        aryTriangles.splice(j, 1);
        if (checkTriangleIncludePoints(triangel1, currentAryPoints) == true) {
          triangel1.includePoint = true;
        }
        if (checkTriangleIncludePoints(triangel2, currentAryPoints) == true) {
          triangel2.includePoint = true;
        }
        if (checkTriangleIncludePoints(triangel3, currentAryPoints) == true) {
          triangel3.includePoint = true;
        }
        aryAddTriangles.push(triangel1);
        aryAddTriangles.push(triangel2);
        aryAddTriangles.push(triangel3);
      }
    }
    aryAddTriangles = removeDuplicate(aryAddTriangles);

    for (let i = 0; i < aryAddTriangles.length; i++) {
      aryTriangles.push(aryAddTriangles[i]);
    }

    currentAryPoints.push([aryPoints[i], i]);
  }

  for (let i = aryTriangles.length - 1; i >= 0; i--) {
    if (aryTriangles[i].includePoint == true ||
      checkIncludeBasetriangle(aryTriangles[i]) == true) {
      aryTriangles.splice(i, 1);
    }
  }

  return aryTriangles;
}

function removeDuplicate(aryTriangles) {
  let newAryTriangles = aryTriangles;
  for (let i = newAryTriangles.length-1; i >= 1; i--) {
    let newAryIndex_i = [newAryTriangles[i].i1, newAryTriangles[i].i2, newAryTriangles[i].i3];
    for (let j = 0; j < i; j++) {
      let newAryIndex_j = [newAryTriangles[j].i1, newAryTriangles[j].i2, newAryTriangles[j].i3];
      newAryIndex_i.sort();
      newAryIndex_j.sort();
      if (
        newAryIndex_i[0] == newAryIndex_j[0] &&
        newAryIndex_i[1] == newAryIndex_j[1] &&
        newAryIndex_i[2] == newAryIndex_j[2]
      ) {
        newAryTriangles.splice(i, 1);
        break;
      }
    }
  }

  return newAryTriangles;
}

function checkIncludeBasetriangle(thisTriangle) {
  let check = false;
  if (thisTriangle.i1 < 0 || thisTriangle.i2 < 0 || thisTriangle.i3 < 0) {
    check = true;
  }

  return check;
}

function checkTriangleIncludePoints(thisTriangle, aryPoints) { //aryPoints = [[xy, index], ...]
  let inCircle = false;
  for (let i = 0; i < aryPoints.length; i++) {
    if (checkPointInCircumcircle(thisTriangle, aryPoints[i]) == true) {
      inCircle = true;
      break;
    }
  }

  return inCircle;
}

function checkPointInCircumcircle(thisTriangle, point) { //point = [xy, index]
  let inCircle = false;
  if (thisTriangle.i1 != point[1] && thisTriangle.i2 != point[1] && thisTriangle.i3 != point[1]) {
    let distance = p5.Vector.dist(thisTriangle.xyCentCircle, point[0]);
    if (distance < thisTriangle.rCircle) {
      inCircle = true;
    }
  }

  return inCircle;
}

function getBaseTriangle() { //a triangle including all points
  let x = 4;
  let baseXy1 = createVector(-width*x, -height*x);
  let baseXy2 = createVector(width*x, -height*x);
  let baseXy3 = createVector(0, height*x);

  let baseTriangle = new Triangle(baseXy1, baseXy2, baseXy3, -1, -2, -3);

  return baseTriangle;
}

class Triangle {
  constructor(xy1, xy2, xy3, i1, i2, i3) { //xy = vector, i = index of each point in array points
    this.xy1 = xy1;
    this.xy2 = xy2;
    this.xy3 = xy3;
    this.i1 = i1;
    this.i2 = i2;
    this.i3 = i3;
    let circumcircle = calcCircumcircle(this.xy1, this.xy2, this.xy3);
    this.xyCentCircle = circumcircle[0];
    this.rCircle = circumcircle[1];
    this.includePoint = false;
  }
}

function calcCircumcircle(xy1, xy2, xy3) { //[center vertor of circumcircle, radius of circumcircle]
  //c = 2 { (x2 - x1)(y3 - y1) - (y2 - y1)(x3 - x1) }
  //x = { (y3 - y1)(x2**2 - x1**2 + y2**2 - y1**2) + (y1 - y2)(x3**2 - x1**2 + y3**2 - y1**2) } / c
  //y = { (x1 - x3)(x2**2 - x1**2 + y2**2 - y1**2) + (x2 - x1)(x3**2 - x1**2 + y3**2 - y1**2) } / c

  let c = 2 * ((xy2.x - xy1.x) * (xy3.y - xy1.y) - (xy2.y - xy1.y) * (xy3.x - xy1.x));
  let centx = ((xy3.y - xy1.y) * (xy2.x**2 - xy1.x**2 + xy2.y**2 - xy1.y**2) + (xy1.y - xy2.y) * (xy3.x**2 - xy1.x**2 + xy3.y**2 - xy1.y**2)) / c;
  let centy = ((xy1.x - xy3.x) * (xy2.x**2 - xy1.x**2 + xy2.y**2 - xy1.y**2) + (xy2.x - xy1.x) * (xy3.x**2 - xy1.x**2 + xy3.y**2 - xy1.y**2)) / c;
  let xyCent = createVector(centx, centy);
  let r = p5.Vector.dist(xy1, xyCent);

  return [xyCent, r];
}

function calculateCross(xy1, xy2, xy3, xy4) { //cross point of line xy1-xy2 and xy3-xy4
  //ax+by+c=0
  let a1 = xy1.y - xy2.y;
  let b1 = xy2.x - xy1.x;
  let c1 = xy1.x * xy2.y - xy2.x * xy1.y;
  let a2 = xy3.y - xy4.y;
  let b2 = xy4.x - xy3.x;
  let c2 = xy3.x * xy4.y - xy4.x * xy3.y;
  //cross point of line xy1-2 and line xy3-4
  let xcross = (b1*c2 - b2*c1) / (a1*b2 - a2*b1);
  let ycross = (a2*c1 - a1*c2) / (a1*b2 - a2*b1);
  let cross = createVector(xcross, ycross);

  return cross;
}

function calcInnerCircleCenter(xy1, xy2, xy3) { //Triangle xy1 xy2 xy3
  let xy_1_2 = p5.Vector.sub(xy2, xy1).normalize();
  let xy_1_3 = p5.Vector.sub(xy3, xy1).normalize();
  let midAngleXy1 = p5.Vector.add(xy_1_2, xy_1_3);

  let xy_2_3 = p5.Vector.sub(xy3, xy2).normalize();
  let xy_2_1 = p5.Vector.sub(xy1, xy2).normalize();
  let midAngleXy2 = p5.Vector.add(xy_2_3, xy_2_1);

  let xyCent = calculateCross(xy1, p5.Vector.add(xy1, midAngleXy1), xy2, p5.Vector.add(xy2, midAngleXy2));

  return xyCent;
}

function calcDistPointLine(xy_a, xy_b, xy_c) { //distance between point xy_a and line through xy_b and xy_c
  //ax + by + c = 0
  //a = y1 - y2
  //b = x2 - x1
  //c = x1*y2 - x2*y1
  //dist = abs(a*x0 + b*y0 + c) / (a**2 + b**2)**0.5
  let d;
  if (xy_b.x == xy_c.x) { d = abs(xy_a.x - xy_b.x); }
  else {
    let a = xy_b.y - xy_c.y;
    let b = xy_c.x - xy_b.x;
    let c = xy_b.x * xy_c.y - xy_c.x * xy_b.y;
    d = abs(a * xy_a.x + b * xy_a.y + c) / (a**2 + b**2)**0.5;
  }

  return d;
}

function chaikin(aryXy, type) { //length >= 3, type=true -> CLOSE
  let ratio = 0.75;
  let newAryXy = [];
  if (type == true) {
    for (let i = 0; i < aryXy.length; i++) {
      let previ;
      if (i == 0) { previ = aryXy.length-1; }
      else { previ = i - 1; }
      let xy1 = p5.Vector.lerp(aryXy[previ], aryXy[i], ratio);
      let nexti;
      if (i == aryXy.length-1) { nexti = 0; }
      else { nexti = i + 1; }
      let xy2 = p5.Vector.lerp(aryXy[nexti], aryXy[i], ratio);
      newAryXy.push(xy1);
      newAryXy.push(xy2);
    }
  } else {
    newAryXy.push(aryXy[0]);
    for (let i = 1; i < aryXy.length-1; i++) {
      let previ = i - 1;
      let xy1 = p5.Vector.lerp(aryXy[previ], aryXy[i], ratio);
      let nexti = i + 1;
      let xy2 = p5.Vector.lerp(aryXy[nexti], aryXy[i], ratio);
      newAryXy.push(xy1);
      newAryXy.push(xy2);
    }
    newAryXy.push(aryXy[aryXy.length-1]);
  }
  
  return newAryXy;
}

class voronoi {
  constructor(centXy) {
    this.aryXy = [];//[[vector, angle], ...]
    this.centXy = centXy;
  }
}

function getVoronoi(aryTriangles) {
  let aryVoronoi = [];
  for (let i = 0; i < _points.aryPoints.length; i++) {
    aryVoronoi[i] = new voronoi(_points.aryPoints[i]);
  }

  for (let i = 0; i < aryTriangles.length; i++) {
    aryVoronoi[aryTriangles[i].i1].aryXy.push([aryTriangles[i].xyCentCircle, p5.Vector.sub(aryTriangles[i].xyCentCircle, aryTriangles[i].xy1).heading()]);
    aryVoronoi[aryTriangles[i].i2].aryXy.push([aryTriangles[i].xyCentCircle, p5.Vector.sub(aryTriangles[i].xyCentCircle, aryTriangles[i].xy2).heading()]);
    aryVoronoi[aryTriangles[i].i3].aryXy.push([aryTriangles[i].xyCentCircle, p5.Vector.sub(aryTriangles[i].xyCentCircle, aryTriangles[i].xy3).heading()]);
  }

  for (let i = 0; i < aryVoronoi.length; i++) {
    aryVoronoi[i].aryXy.sort(function(a, b) {
      return a[1] - b[1];
    });
  }

  return aryVoronoi;
}

function draw() {
  background(100);
  _points.update();
  let aryTriangles = [];
  aryTriangles = calcDelaunayDiagram(_points.aryPoints);
  let aryVoronoi = [];  
  aryVoronoi = getVoronoi(aryTriangles);
  push();  
  for (let i = 0; i < aryVoronoi.length; i++) {
    if (aryVoronoi[i].aryXy.length < 3) { continue; }
    let newAryXy = [];
    for (let j = 0; j < aryVoronoi[i].aryXy.length; j++) {
      newAryXy[j] = aryVoronoi[i].aryXy[j][0];
    }
    let numRecursive = 4;
    for (let j = 0; j < numRecursive; j++) {
      newAryXy = chaikin(newAryXy, true);
    }
    let col = color("#"+_palette[i%_palette.length]);
    let col2 = color("#"+_palette[(i+1)%_palette.length]);
    fill(col);
    beginShape();
    vertex(aryVoronoi[i].centXy.x, aryVoronoi[i].centXy.y)
    fill(col2);
    for (let j = 0; j < newAryXy.length; j++) {
      vertex(newAryXy[j].x, newAryXy[j].y);
    }
    vertex(newAryXy[0].x, newAryXy[0].y);
    endShape(CLOSE);
  }
  pop();
  image(_bg, -width/2, -height/2, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setObject();
}
