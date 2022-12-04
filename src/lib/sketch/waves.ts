import type p5 from 'p5';
import type Graphics from 'p5';
import colors from '../colors';
import { createNoise2D, createNoise3D } from 'simplex-noise';


export default function sketch(sketch: p5) {
    let noise2D: any,
        noise3D: any,
        paper: Graphics,
        waves: Wave[],
        frame: number = 0

    sketch.windowResized = () => sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);

    sketch.setup = () => {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight)
        sketch.colorMode(sketch.HSB, 360, 100, 100, 100)
        sketch.randomSeed(0)
        sketch.pixelDensity(1)
        sketch.angleMode(sketch.DEGREES)
        sketch.noStroke()
        sketch.frameRate(30)

        noise2D = createNoise2D()
        noise3D = createNoise3D()

        paper = sketch.createGraphics(sketch.width, sketch.height)

        drawTexture(paper, 0.01, true)
        drawTexture(paper, 0.01, false)

        waves = createWaves(sketch.height / 20, 300)
    }

    sketch.draw = () => {
        frame++
        sketch.background(0)

        for (let wave of waves) {
            sketch.drawingContext.filter = `blur(${sketch.int(sketch.map(sketch.abs(wave.y - (sketch.height * 3) / 5), 0, sketch.height / 2 + wave.yStep, 0, 20))}px)`;


            sketch.push();
            sketch.translate(0, wave.y + sketch.sin(frame));

            sketch.drawingContext.fillStyle = wave.gradient
            sketch.beginShape();
            let i = -wave.xStep
            for (let x of wave.x) {
                sketch.curveVertex(i, x * sketch.sin(frame + x * 10))
                i += wave.xStep
            }
            sketch.vertex(sketch.width + wave.xStep, 0);
            sketch.vertex(-wave.xStep, sketch.height + wave.yStep);
            sketch.endShape(sketch.CLOSE);
            sketch.pop();
        }

        // sketch.drawingContext.globalAlpha = 1 / 2;
        sketch.drawingContext.filter = `blur(${0}px)`;

        // @ts-ignore
        sketch.image(paper, 0, 0);
        // sketch.drawingContext.globalAlpha = 1;
    }

    function createWaves(yStep: number, xStep: number): Wave[] {
        let waves: Wave[] = []

        for (let y = -yStep; y < sketch.height + yStep; y += yStep / 2) {

            let n = sketch.map(noise2D(y / 50, sketch.frameCount / 300), -1, 1, 0, 1)
            let gradient =
                sketch.random() > 0.5
                    ? sketch.drawingContext.createLinearGradient(0, -yStep * 2, sketch.width, yStep * 2)
                    : sketch.drawingContext.createLinearGradient(sketch.width, -yStep * 2, 0, yStep * 2);
            gradient.addColorStop(0, colors[0]);
            gradient.addColorStop(n, colors[2]);
            gradient.addColorStop(1, colors[1]);

            let xs: number[] = []
            for (let x = -xStep; x < sketch.width + xStep; x += xStep) {
                xs.push(noise3D(x / 400, y / 50, sketch.frameCount / 200) * yStep * 4)
            }

            let wave: Wave = {
                y,
                x: xs,
                yStep,
                xStep,
                gradient: gradient,
                step: 0,
                height: 0,
            }

            waves.push(wave)
        }
        return waves
    }

    function drawTexture(target: any, prob: any, bool: boolean) {
        for (let i = 0; i < sketch.width * sketch.height * prob; i++) {
            let x = sketch.random(sketch.width);
            let y = sketch.random(sketch.height);
            let d =
                (sketch.width / sketch.map(prob, 0, 1, sketch.width / 50, sketch.width / 10000)) * sketch.random(1, 1.5);
            let angle = (sketch.int(sketch.random(8)) * 360) / 8;
            let r = d * sketch.sqrt(2);
            let g = target.drawingContext.createLinearGradient(
                sketch.cos(angle) * r,
                sketch.sin(angle) * r,
                sketch.cos(angle + sketch.PI) * r,
                sketch.sin(angle + sketch.PI) * r
            );
            let n = sketch.random(1);
            let m = n + sketch.random(3);
            g.addColorStop(0, sketch.color(0, n));
            g.addColorStop(1, sketch.color(0, m));
            target.noStroke();
            if (bool) {
                target.drawingContext.fillStyle = g;
            } else {
                target.erase(sketch.random(2, 8), 0);
            }

            target.push();
            target.translate(x, y);
            target.rotate(sketch.random(360));
            target.shearX(sketch.random(360 / 4) * (sketch.random() > 0.5 ? -1 : 1));
            target.shearY(sketch.random(360 / 4) * (sketch.random() > 0.5 ? -1 : 1));
            target.rectMode(sketch.CENTER);
            target.ellipse(0, 0, d, d);
            target.pop();
            if (!bool) {
                target.noErase();
            }
        }
    }
}

interface Wave {
    y: number,
    x: number[],
    yStep: number,
    xStep: number,
    gradient: any,
    step: number,
    height: number,
}
