// by SamuelYAN
// more works //
// https://twitter.com/SamuelAnn0924
// https://www.instagram.com/samuel_yan_1990/

var seed = Math.random() * 1000;
var k = 0.8515,
	l = 0.65;
var th = 0,
	seg = 0.01;
var r;
let angle;
let colors1 = "fff462BF-a4637940-feb640BF-ffdf7cb3-fdefc080"
	.split("-")
	.map((a) => "#" + a);
let colors2 = "fff462-a46379-feb640-ffdf7c-fdefc0"
	.split("-")
	.map((a) => "#" + a + "00");
let colorbg = "2c363f".split("-").map((a) => "#" + a);
let colorbg2 = "2c363f07".split("-").map((a) => "#" + a);
let mySize;

function setup() {
	mySize = min(windowWidth, windowHeight);
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100, 100);
	// pixelDensity(5);
	background(colorbg);
	angle = random(TAU);
	let filter = new makeFilter();
}

function makeFilter() {
	randomSeed(seed);
	// noiseのフィルターをつくる
	colorMode(HSB, 360, 100, 100, 100);
	drawingContext.shadowColor = color(0, 0, 5, 10);
	overAllTexture = createGraphics(windowWidth, windowHeight);
	overAllTexture.loadPixels();
	for (var i = 0; i < width; i++) { // noprotect
		for (var j = 0; j < height; j++) {
			overAllTexture.set(
				i,
				j,
				color(208, 18, 21, noise(i / 3, j / 3, (i * j) / 100) * random(1))
			);
		}
	}
	overAllTexture.updatePixels();
}


function draw() {
	randomSeed(seed);
	r = mySize/random(10,50);
	background(colorbg2);
	var T = (1 - k) / k;
	noStroke();
	push();
	translate(width / 2, height / 2);

	for (let i = 0; i < 200; i += random(0.75)) {
		k = random(0.75, 0.8515);
		l = random(0.45, 0.65);
		//strokeWeight(random(1));
		fill(random(colors1));
		push();
		rotate(random(TAU) + random(angle));
		rectMode(CENTER);
		rect(random(-i * 5, i *5) + r * ((1 - k) * cos(th) + l * k * cos(T * th)),
			random(-i * 5, i * 5) + r * ((1 - k) * sin(th) - l * k * sin(T * th)),
			random(-r / 4, r / 4),
			random(-r / 2, r / 2),
			random(1, 2));
		pop();
	}
	pop();
	th += seg;
	angle += TAU/random(300,600);
	image(overAllTexture, 0, 0);
	// r -= 0.01;
}

function keyTyped() {
	if (key === "s" || key === "S") {
		//noLoop();
		saveCanvas("GENUARY 2022_0103_Space", "png");
	}
}
