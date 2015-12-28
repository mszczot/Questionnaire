
//repeats for stroop: 4 for practice and 100 for normal test
var repeats = 0;

var colors = ["RED", "YELLOW", "BLUE", "GREEN"]; //colors to iteratet thru
var timesColorShowed = [0,0,0,0]; //array that will hold number how many certain color was showed: red, yellow, blue, green
var timesTextShowed = [0,0,0,0]; //array to hold how many times each color text was shown

var colorAttribute = ["Colour","Meaning"]; //array to choose between colour and meaning of the word
var timesAttributeShowed = [0,0]; //array to hold number of times colour and meaning was shown

var p5colorView = document.getElementById("p5color_question"); //stroop test colour word
var p5atrributeView = document.getElementById("p5color_attribute"); //advanced stroop test option

var reactionTimeIndexAdvanced = 0;

//next four variables needs to be stored in database
var reactionTimeAdvancedStroop = [];
var reactionTimeAdvancedString = "";
var advancedStroopTestAnswersString = "";
var correctAnswersAdvanced = 0;
var wrongAnswersAdvanced = 0;

var boolOption;

var turn = 0; //number of turns

var timer;

var timeForText = 3000;

var milliseconds = 0;


//method to start the test
function advancedStroopTest(repeat)
{
	window.addEventListener("keydown", checkKeyPressed, true);

	timesColorShowed = [0,0,0,0];
	timesAttributeShowed = [0,0];
	timesTextShowed = [0,0,0,0];
	turn = 0;
	//sets the number of repeats and show the test view
	repeats = repeat;
	document.getElementById("green2").className = "btn btn-default ans";
	document.getElementById("blue2").className = "btn btn-default ans";
	document.getElementById("red2").className = "btn btn-default ans";
	document.getElementById("yellow2").className = "btn btn-default ans";
	document.getElementById("p5intro").style.display = "none";
	document.getElementById("p5test").style.display = "block";
	if (repeats === 4)
	{
		timeForText = 10000;
	}
	else 
	{
		timeForText = 3000;
	}
	showWordA();
}

 
function checkKeyPressed(e) {
	

    if (e.keyCode == 37)
    {
    	e.preventDefault();
		checkColorA("YELLOW");    		
		document.getElementById("yellow2").className = "btn btn-default.focus ans";
    }
    if (e.keyCode == 38)
    {
    	 e.preventDefault();
		checkColorA("RED");    
		document.getElementById("red2").className = "btn btn-default.focus ans";
    }
    if (e.keyCode == 39)
    {
    	 e.preventDefault();
		checkColorA("GREEN");    
		document.getElementById("green2").className = "btn btn-default.focus ans";
    }
    if (e.keyCode == 40)
    { 
    	e.preventDefault();
		checkColorA("BLUE");    
		document.getElementById("blue2").className = "btn btn-default.focus ans";
    }
    setTimeout(reset, 50);
}

function reset()
{
	document.getElementById("keys").focus();
	document.getElementById("green2").className = "btn btn-default ans";
	document.getElementById("blue2").className = "btn btn-default ans";
	document.getElementById("red2").className = "btn btn-default ans";
	document.getElementById("yellow2").className = "btn btn-default ans";
}

function setBoolOption()
{
	var randomBool = Math.floor(Math.random() * 2);
	if (timesAttributeShowed[randomBool] == (repeats/2)+1) 
	{
		bool = !Boolean(randomBool);
	} 
	else if (timesAttributeShowed[0] - timesAttributeShowed[1] > 2){
		bool = true;
	}
	else if (timesAttributeShowed[1] - timesAttributeShowed[0] > 2)
	{
		bool = false;
	}		
	else 
	{
		bool = Boolean(randomBool);
	}
	
	if (bool)
	{
		timesAttributeShowed[1] = timesAttributeShowed[1] + 1;
	}
	else 
	{
		timesAttributeShowed[0] = timesAttributeShowed[0] + 1;
	}
	return bool;
}

