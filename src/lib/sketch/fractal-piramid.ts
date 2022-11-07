let d = (a, b, x, y) => sqrt((a-x)**2 + (b-y)**2)
let h = 1080;
let start_p = [];
let c = [0,0];
let iters = 5000;

let mult_d   = 0.01
let mult_d_2 = 0.01
	
let slider1;
let slider2;
let button;

function setup() {
	createCanvas(h, h);
	background("#FFEDDA");
	start_p = polygonArr(500, 3, -PI/6)
	stroke(0,100)
	strokeWeight(0.5)
	
	slider1 = createSlider(0, 0.5, 0.01,0);
  slider1.position(10, 10);
  slider1.style('width', '380px');
	
	slider2 = createSlider(0, 0.5, 0.01,0);
  slider2.position(10, 40);
  slider2.style('width', '380px');
	
	button = createButton('erase');
  button.position(10, 70);
  button.mousePressed(changeBG);
}

function draw() {
	mult_d = slider1.value();
	mult_d_2 = slider2.value();
	
	translate(h/2, h/2 + 50)
	for(let i = 0; i< iters;i+=1){
		let target = random(start_p)
		c = choose_new_pont2(...target, ...c)
		point(...c)
	}
}


function choose_new_pont(ta,tb, a, b) {
	let mult_d = 0.0005
	let td = d(ta,tb, a, b)
	let r =  randomGaussian(td/2, td*mult_d);
	
	let new_p_x = r*(ta - a)/td
	let new_p_y = r*(tb - b)/td
	
	return [new_p_x, new_p_y]
}

function choose_new_pont2(ta,tb, a, b) {

	let td = d(ta,tb, a, b)
	let r = td/2 + cos(td*mult_d)*td*mult_d_2/(0 + sin(td*mult_d+1))
	
	let new_p_x = -r*(ta - a)/td
	let new_p_y = -r*(tb - b)/td
	
	return [new_p_x, new_p_y]
}

function polygonArr(radius, npoints, angZero) {
  let arr = []
  let angle = TWO_PI / npoints;
  for (let a = angZero; a < TWO_PI + angZero + 0.00001; a += angle) {
    arr.push([cos(a) * radius, sin(a) * radius])
  }
  return arr
}


function changeBG() {
  background("#FFEDDA");
  //background(val);
}
