import type p5 from 'p5';
import colors from '../colors';
import { createNoise2D, createNoise3D } from 'simplex-noise';

export default function sketch(sketch: p5) {
    sketch.windowResized = () => sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);

    sketch.setup = () => {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight)
    }

    sketch.draw = () => {
    }
}