function showWordA()
{
	boolOption = setBoolOption();
	//first half of the items shown will be meaning
	if (turn < repeats)
	{
		displayDetailsA(boolOption);
	}
	//else get out of the test
	else 
	{
		//if the repeats was only four then go back to previous screen
		if (repeats == 4)
		{
			document.getElementById("p5intro").style.display = "block";
			document.getElementById("p5test").style.display = "none";
		}	
		//else show next page
		else 
		{
			getAdvanceReactionTimeToString();			
			nextPage();
			
		}
	}
	if (repeats === 4)
	{
	document.getElementById("green2").className = "btn btn-default ans";
	document.getElementById("blue2").className = "btn btn-default ans";
	document.getElementById("red2").className = "btn btn-default ans";
	document.getElementById("yellow2").className = "btn btn-default ans";
	var color;
	if (p5atrributeView.innerHTML == "Meaning")
	{
		color = p5colorView.innerHTML;
		switch (color) {
			case "RED": 
				document.getElementById("red2").className = "btn btn-success ans";
				break;
			case "GREEN": 
				document.getElementById("green2").className = "btn btn-success ans";
				break;
			case "BLUE": 
				document.getElementById("blue2").className = "btn btn-success ans";
				break;
			case "YELLOW": 
				document.getElementById("yellow2").className = "btn btn-success ans";
				break;
		}
	}
	else
	{		
		color = p5colorView.style.color;
		switch (color.toUpperCase()) {
			case "RED": 
				document.getElementById("red2").className = "btn btn-success ans";
				break;
			case "GREEN": 
				document.getElementById("green2").className = "btn btn-success ans";
				break;
			case "BLUE": 
				document.getElementById("blue2").className = "btn btn-success ans";
				break;
			case "YELLOW": 
				document.getElementById("yellow2").className = "btn btn-success ans";
				break;
		}
	}
	}	
}

function showHint()
{

}

function getAdvanceReactionTimeToString()
{
	for (i=0; i<reactionTimeAdvancedStroop.length;i++)
	{
		reactionTimeAdvancedString += "," + reactionTimeAdvancedStroop[i];
	}
}

//function to check if the clicked button is the correct one
function checkColorA(clickedColor) 
{
	
	console.log(clickedColor);
	//depending on the boolean if true then check meaning if false then check color
	if (boolOption)
	{
		if (clickedColor == colorView.innerHTML)
		{
			advancedStroopTestAnswersString += ",1";
			correctAnswersAdvanced++;
			clearTimeout(timer);
			showWordA();		
			
		}
		else
		{
			advancedStroopTestAnswersString += ",0";
			wrongAnswersAdvanced++;
			clearTimeout(timer);
			showWordA();
		}		
	}
	else 
	{
		if (clickedColor.toLowerCase() == colorView.style.color)
		{
			advancedStroopTestAnswersString += ",1";
			correctAnswersAdvanced++;	
			clearTimeout(timer);
			showWordA();
		}
		else 
		{
			advancedStroopTestAnswersString += ",0";
			wrongAnswersAdvanced++;
			clearTimeout(timer);
			showWordA();
		}
	}
	reactionTimeAdvancedStroop[reactionTimeIndexAdvanced] = milliseconds;
	milliseconds = 0;
	reactionTimeIndexAdvanced++;
}

function showStartOfTest() 
{
	document.getElementById("p5intro").style.display = "block";
	document.getElementById("p5test").style.display = "none";
}

//function to display the test and whether its color or meaning. 
function displayDetailsA(isMeaning)
{
	if (isMeaning)
	{
		document.getElementById("p5color_attribute").innerHTML = "Meaning";
	}
	else 
	{
		document.getElementById("p5color_attribute").innerHTML = "Colour";
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
	//increment the color showed in an array
	timesColorShowed[randomColor] = timesColorShowed[randomColor] + 1;
	timesTextShowed[randomNumber] = timesTextShowed[randomNumber] +1;
	
	//display text and color
	p5colorView.innerHTML = colors[randomNumber];
	p5colorView.style.color = colors[randomColor];
		
	//increment turn and create timeout to change the color in 3 seconds
	turn++;
	timer = setTimeout(tickA, 10);
}

function tickA()
{	
	milliseconds = milliseconds + 10;
	if (milliseconds > timeForText)
	{		
		advancedStroopTestAnswersString += ",0";	
		reactionTimeAdvancedStroop[reactionTimeIndexAdvanced] = milliseconds;
		reactionTimeIndexAdvanced++;
		milliseconds = 0;
		clearTimeout(timer);
		showWordA();	
	}
	else
	{
		timer = setTimeout(tickA, 10);
	}
}
