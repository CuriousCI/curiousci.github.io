    PImage img;
    float noiseScale = 500, noiseStrength = 1;
    int num = 3000, large = 5;
    Particle[] particles = new Particle[num];

    public void setup() {
				size(800, 450);
        img = loadImage("Starry-Night.jpeg");
        img.resize(width, height);
        noStroke();

        for (int i = 0; i < num; i++) {
            float angle = random(TWO_PI);
            PVector dir = new PVector(cos(angle), sin(angle));
            float speed = random(0.5f, 1);
            particles[i] = new Particle(dir, speed);
        }
    }

    public void draw() {
        if (!img.loaded) return;
			  fill(0, 5);
			  rect(0, 0, width, height);
        for (Particle p : particles)
            p.move();
    }

    class Particle {

        PVector loc, dir, vel, ori;
        float speed;
        int color;

        Particle(PVector _dir, float _speed) {
            dir = _dir;
            speed = _speed;
            initial();
        }

        void move() {
            float angle = noise(loc.x / noiseScale, loc.y / noiseScale, frameCount / noiseScale) * TWO_PI * noiseStrength;
            dir.x = cos(angle);
            dir.y = sin(angle);
            vel = dir.get();
            vel.mult(speed);
            loc.add(vel);

            if (loc.x < 0 || loc.x > width || loc.y < 0 || loc.y > height)
                initial();
						if (color == 0)
								color = img.get((int) loc.x, (int) loc.y);
            fill(lerpColor(color, img.get((int) loc.x, (int) loc.y), 0.5f), 255);
            ellipse(loc.x, loc.y, large, large);
        }

        void initial() {
            loc = new PVector(random(width), random(height));
            ori = loc.get();
            color = img.get((int) loc.x, (int) loc.y);
        }
    }
