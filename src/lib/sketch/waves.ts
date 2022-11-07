import type p5 from 'p5';
import type Graphics from 'p5';
import colors from '../colors';
import { createNoise2D } from 'simplex-noise';

export default function sketch(sketch: p5) {
    let simplex: any,
        palette: string[],
        g1: Graphics;

    sketch.setup = () => {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
        sketch.colorMode(sketch.HSB, 360, 100, 100, 100);
        sketch.pixelDensity(1);
        sketch.angleMode(sketch.DEGREES);
        simplex = createNoise2D();
        palette = sketch.shuffle(colors);
        g1 = sketch.createGraphics(sketch.width, sketch.height);
        // sketch.texture(g1)
        drawTexture(g1, 0.01, true);
        drawTexture(g1, 0.01, false);

    }

    sketch.draw = () => {
        // sketch.clear();
        sketch.background(255);
        sketch.randomSeed(0);
        let yStep = sketch.height / 25;
        let xStep = 250;

        let nsx = 400;
        let nsy = 50;

        for (let y = -yStep; y < sketch.height + yStep; y += yStep / 2) {
            sketch.drawingContext.filter =
                "blur(" +
                sketch.int(sketch.map(sketch.abs(y - (sketch.height * 3) / 5), 0, sketch.height / 2 + yStep, 0, 20)) +
                "px)";

            sketch.push();
            sketch.translate(0, y);

            let n = sketch.map(simplex.noise2D(y / nsy, sketch.frameCount / 300), -1, 1, 0, 1);
            let colors = sketch.shuffle(palette.concat());
            let gradient =
                sketch.random() > 0.5
                    ? sketch.drawingContext.createLinearGradient(0, -yStep * 2, sketch.width, yStep * 2)
                    : sketch.drawingContext.createLinearGradient(sketch.width, -yStep * 2, 0, yStep * 2);

            gradient.addColorStop(0, colors[0]);
            gradient.addColorStop(n, colors[2]);
            gradient.addColorStop(1, colors[1]);

            sketch.drawingContext.fillStyle = gradient;
            // strokeWeight(3);
            // stroke(0,0,100);
            sketch.noStroke();

            sketch.beginShape();
            let y2;
            for (let x = -xStep; x < sketch.width + xStep; x += xStep) {
                y2 = simplex.noise3D(x / nsx, y / nsy, sketch.frameCount / 200) * yStep * 4;
                sketch.curveVertex(x, y2);
            }
            sketch.vertex(sketch.width + xStep, y2 || 0);
            sketch.vertex(0 - xStep, sketch.height + yStep);
            sketch.endShape(sketch.CLOSE);
            sketch.pop();
        }
        sketch.drawingContext.globalAlpha = 1 / 2;
        sketch.drawingContext.filter = "blur(" + 0 + "px)";

        sketch.image(g1, 0, 0);
        sketch.drawingContext.globalAlpha = 1;

        sketch.noLoop();
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

// let g1;
// let simplex;
// let palette;
//
// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     colorMode(HSB, 360, 100, 100, 100);
//     pixelDensity(1);
//     angleMode(DEGREES);
//     simplex = new SimplexNoise();
//     palette = shuffle(random(colorScheme).colors.concat());
//     g1 = createGraphics(width, height);
//     drawTexture(g1, 0.01, true);
//     drawTexture(g1, 0.01, false);
// }
//
// function draw() {
//     clear();
//
//     randomSeed(0);
//     let yStep = height / 25;
//     let xStep = 250;
//
//     let nsx = 400;
//     let nsy = 50;
//
//     for (let y = -yStep; y < height + yStep; y += yStep / 2) {
//         drawingContext.filter =
//             "blur(" +
//             int(map(abs(y - (height * 3) / 5), 0, height / 2 + yStep, 0, 20)) +
//             "px)";
//
//         push();
//         translate(0, y);
//
//         let n = map(simplex.noise2D(y / nsy, frameCount / 300), -1, 1, 0, 1);
//         let colors = shuffle(palette.concat());
//         let gradient =
//             random() > 0.5
//                 ? drawingContext.createLinearGradient(0, -yStep * 2, width, yStep * 2)
//                 : drawingContext.createLinearGradient(width, -yStep * 2, 0, yStep * 2);
//
//         gradient.addColorStop(0, colors[0]);
//         gradient.addColorStop(n, colors[2]);
//         gradient.addColorStop(1, colors[1]);
//
//         drawingContext.fillStyle = gradient;
//         // strokeWeight(3);
//         // stroke(0,0,100);
//         noStroke();
//
//         beginShape();
//         let y2;
//         for (let x = -xStep; x < width + xStep; x += xStep) {
//             y2 = simplex.noise3D(x / nsx, y / nsy, frameCount / 200) * yStep * 4;
//             curveVertex(x, y2);
//         }
//         vertex(width + xStep, y2);
//         vertex(0 - xStep, height + yStep);
//         endShape(CLOSE);
//         pop();
//     }
//     drawingContext.globalAlpha = 1 / 2;
//     drawingContext.filter = "blur(" + 0 + "px)";
//
//     image(g1, 0, 0);
//     drawingContext.globalAlpha = 1;
//
//     noLoop();
// }
//
// let colorScheme = [
//     {
//         name: "Benedictus",
//         colors: ["#F27EA9", "#366CD9", "#5EADF2", "#636E73", "#F2E6D8"],
//     },
//     {
//         name: "Cross",
//         colors: ["#D962AF", "#58A6A6", "#8AA66F", "#F29F05", "#F26D6D"],
//     },
//     {
//         name: "Demuth",
//         colors: ["#222940", "#D98E04", "#F2A950", "#BF3E21", "#F2F2F2"],
//     },
//     {
//         name: "Hiroshige",
//         colors: ["#1B618C", "#55CCD9", "#F2BC57", "#F2DAAC", "#F24949"],
//     },
//     {
//         name: "Hokusai",
//         colors: ["#074A59", "#F2C166", "#F28241", "#F26B5E", "#F2F2F2"],
//     },
//     {
//         name: "Hokusai Blue",
//         colors: ["#023059", "#459DBF", "#87BF60", "#D9D16A", "#F2F2F2"],
//     },
//     {
//         name: "Java",
//         colors: ["#632973", "#02734A", "#F25C05", "#F29188", "#F2E0DF"],
//     },
//     {
//         name: "Kandinsky",
//         colors: ["#8D95A6", "#0A7360", "#F28705", "#D98825", "#F2F2F2"],
//     },
//     {
//         name: "Monet",
//         colors: ["#4146A6", "#063573", "#5EC8F2", "#8C4E03", "#D98A29"],
//     },
//     {
//         name: "Nizami",
//         colors: ["#034AA6", "#72B6F2", "#73BFB1", "#F2A30F", "#F26F63"],
//     },
//     {
//         name: "Renoir",
//         colors: ["#303E8C", "#F2AE2E", "#F28705", "#D91414", "#F2F2F2"],
//     },
//     {
//         name: "VanGogh",
//         colors: ["#424D8C", "#84A9BF", "#C1D9CE", "#F2B705", "#F25C05"],
//     },
//     {
//         name: "Mono",
//         colors: ["#D9D7D8", "#3B5159", "#5D848C", "#7CA2A6", "#262321"],
//     },
//     {
//         name: "RiverSide",
//         colors: ["#906FA6", "#025951", "#252625", "#D99191", "#F2F2F2"],
//     },
// ];
//
