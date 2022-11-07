import p5, { Vector } from 'p5';

export default new p5((sketch) => {
    sketch.setup = () => {
        sketch.createCanvas(200, 200)
    }

    sketch.draw = () => {


    }

});

// let colors = "cdf2ba-77af5b-76a855-c4e878-e8f78a-dded63-f1f4e6".split("-").map(a => "#" + a)
//
// class Particle {
//
//     constructor(args) {
//         let def = {
//             p: Vector,
//             v: Vector,
//             a: Vector,
//             r: 4,
//             w: 10,
//             color: color(255),
//             child: false,
//             lastP: Vector,
//         }
//         Object.assign(def, args)
//         Object.assign(this, def)
//     }
//     draw() {
//         push()
//         translate(this.p.x, this.p.y)
//         rotate(this.v.heading() - PI * 1.5)
//         fill(this.color)
//         rect(0, 0, this.r, this.v.y)
//         rectMode(CENTER)
//         rect(this.r / 2, this.v.y, this.r + 2, 2)
//         rect(this.r / 2, 0, this.r + 2, 2)
//         if (random() > 0.7) {
//             let count = int(random(2, 4))
//             for (var i = 0; i < count; i++) {
//                 push()
//                 rotate((i * 2 - 1) / 1.2 * this.v.heading() / (1 + random(2)) * random(-1, 1) + PI * 0.5)
//                 fill(random(colors))
//                 beginShape()
//                 let ww = this.v.y + random(-5, 5)
//                 vertex(0, 0)
//                 curveVertex(ww / 2, 5)
//                 vertex(ww, 0)
//                 curveVertex(ww / 2, -5)
//                 endShape(CLOSE)
//                 pop()
//
//             }
//         }
//
//         for (var o = 0; o < this.r; o += 1) {
//             let c = color(random(colors))
//             c.setAlpha(random(80))
//             stroke(c)
//             line(o, 0, o, this.v.y / random(1.5, 2.5))
//
//         }
//
//         pop()
//     }
//     update() {
//         this.lastP = this.p.copy()
//         this.p.add(this.v)
//         this.v.add(this.a)
//         this.v.mult(0.99)
//         if (this.p.y < -50) {
//             this.dead = true
//         }
//         if (this.child) {
//             this.r -= 4
//             if (this.r < 1) {
//                 this.dead = true
//             }
//         }
//     }
// }
//
//
// let particles = []
//
// function setup() {
//     //frameRate(10)
//     createCanvas(1112, 834);
//     background(50)
//     fill("#222");
//     noStroke()
//     rect(0, 0, width, height)
//
//     drawingContext.shadowColor = color(30, 70, 80, 235);
//     drawingContext.shadowBlur = 30;
//     for (var i = 0; i < 50; i++)	generateNewBamboo()
// }
//
// function generateNewBamboo() {
//     let p = new Particle({
//         p: createVector(random(width), height + random(50, 100)),
//         v: createVector(random(-6, 6), random(-30, -100)),
//         r: random(8, 18),
//         w: random(20, 30),
//         color: random(colors)
//     })
//     if (random() < 0.1) {
//         p.v.mult(0.5)
//         p.r *= 3
//         p.child = true
//         p.color = color("#e5c677")
//     }
//     particles.push(p)
// }
//
// function draw() {
//     particles.forEach(p => {
//         p.update()
//         p.draw()
//     })
//     particles = particles.filter((p) => random() < 0.99 && !p.dead)
//     if (frameCount % 20 == 0) {
//         fill(0, 1)
//         rect(0, 0, width, height)
//         for (var i = 0; i < 2; i++) generateNewBamboo()
//     }
//     if (frameCount > 100) { noLoop(); }
// }
//
//
// function mousePressed() {
//     for (var i = 0; i < 5; i++) generateNewBamboo()
// }
//
// function keyPressed() { save('pix.jpg'); }
//
