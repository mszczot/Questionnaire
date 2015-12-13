/* This part is for the stroop test
*
*/
//repeats for stroop: 4 for practice and 100 for normal test
var repeats = 0;
var colors = ["RED", "YELLOW", "BLUE", "GREEN"]; //colors to iteratet thru
var timesColorShowed = [0,0,0,0]; //array that will hold number how many certain color was showed: red, yellow, blue, green
var colorAttribute = ["Colour", "Meaning"]; //array to choose between colour and meaning of the word
var timesAttributeShowed = [0,0]; //array to hold number of times colour and meaning was shown
var colorView = document.getElementById("color_question"); //stroop test colour word
var advancedColorView = document.getElementById("p5color_question"); //advanced stroop test colour word
var advancedAtrributeView = document.getElementById("p5color_attribute"); //advanced stroop test option
var answers = 0; //number of answers
var turn = 0; //number of turns
//answers for stroop and advanced stroop
var stroopAnswers;
var advancedStroopAnswers;

//variables for timer
var TotalSeconds;
var t;
var view;

//starting function for simple stroop test
function stroopTest(a) {
	document.getElementById("p3intro").style.display = "none";
	document.getElementById("test_view").style.display = "block";
	repeats = a;
	view = colorView;
	getColor(view);
}

function advancedStroopTest(a) {
	document.getElementById("p5intro").style.display = "none";
	document.getElementById("p5test_view").style.display = "block";
	repeats = a;
	view = advancedColorView;
	getColor(view);
}

function getColor(view) {
	if (turn != repeats)
	{
		generateColors(view);
		CreateTimer("timer", 2);
		console.log(timesAttributeShowed);
		if (view.id == "p5color_question")
		{
			generateColorAttribute();
		}
	} else {		
		document.getElementById("p3intro").style.display = "block";
		document.getElementById("test_view").style.display = "none";	
		document.getElementById("p5intro").style.display = "block";
		document.getElementById("p5test_view").style.display = "none";
		turn = 0;	
		timesColorShowed = [0,0,0,0];
		if (view.id = "color_question")
		{
			stroopAnswers = answers;		
			console.log("Correct Answers: " + stroopAnswers);
		}
		else {
			advancedStroopAnswers = answers;
			console.log("Correct Answers: " + advancedStroopAnswers);
		}
		answers = 0;
	}
}

function generateColorAttribute() {
	var randomNumber = Math.floor(Math.random()*colorAttribute.length);	
	if (timesColorShowed[randomNumber] == 30) 
	{
		randomNumber = timesAttributeShowed.indexOf(Math.min.apply(null,timesAttributeShowed));
	} 	
	if (Math.max.apply(null,timesAttributeShowed) - Math.min.apply(null,timesAttributeShowed) > 1){
		randomNumber = timesAttributeShowed.indexOf(Math.min.apply(null,timesAttributeShowed));
	}
	document.getElementById("p5color_attribute").innerHTML = colorAttribute[randomNumber];
	timesAttributeShowed[randomNumber] = timesAttributeShowed[randomNumber] +1;	
}

function generateColors(view) {
	var randomNumber = Math.floor(Math.random()*colors.length);
	var randomColor = Math.floor(Math.random()*colors.length);
	if (randomNumber == randomColor) {
		if (randomNumber < 3) {
			randomNumber++;	
		} else {
			randomNumber--;		
		}
	}
	if (timesColorShowed[randomColor] == 25) 
	{
		randomColor = timesColorShowed.indexOf(Math.min.apply(null,timesColorShowed));
	} 
	if (Math.max.apply(null,timesColorShowed) - Math.min.apply(null,timesColorShowed) > 2){
		randomColor = timesColorShowed.indexOf(Math.min.apply(null,timesColorShowed));
	}
	timesColorShowed[randomColor] = timesColorShowed[randomColor] + 1;
	view.innerHTML = colors[randomNumber];
	view.style.color = colors[randomColor];
}

function checkColor(clickedColor) {
	if (clickedColor == view.style.color)
	{
		answers++;
	}
	ResetTimer();
	turn++;
	getColor(view);
}

function checkColorAndAttribute(clickedColor) {
	if (document.getElementById("p5color_attribute").innerHTML == "Colour")
	{
		checkColor(clickedColor);
	} else if (document.getElementById("p5color_attribute").innerHTML == "Meaning") {
		if (clickedColor == view.innerHTML)	{
			answers++;
		}
		ResetTimer();
		turn++;
		getColor(view);
	}
}

//Timer functions

function CreateTimer(TimerID, Time) {
	TotalSeconds = Time;

	UpdateTimer()
	t = setTimeout("Tick()", 1000);
}

function Tick() {
	if (TotalSeconds <= 1) {
		checkColor("null");
		return;
	}
	TotalSeconds -= 1;
	UpdateTimer()
	t = setTimeout("Tick()", 1000);
}
			
function ResetTimer() {
	clearTimeout(t);
}

function UpdateTimer() {
	var Seconds = TotalSeconds;
	var Days = Math.floor(Seconds / 86400);
	Seconds -= Days * 86400;
			
	var Hours = Math.floor(Seconds / 3600);
	Seconds -= Hours * (3600);
		
	var Minutes = Math.floor(Seconds / 60);
	Seconds -= Minutes * (60);
		
	var TimeStr = Seconds;

}
						
function LeadingZero(Time) {
	return (Time < 10) ? "0" + Time : + Time;
}

//end of timer functions
