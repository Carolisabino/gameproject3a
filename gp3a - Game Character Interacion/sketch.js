/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var touchedTheGround;
var aKey;
var wKey;
var dKey;
var sKey;
var rightKey;
var leftKey;
var upKey;
var downKey;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	touchedTheGround = true;
	rightKey = 39;
	leftKey = 37;
	upKey = 38;
	downKey = 40;
	aKey = 65;
	dKey = 68;
	wKey = 87;
	sKey= 83;
}

function draw()
{
	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon

	stroke(0);
	fill(0)
	rect(70, 433, 30, 90);
	rect(100, 493, 30, 200);
	rect(130, 547, 470, 30);

	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		//head
		fill(123, 104, 35)
		ellipse(gameChar_x - 15, gameChar_y - 22, 10, 10);
		fill(0);
		//eye
		ellipse(gameChar_x - 17, gameChar_y - 25, 2, 2)
		//front foot
		fill(123, 104, 35);
		rect(gameChar_x + 5, gameChar_y - 10, 5, 10);
		//body
		fill(82, 97, 38)
		ellipse(gameChar_x, gameChar_y - 15, 25, 20)

		//back foot
		fill(123, 104, 35)
		rect(gameChar_x - 10, gameChar_y - 15 , 5, 12);
		//tail
		fill(123, 104, 35);
		triangle(
			gameChar_x + 11,
			gameChar_y - 22,
			gameChar_x + 13 ,
			gameChar_y - 15,
			gameChar_x + 17,
			gameChar_y - 19
		);
	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		//head
		fill(123, 104, 35)
		ellipse(gameChar_x + 15, gameChar_y - 22, 10, 10);
		fill(0);
		//eye
		ellipse(gameChar_x + 18, gameChar_y - 24, 2, 2)
		fill(123, 104, 35)
		//back foot
		rect(gameChar_x - 10, gameChar_y - 10 , 5, 10);
		//body
		fill(82, 97, 38)
		ellipse(gameChar_x, gameChar_y - 15, 25, 20)
		//front foot
		fill(123, 104, 35);
		rect(gameChar_x + 5, gameChar_y - 15, 5, 12);

		//tail
		fill(123, 104, 35);
		triangle(
			gameChar_x - 12,
			gameChar_y - 21,
			gameChar_x - 13,
			gameChar_y - 14,
			gameChar_x - 18,
			gameChar_y - 16
		);

	}
	else if(isLeft)
	{
		// add your walking left code
		//head
		fill(123, 104, 35)
		ellipse(gameChar_x - 17, gameChar_y - 18, 10, 10);
		fill(0);
		//eye
		ellipse(gameChar_x - 20, gameChar_y - 19, 2, 2)
		//front foot
		fill(123, 104, 35);
		rect(gameChar_x + 5, gameChar_y - 10, 5, 10);
		//back foot
		rect(gameChar_x - 10, gameChar_y - 10 , 5, 10);
		//body
		fill(82, 97, 38)
		ellipse(gameChar_x, gameChar_y - 15, 25, 20)
		//tail
		fill(123, 104, 35);
		triangle(
			gameChar_x + 11,
			gameChar_y - 22,
			gameChar_x + 13 ,
			gameChar_y - 15,
			gameChar_x + 17,
			gameChar_y - 19
		);

	}
	else if(isRight)
	{
		// add your walking right code
		//head
		fill(123, 104, 35)
		ellipse(gameChar_x + 17, gameChar_y - 18, 10, 10);
		fill(0);
		//eye
		ellipse(gameChar_x + 20, gameChar_y - 19, 2, 2)
		//front foot
		fill(123, 104, 35);
		rect(gameChar_x + 5, gameChar_y - 10, 5, 10);
		//back foot
		rect(gameChar_x - 10, gameChar_y - 10 , 5, 10);
		//body
		fill(82, 97, 38)
		ellipse(gameChar_x, gameChar_y - 15, 25, 20)
		//tail
		fill(123, 104, 35);
		triangle(
			gameChar_x - 12,
			gameChar_y - 21,
			gameChar_x - 13,
			gameChar_y - 14,
			gameChar_x - 18,
			gameChar_y - 16
		);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code

		//body
		fill(82, 97, 38)
		ellipse(gameChar_x, gameChar_y - 15, 25, 25)

		//head
		fill(123, 104, 35)
		ellipse(gameChar_x + 1, gameChar_y - 23, 10, 10);
		//eyes
		fill(0);
		ellipse(gameChar_x - 2, gameChar_y - 25, 2, 2)
		ellipse(gameChar_x + 4, gameChar_y - 25, 2, 2)

		//front foot
		fill(123, 104, 35);
		rect(gameChar_x + 5, gameChar_y - 10, 5, 10);
		//back foot
		rect(gameChar_x - 10, gameChar_y - 10 , 5, 10);


	}
	else
	{
		// add your standing front facing code
		//front foot
		fill(123, 104, 35);
		rect(gameChar_x + 5, gameChar_y - 10, 5, 10);
		//back foot
		rect(gameChar_x - 10, gameChar_y - 10 , 5, 10);

		//body
		fill(82, 97, 38)
		ellipse(gameChar_x, gameChar_y - 15, 25, 20)

		//head
		fill(123, 104, 35)
		ellipse(gameChar_x + 1, gameChar_y - 13, 10, 10);
		//eyes
		fill(0);
		ellipse(gameChar_x - 2, gameChar_y - 13, 2, 2)
		ellipse(gameChar_x + 4, gameChar_y - 13, 2, 2)
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

	if(isLeft) {
		gameChar_x -= 5;
	}
	if(isRight) {
		gameChar_x += 5;
	}
	if(isFalling){
		gameChar_y += 2;
		touchedTheGround = gameChar_y >= floorPos_y;
		// prevents from pass the floor

	}
	if(isPlummeting) {
		gameChar_y -= 4;
		touchedTheGround = false;
	}
	if(touchedTheGround){
		isFalling = false;
	}
}


function keyPressed() {
	// switch case to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work


	switch (keyCode) {
		case rightKey:
		case dKey:
			isRight = true;
			break;
		case leftKey:
		case aKey:
			isLeft = true;
			break;
		case upKey:
		case wKey:
			if(!isFalling){
				isPlummeting = true;
			}
			break;
		case downKey:
		case sKey:
			isFalling = true;
			break;
		default:
			alert("Please press a valid key to move the turtle: arrows OR a, w, d, s.");
			break;
	}
}

function keyReleased()
{
	// switch case to control the animation of the character when
	// keys are released.

	switch (keyCode) {
		case rightKey:
			case dKey:
			isRight = false;
			break;
		case leftKey:
		case aKey:
			isLeft = false;
			break;
		case upKey:
			case wKey:
			isPlummeting = false;
			isFalling = true;
			break;
	}
}

