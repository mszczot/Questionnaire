var image = [];
var displayedImages = [0, 2, 3, 2, 7, 9 ,8, 9, 6, 5,
								3, 5, 0, 1, 0, 6, 4, 9, 0, 9,
								2, 6, 3, 6, 4, 1, 4, 5, 4, 9, 
								7, 0, 7, 6, 1, 6, 8, 3, 8, 9, 
								5, 9, 4, 7, 3, 7, 6, 0, 6, 1, 
								9, 1, 7, 2, 7, 4, 8, 4, 1, 4];

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

var timerNback;

function showImage()
{
	if (currentTurn < turns)
	{
		timerNback = setTimeout(tickNBack, 10);
		//display image 
		imageHolder.innerHTML = "<img src=./images/" + displayedImages[currentTurn] + ".png onclick='checkImage()'>";
	}
	else 
	{
		document.getElementById("nbackresult").innerHTML = correctAnswers;
		currentTurn = 0;
		if (turns === 4)
		{
			document.getElementById("p4intro").style.display = "block";
			document.getElementById("p4test").style.display = "none";
		} 
		else {		
			nextPage();
		}
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
	if (displayedImages[currentTurn] === displayedImages[currentTurn - nback])
	{
		nBackAnswers += ",1";
		nBackReactionTime += "," + milliseconds;
		correctAnswers++;
		correct = true;
		milliseconds = 0;
		clearTimeout(timerNback);
		pauseBetweenImages();
	}
	else 
	{
		nBackAnswers += ",0";
		nBackReactionTime += "," + milliseconds;
		wrongAnswers++;
		correct = false;
		milliseconds = 0;
		clearTimeout(timerNback);
		pauseBetweenImages();
	}	
}

function tickNBack()
{
	milliseconds = milliseconds + 10;
	if (milliseconds > timeForPicture)
	{		
		milliseconds = 0;
		clearTimeout(timerNback);
		pauseBetweenImages();	
	}
	else
	{
		timerNback = setTimeout(tickNBack, 10);
	}
}

