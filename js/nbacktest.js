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

var currentTurn = 0;

function showImage()
{
	if (currentTurn < turns)
	{
		//set timeout for 0.5s to call a method pause
		setTimeout(pauseBetweenImages, 500);
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
	}
}

function pauseBetweenImages()
{
	currentTurn++;
	imageHolder.innerHTML = "";
	setTimeout(showImage, 2750);
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
		correctAnswers++;
		console.log(correctAnswers);
	}
	
}

