
//repeatsa for stroop: 4 for practice and 100 for normal test
var repeatsa = 0;

var colors = ["RED", "YELLOW", "BLUE", "GREEN"]; //colors to iteratet thru
var timesColorShoweda = [0,0,0,0]; //array that will hold number how many certain color was showed: red, yellow, blue, green
var timesTextShoweda = [0,0,0,0]; //array to hold how many times each color text was shown

var colorAttribute = ["Meaning", "Colour"]; //array to choose between colour and meaning of the word
var timesAttributeShoweda = [0,0]; //array to hold number of times colour and meaning was shown

var colorViewa = document.getElementById("p3acolor_question"); //stroop test colour word
var atrributeViewa = document.getElementById("p3acolor_attribute"); //advanced stroop test option

var reactionTimeaIndexa = 0;

//next four variables needs to be stored in database
var reactionTimea = [];
var reactionTimeaString = "";
var simpleStroopTestAnswersStringa = "";
var correctAnswersa = 0;
var wrongAnswersa = 0;

var boolOption;

var turna = 0; //number of turnas

var timer;

var timeForText = 3000;

var milliseconds = 0;




//method to start the test
function colorStroopTest(repeat, meaning)
{
	console.log(repeat);
	//sets the number of repeatsa and show the test view
	repeatsa = repeat;
	boolOption = meaning;
	document.getElementById("p3agreen1").className = "btn btn-default ans";
	document.getElementById("p3ablue1").className = "btn btn-default ans";
	document.getElementById("p3ared1").className = "btn btn-default ans";
	document.getElementById("p3ayellow1").className = "btn btn-default ans";
	document.getElementById("p3aintro").style.display = "none";
	document.getElementById("p3atest").style.display = "block";
	if (repeatsa === 4)
	{
		timeForText = 10000;
	}
	else 
	{
		timeForText = 3000;
	}
	showWorda();
	
}

function showWorda()
{
	console.log(boolOption); 
	//first half of the items shown will be meaning
	if (turna < repeatsa)
	{
		displayDetailsa(boolOption);
	}
	//else get out of the test
	else 
	{
		//if the repeatsa was only four then go back to previous screen
		if (repeatsa === 4)
		{
			turna = 0;
			document.getElementById("p3aintro").style.display = "block";
			document.getElementById("p3atest").style.display = "none";
		}	
		//else show next page
		else 
		{
			nextPage();
			getreactionTimeaToString();
		}
	}
	if (repeatsa === 4)
	{

	document.getElementById("p3agreen1").className = "btn btn-default ans";
	document.getElementById("p3ablue1").className = "btn btn-default ans";
	document.getElementById("p3ared1").className = "btn btn-default ans";
	document.getElementById("p3ayellow1").className = "btn btn-default ans";
	var color;
	if (atrributeViewa.innerHTML == "Meaning")
	{
		color = colorViewa.innerHTML;
		switch (color) {
			case "RED": 
				document.getElementById("p3ared1").className = "btn btn-success ans";
				break;
			case "GREEN": 
				document.getElementById("p3agreen1").className = "btn btn-success ans";
				break;
			case "BLUE": 
				document.getElementById("p3ablue1").className = "btn btn-success ans";
				break;
			case "YELLOW": 
				document.getElementById("p3ayellow1").className = "btn btn-success ans";
				break;
		}
	}
	else 
	{		
		color = colorViewa.style.color;
		
		switch (color.toUpperCase()) {
			case "RED": 
				document.getElementById("p3ared1").className = "btn btn-success ans";
				break;
			case "GREEN": 
				document.getElementById("p3agreen1").className = "btn btn-success ans";
				break;
			case "BLUE": 
				document.getElementById("p3ablue1").className = "btn btn-success ans";
				break;
			case "YELLOW": 
				document.getElementById("p3ayellow1").className = "btn btn-success ans";
				break;
		}
	}
	}
}


