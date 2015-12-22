var image = [];
var displayedImages = [2,0,2,9,4,5,6,8,1,8,
								2,6,1,6,3,5,7,5,6,9,
								6,9,7,4,0,4,3,4,8,9,
								1,9,8,4,8,4,8,6,7,6,
								7,9,0,1,0,4,7,7,8,7,
								5,9,5,4,0,3,0,4,8,4];

var imageHolder = document.getElementById("p4image");

var nback;
var turns;

var correctAnswers = 0;
var wrongAnswers = 0;

var nBackAnswers = "";
var nBackReactionTime = "";

var currentTurn = 0;

var milliseconds = 0;
var timeForPicture = 1000;

var correct = "";

var timer;

function showImage()
{
	if (currentTurn < turns)
	{
		//set timeout for 0.5s to call a method pause
		timer = setTimeout(tickNBack, 10);
		//get random number
		//var randomNumber = Math.floor(Math.random()*image.length);
		//display image 
		imageHolder.innerHTML = "<img src=./images/" + displayedImages[currentTurn] + ".png onclick='checkImage()'>";
		//store the value of the displayed image
		//displayedImages[currentTurn] = randomNumber;
	}
	else 
	{
		document.getElementById("nbackresult").innerHTML = correctAnswers;
		currentTurn = 0;
		document.getElementById("p4intro").style.display = "block";
		document.getElementById("p4test").style.display = "none";
		nextPage();
	}
}

function pauseBetweenImages()
{
	currentTurn++;
	if (correct === "")
	{
		imageHolder.innerHTML = "";
	} else {
		if (correct)
		{
			imageHolder.innerHTML = "<img src=./images/tick.png>";
		}
		if (!correct)
		{
			imageHolder.innerHTML = "<img src=./images/wrong.jpg>";
		}
	}
	setTimeout(showImage, 1000);
	correct = "";
}

//function to start the test. 
//nback - how many back to look at
//trials - how many rounds
function nBackTest(itemsBack, trials)
{
	turns = trials;
	nback = itemsBack;
	changeView();
	showImage();
}

function changeView()
{
	document.getElementById("p4intro").style.display = "none";
	document.getElementById("p4test").style.display = "block";
}

function checkImage()
{
	if (displayedImages[currentTurn] == displayedImages[currentTurn - nback])
	{
		nBackAnswers += ",1";
		nBackReactionTime += "," + milliseconds;
		correctAnswers++;
		correct = true;
		milliseconds = 0;
		clearTimeout(timer);
		pauseBetweenImages();
	}
	else 
	{
		nBackAnswers += ",0";
		nBackReactionTime += "," + milliseconds;
		wrongAnswers++;
		correct = false;
		milliseconds = 0;
		clearTimeout(timer);
		pauseBetweenImages();
	}	
}

function tickNBack()
{
	milliseconds = milliseconds + 10;
	if (milliseconds > timeForPicture)
	{		
		milliseconds = 0;
		clearTimeout(timer);
		pauseBetweenImages();	
	}
	else
	{
		timer = setTimeout(tickNBack, 10);
	}
}

