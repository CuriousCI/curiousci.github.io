import type p5 from 'p5';
import type Graphics from 'p5';
import colors from '../colors';
import { createNoise2D, createNoise3D } from 'simplex-noise';
import type { NoiseFunction2D, NoiseFunction3D } from 'simplex-noise';

export default function sketch(sketch: p5) {
    interface Wave {
        y: number,
        x: number[],
        gradient: any,
    }

    let noise2D: NoiseFunction2D = createNoise2D(),
        noise3D: NoiseFunction3D = createNoise3D(),
        sand: Graphics,
        waves: Wave[],
        frame: number = 0,
        peak: number,
        length: number;


    sketch.windowResized = () => sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);


    sketch.setup = () => {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight)
        sketch.colorMode(sketch.HSB, 360, 100, 100, 100)
        sketch.angleMode(sketch.DEGREES)
        sketch.frameRate(30)
        sketch.noStroke()

        sand = sketch.createGraphics(sketch.width, sketch.height)
        drawTexture(sand, 0.01, true)
        drawTexture(sand, 0.01, false)

        peak = sketch.height / 5
        length = 1000

        waves = createWaves();
    }

    sketch.draw = () => {
        frame++
        sketch.background(0)

        for (let wave of waves) {
            // sketch.drawingContext.filter = `blur(${sketch.int(sketch.map(sketch.abs(wave.y - (sketch.height * 3) / 5), 0, sketch.height / 2 + wave.yStep, 0, 20))}px)`;

            sketch.push();
            sketch.translate(0, wave.y + sketch.sin(frame));

            sketch.drawingContext.fillStyle = wave.gradient
            sketch.beginShape();
            let i = -length
            for (let x of wave.x) {
                sketch.curveVertex(i, x * sketch.sin(frame + x * 10))
                i += length
            }
            sketch.vertex(sketch.width + length, 0);
            sketch.vertex(-length, sketch.height + peak);
            sketch.endShape(sketch.CLOSE);
            sketch.pop();
        }

        // sketch.drawingContext.globalAlpha = 1 / 2;
        // sketch.drawingContext.filter = `blur(${0}px)`;
        // @ts-ignore
        sketch.image(sand, 0, 0);
        // sketch.drawingContext.globalAlpha = 1;
    }

    function createWaves(): Wave[] {
        let waves: Wave[] = []

        for (let y = -peak; y < sketch.height + peak; y += peak / 2) {
            let step = sketch.map(noise2D(y / 50, sketch.frameCount / 300), -1, 1, 0, 1),
                gradient =
                    sketch.random() > 0.5
                        ? sketch.drawingContext.createLinearGradient(0, -peak * 2, sketch.width, peak * 2)
                        : sketch.drawingContext.createLinearGradient(sketch.width, -peak * 2, 0, peak * 2);

            gradient.addColorStop(0, colors[0]);
            gradient.addColorStop(step, colors[2]);
            gradient.addColorStop(1, colors[1]);

            let x: number[] = []
            for (let step = -length; step < sketch.width + length; step += length)
                x.push(noise3D(step / 400, y / 50, sketch.frameCount / 200) * peak * 4)

            waves.push({ y, x, gradient })
        }

        return waves
    }

    function drawTexture(target: Graphics, density: number, bool: boolean) {
        for (let _ = 0; _ < sketch.width * sketch.height * density; _++) {
            let x = sketch.random(sketch.width),
                y = sketch.random(sketch.height),
                d =
                    (sketch.width / sketch.map(density, 0, 1, sketch.width / 50, sketch.width / 10000)) * sketch.random(1, 1.5);

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

