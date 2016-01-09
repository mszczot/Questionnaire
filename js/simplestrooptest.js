
//repeats for stroop: 4 for practice and 100 for normal test
var repeats = 0;

var colors = ["RED", "YELLOW", "BLUE", "GREEN"]; //colors to iteratet thru
var timesColorShowed = [0,0,0,0]; //array that will hold number how many certain color was showed: red, yellow, blue, green
var timesTextShowed = [0,0,0,0]; //array to hold how many times each color text was shown

var colorAttribute = ["Meaning", "Colour"]; //array to choose between colour and meaning of the word
var timesAttributeShowed = [0,0]; //array to hold number of times colour and meaning was shown

var colorView = document.getElementById("color_question"); //stroop test colour word
var atrributeView = document.getElementById("p3color_attribute"); //advanced stroop test option

var reactionTimeIndex = 0;

//next four variables needs to be stored in database
var reactionTime = [];
var reactionTimeString = "";
var simpleStroopTestAnswersString = "";
var correctAnswers = 0;
var wrongAnswers = 0;

var trial = 6;

var boolOption;

var turn = 0; //number of turns

var timer;

var timeForText = 3000;

var milliseconds = 0;

var previousColor;
var previousText;

//method to start the test
function stroopTest(repeat, meaning)
{
	//sets the number of repeats and show the test view
	repeats = repeat;
	boolOption = meaning;
	document.getElementById("green1").className = "btn btn-default ans";
	document.getElementById("blue1").className = "btn btn-default ans";
	document.getElementById("red1").className = "btn btn-default ans";
	document.getElementById("yellow1").className = "btn btn-default ans";
	document.getElementById("p3intro").style.display = "none";
	document.getElementById("p3test").style.display = "block";
	if (repeats === trial)
	{
		timeForText = 1000000;
		window.addEventListener("keydown", checkKeyPressedTriala, true);
	}
	else 
	{
		timeForText = 3000;
		window.addEventListener("keydown", checkKeyPresseda, true);
	}
	showWord();
}

var redButton;

function resetColorOfButton()
{
	redButton.className = "btn btn-default ans";
}

function trialOnClick(clickedColor)
{
		if (clickedColor == colorView.innerHTML)
		{
			document.getElementById(clickedColor.toLowerCase() + 1).className = "btn btn-success ans"; 
			clearTimeout(timer);
			setTimeout(showWord, 100);			
		}
		else
		{
			redButton = document.getElementById(clickedColor.toLowerCase() + 1);
			redButton.className = "btn btn-danger ans"; 
			setTimeout(resetColorOfButton, 100);
		}		
}

function checkKeyPressedTriala(e) {
    if (e.keyCode == 37)
    {
    	e.preventDefault();
		trialOnClick("YELLOW");    		
    }
    if (e.keyCode == 38)
    {
    	 e.preventDefault();
		trialOnClick("RED");    
    }
    if (e.keyCode == 39)
    {
    	 e.preventDefault();
		trialOnClick("GREEN");    
    }
    if (e.keyCode == 40)
    { 
    	e.preventDefault();
   	trialOnClick("BLUE");
    }
}

function checkKeyPresseda(e) {
    if (e.keyCode == 37)
    {
    	e.preventDefault();
		checkColor("YELLOW");    		
    }
    if (e.keyCode == 38)
    {
    	 e.preventDefault();
		checkColor("RED");    
    }
    if (e.keyCode == 39)
    {
    	 e.preventDefault();
		checkColor("GREEN");    
    }
    if (e.keyCode == 40)
    { 
    	e.preventDefault();
   	checkColor("BLUE");
    }
    //reset();
}

function showWord()
{
	//first half of the items shown will be meaning
	if (turn < repeats)
	{
		displayDetails(boolOption);
	}
	//else get out of the test
	else 
	{
		//if the repeats was only four then go back to previous screen
		if (repeats === trial)
		{
			turn = 0;
			document.getElementById("p3intro").style.display = "block";
			document.getElementById("p3test").style.display = "none";
			window.removeEventListener("keydown", checkKeyPressedTriala, true);
		}	
		//else show next page
		else 
		{
			document.getElementById("simpleStroopCorrectAnswers").innerHTML = correctAnswers;
			document.getElementById("simpleStroopWrongAnswers").innerHTML = wrongAnswers;
			window.removeEventListener("keydown", checkKeyPresseda, true);
			nextPage();
			getReactionTimeToString();
		}
	}
	if (repeats === trial)
	{
	document.getElementById("green1").onclick=function() { trialOnClick("GREEN"); };
	document.getElementById("blue1").onclick=function() { trialOnClick("BLUE"); };
	document.getElementById("red1").onclick=function() { trialOnClick("RED"); };
	document.getElementById("yellow1").onclick=function() { trialOnClick("YELLOW"); };
	

	document.getElementById("green1").className = "btn btn-default ans";
	document.getElementById("blue1").className = "btn btn-default ans";
	document.getElementById("red1").className = "btn btn-default ans";
	document.getElementById("yellow1").className = "btn btn-default ans";
	var color;
	if (turn < trial - 1)
	{
		if (atrributeView.innerHTML == "Meaning")
		{
			color = colorView.innerHTML;
			switch (color) {
				case "RED": 
					document.getElementById("red1").className = "btn btn-success ans";
					break;
				case "GREEN": 
					document.getElementById("green1").className = "btn btn-success ans";
					break;
				case "BLUE": 
					document.getElementById("blue1").className = "btn btn-success ans";
					break;
				case "YELLOW": 
					document.getElementById("yellow1").className = "btn btn-success ans";
					break;
			}
		}
		else 
		{		
			color = colorView.style.color;
			
			switch (color.toUpperCase()) {
				case "RED": 
					document.getElementById("red1").className = "btn btn-success ans";
					break;
				case "GREEN": 
					document.getElementById("green1").className = "btn btn-success ans";
					break;
				case "BLUE": 
					document.getElementById("blue1").className = "btn btn-success ans";
					break;
				case "YELLOW": 
					document.getElementById("yellow1").className = "btn btn-success ans";
					break;
			}
		}
	}
	else 
	{
		document.getElementById("green1").className = "btn btn-default ans";
		document.getElementById("blue1").className = "btn btn-default ans";
		document.getElementById("red1").className = "btn btn-default ans";
		document.getElementById("yellow1").className = "btn btn-default ans";
	}
}
else {
		document.getElementById("green1").onclick=function() { checkColor("GREEN"); };
		document.getElementById("blue1").onclick=function() { checkColor("BLUE"); };
		document.getElementById("red1").onclick=function() { checkColor("RED"); };
		document.getElementById("yellow1").onclick=function() { checkColor("YELLOW"); };
	}	
	
}


