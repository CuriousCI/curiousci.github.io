import type p5 from 'p5';
// import { Vector } from 'p5';
// import colors from '../colors';
// import type Vector from 'p5';
// import { createNoise2D, createNoise3D } from 'simplex-noise';

export default function sketch(sketch: p5) {
    let cellsize: number = 10,
        gridsize: number = 10,
        size: number = 0,
        count: number = 5,
        snakes: Snake[] = [];

    sketch.windowResized = () => sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);

    sketch.setup = () => {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight)
        sketch.background(40);
        sketch.colorMode(sketch.HSB, 360, 100, 100, 100);
        init();
    }

    sketch.draw = () => {
        sketch.noStroke();
        sketch.fill(0, 0, 20, 50);
        sketch.rect(0, 0, sketch.width, sketch.height, 30);

        for (var i = 0; i < snakes.length; i++) {
            snakes[i].update();
            snakes[i].draw();
            if (snakes[i].is_dead) snakes[i] = new Snake(snakes[i].x, snakes[i].y);
        }
    }

    function init() {
        size = gridsize * cellsize;

        let padding: number = 30,
            border: number = 50;

        sketch.createCanvas((size * count) + ((count - 1) * padding) + border * 2, (size * count) + ((count - 1) * padding) + border * 2);

        sketch.noFill();
        sketch.strokeWeight(cellsize / 2);
        sketch.strokeCap(sketch.ROUND);
        sketch.frameRate(15);

        for (var y = 0; y < count; y++)
            for (var x = 0; x < count; x++)
                for (var i = 0; i < 3; i++)
                    snakes.push(new Snake(x * size + x * padding + border, y * size + y * padding + border));
    }

    class Snake {
        x: number;
        y: number;
        is_dead: boolean = false;
        segmentsNumber = sketch.random(2, 10);
        segments: any[] = [];
        direction: any = sketch.createVector(0.4, 0.2);
        // direction: Vector = Vector.fromAngle(sketch.floor(sketch.random(4)) * (sketch.TWO_PI / 4)).mult(cellsize);
        position = sketch.createVector(Math.ceil(sketch.random(size) / cellsize) * cellsize, Math.ceil(sketch.random(size) / cellsize) * cellsize);
        newPosition = sketch.createVector(0, 0);
        c = sketch.color(sketch.random(360), sketch.random(10, 70), 100);

        constructor(x: number, y: number) {
            this.x = x
            this.y = y

            this.segments.push(this.position);
        }

        update() {
            if (sketch.random() < 0.3) {
                this.direction.rotate(sketch.random() < 0.5 ? -sketch.PI / 2 : sketch.PI / 2);
            }

            // this.newPosition = Vector.add(this.position, this.direction);
            // this.newPosition = sketch.add(this.position, this.direction);

            this.segments.unshift(this.newPosition);
            this.position = this.newPosition;

            if (this.segments.length > this.segmentsNumber) this.segments.pop();
        };

        draw() {
            sketch.stroke(this.c);
            this.is_dead = true;

            for (let i = 0; i < this.segments.length - 1; i++) {
                let s = this.segments[i];
                let e = this.segments[i + 1];

                if (s.x >= 0 && s.x <= size && s.y >= 0 && s.y <= size) {
                    if (e.x >= 0 && e.x <= size && e.y >= 0 && e.y <= size) {

                        sketch.line(s.x + this.x, s.y + this.y, e.x + this.x, e.y + this.y);
                        sketch.line(s.y + this.x, s.x + this.y, e.y + this.x, e.x + this.y);

                        sketch.line(size - s.x + this.x, s.y + this.y, size - e.x + this.x, e.y + this.y);
                        sketch.line(size - s.y + this.x, s.x + this.y, size - e.y + this.x, e.x + this.y);

                        sketch.line(s.x + this.x, size - s.y + this.y, e.x + this.x, size - e.y + this.y);
                        sketch.line(s.y + this.x, size - s.x + this.y, e.y + this.x, size - e.x + this.y);

                        sketch.line(size - s.x + this.x, size - s.y + this.y, size - e.x + this.x, size - e.y + this.y);
                        sketch.line(size - s.y + this.x, size - s.x + this.y, size - e.y + this.x, size - e.x + this.y);

                        this.is_dead = false;
                    }
                }
            }

            sketch.stroke(0, 0, 75);
            sketch.noFill();
            sketch.rect(this.x, this.y, size, size, 5, 5, 5, 5);
        };
    }
}