function getreactionTimeaToStringa()
{
	for (i=0; i<reactionTimea.length;i++)
	{
		reactionTimeaString += "," + reactionTimea[i];
	}
}

//function to check if the clicked button is the correct one
function checkColora(clickedColor) 
{
	//depending on the boolean if true then check meaning if false then check color
	if (boolOption)
	{
		if (clickedColor == colorViewa.innerHTML)
		{
			simpleStroopTestAnswersStringa += ",1";
			correctAnswersa++;
			clearTimeout(timer);
			showWorda();		
			
		}
		else
		{
			simpleStroopTestAnswersStringa += ",0";
			wrongAnswersa++;
			clearTimeout(timer);
			showWorda();
		}		
	}
	else 
	{
		if (clickedColor.toLowerCase() == colorViewa.style.color)
		{
			simpleStroopTestAnswersStringa += ",1";
			correctAnswersa++;	
			clearTimeout(timer);
			showWorda();
		}
		else 
		{
			simpleStroopTestAnswersStringa += ",0";
			wrongAnswersa++;
			clearTimeout(timer);
			showWorda();
		}
	}
	reactionTimea[reactionTimeaIndexa] = milliseconds;
	milliseconds = 0;
	reactionTimeaIndexa++;
}

function showStartOfTesta() 
{
	document.getElementById("p3aintro").style.display = "block";
	document.getElementById("p3atest").style.display = "none";
}

//function to display the test and whether its color or meaning. 
function displayDetailsa(isMeaning)
{
	
	boolOption = isMeaning;
	if (isMeaning)
	{
		document.getElementById("p3acolor_attribute").innerHTML = "Meaning";
	}
	else 
	{
		document.getElementById("p3acolor_attribute").innerHTML = "Colour";
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
	if (timesColorShoweda[randomColor] == (repeatsa/4)+1) 
	{
		//if yes then pick the color that was shown least number of times
		randomColor = timesColorShoweda.indexOf(Math.min.apply(null,timesColorShoweda));
	} 
	//check if the difference between max and min number of displayed times is greater then 2
	if (Math.max.apply(null,timesColorShoweda) - Math.min.apply(null,timesColorShoweda) > 2){
		//if yes display randomColor with the min number
		randomColor = timesColorShoweda.indexOf(Math.min.apply(null,timesColorShoweda));
	}	
	//make sure every text color is displayed equal number of times
	if (timesTextShoweda[randomNumber] == (repeatsa/4)+1) 
	{
		//if yes then pick the color text that was shown least number of times
		randomNumber = timesTextShoweda.indexOf(Math.min.apply(null,timesTextShoweda));
	} 
	//check if the difference between max and min number of displayed times is greater then 2
	if (Math.max.apply(null,timesTextShoweda) - Math.min.apply(null,timesTextShoweda) > 2){
		//if yes display randomNumber with the min number
		randomNumber = timesTextShoweda.indexOf(Math.min.apply(null,timesTextShoweda));
	}
	//increment the color showed in an array
	timesColorShoweda[randomColor] = timesColorShoweda[randomColor] + 1;
	timesTextShoweda[randomNumber] = timesTextShoweda[randomNumber] +1;
	
	//display text and color
	colorViewa.innerHTML = colors[randomNumber];
	colorViewa.style.color = colors[randomColor];
		
	//increment turna and create timeout to change the color in 3 seconds
	turna++;
	timer = setTimeout(ticka, 10);
}

function ticka()
{	
	milliseconds = milliseconds + 10;
	if (milliseconds > timeForText)
	{		
		simpleStroopTestAnswersStringa += ",0";	
		reactionTimea[reactionTimeaIndexa] = milliseconds;
		reactionTimeaIndexa++;
		milliseconds = 0;
		clearTimeout(timer);
		showWorda();	
	}
	else
	{
		timer = setTimeout(ticka, 10);
	}
}