function getReactionTimeToString()
{
	for (i=0; i<reactionTime.length;i++)
	{
		reactionTimeString += "," + reactionTime[i];
	}
}

//function to check if the clicked button is the correct one
function checkColor(clickedColor) 
{
	//depending on the boolean if true then check meaning if false then check color
	if (boolOption)
	{
		if (clickedColor == colorView.innerHTML)
		{
			simpleStroopTestAnswersString += ",1";
			correctAnswers++;
			clearTimeout(timer);
			showWord();		
			
		}
		else
		{
			simpleStroopTestAnswersString += ",0";
			wrongAnswers++;
			clearTimeout(timer);
			showWord();
		}		
	}
	else 
	{
		if (clickedColor.toLowerCase() == colorView.style.color)
		{
			simpleStroopTestAnswersString += ",1";
			correctAnswers++;	
			clearTimeout(timer);
			showWord();
		}
		else 
		{
			simpleStroopTestAnswersString += ",0";
			wrongAnswers++;
			clearTimeout(timer);
			showWord();
		}
	}
	reactionTime[reactionTimeIndex] = milliseconds;
	milliseconds = 0;
	reactionTimeIndex++;
}

function showStartOfTest() 
{
	document.getElementById("p3intro").style.display = "block";
	document.getElementById("p3test").style.display = "none";
}

//function to display the test and whether its color or meaning. 
function displayDetails(isMeaning)
{
	
	boolOption = isMeaning;
	if (isMeaning)
	{
		document.getElementById("p3color_attribute").innerHTML = "Meaning";
	}
	else 
	{
		document.getElementById("p3color_attribute").innerHTML = "Colour";
	}
	//generate two random number: one for text, one for color
	var randomNumber = Math.floor(Math.random()*colors.length);
	var randomColor = Math.floor(Math.random()*colors.length); 
	
	//check if the numbers are equal
	if (randomNumber == randomColor) {
		//if they are, change randomNumber
		if (randomNumber < 3) {
			randomNumber++;	
		} else {
			randomNumber--;		
		}
	}
	//check if the color picked was shown 25 times (this will need to change)
	if (timesColorShowed[randomColor] == (repeats/4)+1) 
	{
		//if yes then pick the color that was shown least number of times
		randomColor = timesColorShowed.indexOf(Math.min.apply(null,timesColorShowed));
	} 
	//check if the difference between max and min number of displayed times is greater then 2
	if (Math.max.apply(null,timesColorShowed) - Math.min.apply(null,timesColorShowed) > 2){
		//if yes display randomColor with the min number
		randomColor = timesColorShowed.indexOf(Math.min.apply(null,timesColorShowed));
	}	
	//make sure every text color is displayed equal number of times
	if (timesTextShowed[randomNumber] == (repeats/4)+1) 
	{
		//if yes then pick the color text that was shown least number of times
		randomNumber = timesTextShowed.indexOf(Math.min.apply(null,timesTextShowed));
	} 
	//check if the difference between max and min number of displayed times is greater then 2
	if (Math.max.apply(null,timesTextShowed) - Math.min.apply(null,timesTextShowed) > 2){
		//if yes display randomNumber with the min number
		randomNumber = timesTextShowed.indexOf(Math.min.apply(null,timesTextShowed));
	}
	//can't be the same as last turn
	if (colors[randomColor] === previousColor || colors[randomNumber] === previousText)
	{
		if (randomNumber < 3) {
			randomNumber++;	
		} else {
			randomNumber--;		
		}		
	}
	//increment the color showed in an array
	timesColorShowed[randomColor] = timesColorShowed[randomColor] + 1;
	timesTextShowed[randomNumber] = timesTextShowed[randomNumber] +1;
	previousColor = colors[randomColor];
	previousText = colors[randomNumber];
	
	//display text and color
	colorView.innerHTML = colors[randomNumber];
	colorView.style.color = colors[randomColor];
		
	//increment turn and create timeout to change the color in 3 seconds
	turn++;
	timer = setTimeout(tick, 10);
}

function tick()
{	
	milliseconds = milliseconds + 10;
	if (milliseconds > timeForText)
	{		
		simpleStroopTestAnswersString += ",0";	
		reactionTime[reactionTimeIndex] = milliseconds;
		reactionTimeIndex++;
		milliseconds = 0;
		clearTimeout(timer);
		showWord();	
	}
	else
	{
		timer = setTimeout(tick, 10);
	}
}
