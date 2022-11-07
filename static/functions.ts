ArrayList particles;
slopeField mainField;


//Class that groups two numbers, typically used for position and its derivitives.
class vector
{
	//Component 1, Component 2, and the magnitude of the vector
	float x,y,mag;
	
	vector(float X, float Y)
	{
		x = X;
		y = Y;
		mag = sqrt(X*X+Y*Y)
	}

	//Simple add function for vectors, not exactly required but sometimes helpful
	void add(vector vec)
	{
		x += vec.x;
		y += vec.y;
	}
}

//Slope field class is only used once in this program, but this program can be easily adjusted to account for multiple slope fields
class slopeField
{
	vector[][] field;
	int len,wid,x,y;
	int spacing;

	//Differential equation, can be changed to achieve different effects/simulations
	vector diff(int X, int Y)
	{
		int a,b,c,d;
		c = X - wid/2;
		d = Y - len/2;
		c /= 50;
		d /= 50;
		a = (sin(c*200))*2;
		b = (cos(d*200)/(d*d+1))*2;
		//c = a / (b+1) - b/2;
		//d = b / (a+1) - a/2;
		return new vector(a, b);
	}

	//Constructor, must include an origin point, dimensions, and the amount of space a sector occupies
	//Spacing variable value is chosen based on performance capabilities of the processor
	slopeField(int OriginX, int OriginY, int Length, int Width, int Spacing)
	{
		x = OriginX;
		y = OriginY;
		len = Length;
		wid = Width;
		spacing = Spacing;
		field = new vector[(int)(Width/spacing)][(int)(Length/spacing)];
		
		//Display a circle at the origin point
		//ellipse(OriginX + wid/2, OriginY + len/2, 10, 10);
		
		//Apply the differential equation for all sectors in the slope field
		for (int a = 0; a < (int)(Width/spacing); a++)
		{
			println(a + " / " + (int)(Width/spacing));
			for (int b = 0; b < (int)(Length/spacing); b++)
			{
				field[a][b] = this.diff(a*spacing, b*spacing);
				if (field[a][b] == null)
				{
					println("NULL VECTOR IN VECTOR FIELD!!!!!!!!!!!");
				}
				//Draw slope field, for visual purposes
				stroke(100);
				line(a*spacing + OriginX - field[a][b].x/2, b*spacing + OriginY - field[a][b].y/2, a*spacing + OriginX + field[a][b].x/2, b*spacing + OriginX + field[a][b].y/2);
				println(b + " / " + (int)(Length/spacing));
			}
			
			println("--------------------------------");
		}
	}
}

//Base class for particles instantiated in the field
//Acceleration is based on the size (mass) of the particle (in relation with the equation F=ma)
class particle
{
	int size;
	vector pos, vel, acc;
	vector sector;
	
	//Constructors
	//Must have an initial position and a set size
	particle(vector initPos, vector initVel, int Size)
	{
		pos = initPos;
		vel = initVel;
		size = Size;
		fill(255);
		ellipse(pos.x,pos.y,size,size);
	}
	particle(vector initPos, int Size)
	{
		pos = initPos;
		vel = new vector(0,0);
		size = Size;
		fill(255);
		ellipse(pos.x,pos.y,size,size);
	}

	//Called every frame.
	//The particle's accelleration, velocity, and position are updated, in that order,
	//based on its location in the slope field and its previous attributes.
	void updateParticle(int index)
	{
		int a,b;
		a = (int)(((int)pos.x)/mainField.spacing);
		b = (int)(((int)pos.y)/mainField.spacing);
		sector = new vector(a, b);
		
		//Alerts the programmer of null vectors in the slope field
		if (mainField.field[sector.x][sector.y] == null)
		{
			println("NULL VECTOR IN VECTOR FIELD!!!!!!!!!!!");
		}
		
		//Adjust accelleration, then velocity, then position
		acc = (vector)(mainField.field[sector.x][sector.y]);
		println(acc.x + ", " + acc.y);
		vel.add(new vector(acc.x/size, acc.y/size));
		pos.add(vel);
		
		//Destroy particle when it is out of bounds
		if (pos.x < 0 || pos.x > mainField.wid || pos.y < 0 || pos.y > mainField.len)
		{
			this.destroy(index);
		}
		
		//Change color based on velocity of the particle
		fill((vel.x + 3) * 100, (vel.y + 3) * 100, 50, 50);
		ellipse(pos.x,pos.y,size,size);
	}

	//Destroys particle by removing it from the list of particles,
	//which eliminates the possibility of the particle being referenced again
	void destroy(int Index)
	{
		particles.remove(Index);
	}
}


void setup()
{
	println("Setup");
	size(500, 500);
	background(50);
	mainField = new slopeField(0, 0, 500, 500, 25);
	particles = new ArrayList();
	println("Setup Completed");
	frameRate(30);
	noStroke();
}

void draw()
{
	//background(0);
	for (int i = 0; i < particles.size(); i++)
	{
		(particle)(particles.get(i)).updateParticle(i);
	}
}

void mouseClicked()
{
	particles.add(new particle(new vector(mouseX,mouseY),new vector(0,0), random(1,10)));
}

void randomizeParticles(int num)
{
	for (int i = 0; i < num; i++)
	{
		particles.add(new particle(new vector(random(0,width),random(0,height)),5));
	}
}

void keyReleased()
{
	randomizeParticles(10);
}
