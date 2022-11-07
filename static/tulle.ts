// by SamuelYAN
// more works //
// https://twitter.com/SamuelAnn0924
// https://www.instagram.com/samuel_yan_1990/

var seed = Math.random() * 1341;
var t;
var num, vNum;
var radius, mySize;
var sizes = [];

let colors = [];
let colors0 = "281914-1a1a1a-202020-242e30".split("-").map((a) => "#" + a);
let colors7 = "fefefe-fffffb-fafdff-fef9fb-f7fcfe".split("-").map((a) => "#" + a);
let colors8 = "8c75ff-c553d2-2dfd60-2788f5-23054f-f21252-8834f1-c4dd92-184fd3-f9fee2-2E294E-541388-F1E9DA-FFD400-D90368-e9baaa-ffa07a-164555-ffe1d0-acd9e7-4596c7-6d8370-e45240-21d3a4-3303f9-cd2220-173df6-244ca8-a00360-b31016".split("-").map((a) => "#" + a);
let colors11 = "025159-3E848C-7AB8BF-C4EEF2-A67458".split("-").map((a) => "#" + a);
let colors12 = "10454F-506266-818274-A3AB78-BDE038".split("-").map((a) => "#" + a);
let colors13 = "D96690-F28DB2-F2C9E0-89C2D9-88E8F2".split("-").map((a) => "#" + a);
var color_setup1, color_setup2;
let color_bg;
let v_planet = [];

function setup() {
	randomSeed(seed);
	// pixelDensity(5);
	mySize = min(windowWidth, windowHeight);
	// createCanvas(windowWidth, windowHeight);
	createCanvas(mySize, mySize);
	color_setup1 = colors7;
	color_setup2 = random([colors8, colors11, colors8, colors12, colors8, colors13]);
	color_bg = random(colors7);
	colors[0] = random(colors7);
	colors[1] = random(color_setup2);
	colors[2] = random(color_setup2);
	colors[3] = random(color_setup2);
	colors[4] = random(color_setup2);
	background(color_bg);
	num = int(random(20, 5));
	radius = mySize * 0.00;
	for (let a = 0; a < TAU; a += TAU / num) {
		sizes.push(random(0.1, 0.5))
	}
	t = 0;
}

function draw() {
	// background(color_bg);

	randomSeed(seed);
	for (let i = 0; i < num; i++) {
		let a = (TAU / num) * i + t
		let x = radius * sin(a + t) / random(5, 2);
		let y = radius * cos(a + t) / random(2, 5);
		v_planet[i] = createVector(x, y);
	}
	push();
	// translate(random(width / 8 * 3, width / 8 * 5), random(height / 8 * 3, height / 8 * 5));
	translate(width / 2, height / 2);
	for (let j = 0; j < 2; j++) {

		drawingContext.shadowColor = "#ffffff33";
		drawingContext.shadowOffsetX = -1;
		drawingContext.shadowOffsetY = -1;
		drawingContext.shadowBlur = 0;
		drawingContext.shadowColor = "#2f2f2f33";
		drawingContext.shadowOffsetX = 1;
		drawingContext.shadowOffsetY = 1;
		drawingContext.shadowBlur = 0;
		rotate(random(TAU) * j / 10 + t);
		noFill();
		stroke(random(colors));
		strokeWeight(random(0.2, 0.6));

		beginShape();
		// curveVertex(v_planet[0].x, v_planet[0].y);
		for (let i = 0; i < num; i++) {
			let d = random(radius / 2, radius / 8);
			let x_plus = 0.2 * random(-d, d) / t;
			let y_plus = 0.2 * random(-d, d) / t;
			curveVertex(v_planet[i].x + x_plus, v_planet[i].y - y_plus);
		}
		endShape(CLOSE);
	}
	pop();

	t += random(0.001, 0.005);
	if (radius < mySize * 1) {
		radius += random(1, 3);
	} else {
		noLoop();
	}
}

function keyTyped() {
	if (key === "s" || key === "S") {
		saveCanvas("0514_Tulle_1.1_2022", "png");
	}
}
