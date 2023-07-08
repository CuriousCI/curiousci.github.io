import type p5 from 'p5';


export default function sketch(sketch: p5) {
    enum Status { Extend, Shrink, Reset }

    class Part {
        origin: p5.Vector;
        destination: p5.Vector;
        completion: number; // Completion percentage
        status: Status;
        color: p5.Color;

        constructor(origin: p5.Vector, color: p5.Color) {
            this.origin = origin;
            this.destination = randomDirection(origin);
            this.completion = 0;
            this.color = color;
            this.status = Status.Reset;
        }

        update() {
            switch (this.status) {
                case Status.Extend:
                    if (this.completion < 1)
                        this.completion += .1
                    this.draw()
                    break;
                case Status.Shrink:
                    if (this.completion > 0)
                        this.completion -= 1
                    this.draw()
                    break;
            }
        }

        evolve(origin?: p5.Vector) {
            switch (this.status) {
                case Status.Extend:
                    if (this.completion > 1)
                        this.status = Status.Shrink;
                    break;
                case Status.Shrink:
                    if (this.completion < 0)
                        this.status = Status.Reset;
                    break;
                case Status.Reset:
                    if (origin) {
                        this.status = Status.Extend;
                        this.origin = origin;
                        this.destination = randomDirection(origin);
                    }
                    break;
            }
        }

        private draw() {
            let zAngle = sketch.atan2(this.destination.y - this.origin.y, this.destination.x - this.origin.x);
            let yAngle = -sketch.atan2(
                this.destination.z - this.origin.z,
                sketch.dist(this.origin.x, this.origin.y, this.destination.x, this.destination.y)
            );

            // const width = this.completion * this.origin.dist(this.destination);

            sketch.push();
            sketch.translate(this.origin);
            sketch.rotateZ(zAngle);
            sketch.rotateY(yAngle);
            sketch.translate(this.origin.dist(this.destination) / 2, 0, 0);
            sketch.ambientMaterial(this.color);
            sketch.box(this.origin.dist(this.destination) + 20, 20, 20);
            sketch.pop();
        }

    }

    let maxLength: number = 100,
        maxArea: number = 200;

    function randomDirection(origin: p5.Vector): p5.Vector {
        let destination = sketch.createVector(origin.x, origin.y, origin.z);
        let scale = maxLength * (
            sketch.random(['-', '+']) == '+' ?
                sketch.random(0, 1) :
                sketch.random(-1, 0)
        );

        // TODO abs and min here
        switch (sketch.random(['x', 'y', 'z'])) {
            case "x":
                destination.x += scale;
                break;
            case "y":
                destination.y += scale;
                break;
            case "z":
                destination.z += scale;
                break;
        }

        if (sketch.abs(destination.x) > maxArea || sketch.abs(destination.y) > maxArea || sketch.abs(destination.z) > maxArea)
            return randomDirection(origin)
        return destination;
    }


    let rotation: number = sketch.random(2 * sketch.PI);
    let parts: Part[] = Array.from({ length: 200 });
    let head: number = 0;

    sketch.windowResized = () => sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
    sketch.setup = () => {
        const side = sketch.max(sketch.windowWidth, sketch.windowHeight);

        sketch.createCanvas(side, side, sketch.WEBGL);
        sketch.setAttributes('premultipliedAlpha', true);
        sketch.frameRate(60);
        sketch.noStroke();

        for (let part in parts)
            parts[part] = new Part(
                sketch.createVector(0, 0, 0),
                // sketch.color(sketch.random(255))
                sketch.color(255)
            );


    }

    let timer = 0;

    sketch.draw = () => {
        sketch.ortho(-sketch.width / 2, sketch.width / 2, -sketch.width / 2, sketch.width / 2, 0, sketch.width * 2);
        sketch.background(40);
        sketch.ambientLight(sketch.sin(timer / 100) * 100);
        const angle = rotation * sketch.frameCount / 100;
        sketch.directionalLight(255, 255, 255, -sketch.sin(angle), 1, -sketch.cos(angle));
        let c = (sketch.height / 2) / sketch.tan(sketch.PI / 6);
        sketch.camera(c * sketch.sin(angle) + sketch.sin(sketch.abs(timer / 100)), 0, c * sketch.cos(angle) * sketch.cos(sketch.abs(timer / 100)), 0, 0, 0, 0, 1, 0);
        sketch.rotateZ(sketch.PI / 4);

        for (const part of parts)
            part.update();

        switch (parts[head].status) {
            case Status.Reset:
                const tail = head - 1 < 0 ? parts.length - 1 : head - 1;
                parts[head].evolve(parts[tail].destination);
                head = (head + 1) % parts.length;
                break;
            case Status.Extend:
            case Status.Shrink:
                parts[head].evolve();
                break;
        }

        timer++

    }
}
    // sketch.mouseReleased = () => {
    //     rotation = sketch.random(2 * sketch.PI);
    //     let parts: Part[] = Array.from({ length: 20 });
    //     for (const part in parts)
    //         parts[part] = new Part(
    //             sketch.createVector(0, 0, 0),
    //             sketch.color(sketch.random(255))
    //         );
    // }
