import type p5 from 'p5';


export default function sketch(sketch: p5) {
    sketch.windowResized = () =>
        sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight)


    const rows: number = 10,
        cols: number = 10,
        particlesCount: number = 1000;

    let matrix: Array<Array<p5.Vector>>,
        perline: Array<Array<p5.Vector>>,
        particles: Array<p5.Vector>,
        image: p5.Image;

    sketch.setup = () => {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight)
        sketch.noStroke()
        sketch.randomSeed(Date.now())
        sketch.frameRate(30)
        image = sketch.loadImage(
            // sketch.random(['starry-night.jpg'])
            sketch.random(['starry-night.jpg', 'uliveti.jpg', 'wheat-field.jpg', 'paris-weath.jpg'])
        )

        matrix = Array.from(
            { length: rows - 1 },
            (_, row) => Array.from(
                { length: cols - 1 },
                (_, col) => sketch.createVector(
                    (col + 1) * sketch.width / cols,
                    (row + 1) * sketch.height / rows
                )
            )
        )

        perline = Array.from(
            matrix,
            (line, row) => Array.from(
                line,
                (_, col) => sketch.createVector(
                    sketch.noise(col / 4),
                    sketch.noise(row / 4)
                )
            )
        )

        particles = Array.from(
            { length: particlesCount },
            () => sketch.createVector(
                sketch.random(sketch.width),
                sketch.random(sketch.height)
            )
        )

    }

    sketch.draw = () => {
        perline = Array.from(
            matrix,
            (line, row) => Array.from(
                line,
                (_, col) => sketch.createVector(
                    sketch.noise(sketch.frameCount / 100 % 1000 + row / 4 + sketch.random(sketch.width) / 100000),
                    sketch.noise(sketch.frameCount / 100 % 1000 + col / 10 + sketch.random(sketch.height) / 100000)
                )
            )
        )

        for (let particle of particles) {
            let col = Math.floor(sketch.map(particle.x, 0, sketch.width, 0, cols - 1)),
                row = Math.floor(sketch.map(particle.y, 0, sketch.height, 0, rows - 1));

            const vecNoise = perline[row][col]
            const avgNoise = vecNoise.x + vecNoise.y

            let acceleration = sketch.createVector(
                sketch.map(vecNoise.x, 0, 1, -1, 1),
                sketch.map(vecNoise.y, 0, 1, -1, 1)
            )
            acceleration.mult(10)
            particle.add(acceleration)

            particle.x = particle.x < 0 ? sketch.width + particle.x : particle.x % sketch.width;
            particle.y = particle.y < 0 ? sketch.height + particle.y : particle.y % sketch.height;

            try {
                let pixel = image.get(
                    sketch.map(particle.x, 0, sketch.width, 0, image.width),
                    sketch.map(particle.y, 0, sketch.height, 0, image.height)
                );
                pixel[0] -= 10
                pixel[1] -= 10
                pixel[2] -= 10
                sketch.fill(pixel[0] * avgNoise, pixel[1] * avgNoise, pixel[2] * avgNoise, 50 + avgNoise * 50)
            } catch (e) {
                sketch.fill(125 * avgNoise, 50 * avgNoise)
            }
            sketch.noStroke()
            sketch.circle(particle.x, particle.y, vecNoise.y * 20)
        }
    }
}

// sketch.background(40)
// for (let row in matrix)
//     for (let col in matrix[row]) {
//         sketch.stroke(200)
//         let p = perline[row][col]
//         let m = matrix[row][col]
//         let x = sketch.map(p.x, 0, 1, -1, 1)
//         let y = sketch.map(p.y, 0, 1, -1, 1)
//         sketch.line(m.x, m.y, m.x + x * 100, m.y + y * 100)
//     }
