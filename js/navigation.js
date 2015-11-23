var questions = document.getElementsByClassName("question");
var position = 0;
var nextPosition = position + 1;
var progress_bar = document.getElementById("progress_bar");
var progress_bar_width = 17;
var aria_valuenow = 1;
var vegetarianQuestions = document.getElementById("vegetarians");
var next = document.getElementById("next");

//repeats for stroop: 4 for practice and 100 for normal test
var repeats = 0;

function nextPage(){
	if (nextPosition < questions.length) {
		if (questions[position].id == "p2")
		{
			showNextPage();
  				  		
			document.getElementById("test_view").style.display = "none";
			console.log("stroop test");
//uncomment this line after finishing development
//			next.style.display = "none";
		}
		else if (questions[position].id == "p4")
		{
			showNextPage();
  				  		
			document.getElementById("p5test_view").style.display = "none";
			console.log("advanced stroop test");
//uncomment this line after finishing development
//			next.style.display = "none";
		} else {
			showNextPage();
  		}	
  	} else {
  		progress_bar.setAttribute("style", "width:100%");
		questions[position].style.display="none";		
		next.style.display = "none";
		document.getElementById("btnSubmit").style.display = "block";
  	}
}

function start(){
	var value = false;
	if (document.getElementById('start1').checked) {
  		value = document.getElementById('start1').value;
  		questions[position].style.display="none";
  		questions[nextPosition].style.display="block";
  		position++;
  		nextPosition++;
  		
  		document.getElementById("progress").style.display="block";
  		
  		next.setAttribute("onClick", "javascript: nextPage();")
  		
  		window.scrollTo(0,0);
  		  		
	} else if (document.getElementById('start2').checked) {
   	value = document.getElementById('start2').value;
	} 
 
	if (value == false) {
   	alert('Please select an option');
	}
}

function vegetarianOption() {
	var answers = document.getElementsByName("p2q1");
	
	for (var elem in answers) 
	{
		if (answers[elem].checked) {
			if (answers[elem].value == "1") {
				vegetarianQuestions.style.display = "none";
			} else {
				vegetarianQuestions.style.display = "block";			
			}
		}	
	}
}

function showNextPage() {
  	questions[position].style.display="none";
	questions[nextPosition].style.display="block";
  			
 	position++;
  	nextPosition++;
  		
 	progress_bar.setAttribute("style", "width:"+progress_bar_width+"%");
	progress_bar.setAttribute("aria-valuenow", aria_valuenow);
  	aria_valuenow++;
  	progress_bar_width += 17;
  		
  	window.scrollTo(0,0);
}

$(document).ready(function() {
  $("#btnSubmit").click(function()  {
  	console.log("clicking");
	var p1q1 = $("input[type='radio'][name='p1q1']:checked").val();
	var p1q2 = $("input[type='radio'][name='p1q2']:checked").val();
	var p1q3 = $("input[type='radio'][name='p1q3']:checked").val();
	var p1q4 = $("input[type='radio'][name='p1q4']:checked").val();
	var p1q5 = $("#country2 option:selected").text();
	var p1q6 = $("#industryDropdown option:selected").text();
	var p1q7 = $("input[type='radio'][name='p1q7']:checked").val();
	var p2q1 = $("input[type='radio'][name='p2q1']:checked").val();
	var p2q2 = $("input[type='radio'][name='p2q2']:checked").val();
	var p2q3 = $("input[type='radio'][name='p2q3']:checked").val();
	var p2q4 = $("input[type='radio'][name='p2q4']:checked").val();
	var p2q5 = $("input[type='radio'][name='p2q5']:checked").val();
	console.log(p2q3);
	console.log(p2q4);
	console.log(p2q5);
    $.ajax({
      type: "POST",
      url: "php/send.php",
      data: {p1q1: p1q1, p1q2: p1q2, p1q3: p1q3, p1q4: p1q4, p1q5: p1q5, p1q6: p1q6, p1q7: p1q7, p2q1: p2q1, p2q2: p2q2},
        success: function() {
          alert("Thank you for completing the survey!");
        },
        error: function() {
          alert("There was an error. Try submit again, please!");
        }
   });
});
});

/* This part is for the stroop test
*
*/
var colors = ["RED", "YELLOW", "BLUE", "GREEN"];
var timesColorShowed = [0,0,0,0];
var colorAttribute = ["Colour", "Meaning"];
var colorView = document.getElementById("color_question");
var advancedColorView = document.getElementById("p5color_question");
var advancedAtrributeView = document.getElementById("p5color_attribute");
var stroopAnswers = 0;
var turn = 0;

var TotalSeconds;
var t;
var view;

function stroopTest(a) {
	document.getElementById("p3intro").style.display = "none";
	document.getElementById("test_view").style.display = "block";
	repeats = a;
	view = colorView;
	console.log(view);
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
	}
}

function generateColorAttribute() {
	var randomNumber = Math.floor(Math.random()*colorAttribute.length);
	document.getElementById("p5color_attribute").innerHTML = colorAttribute[randomNumber];
}

function generateColors(view) {
	var randomNumber = Math.floor(Math.random()*colors.length);
	var randomColor = Math.floor(Math.random()*colors.length);
	if (randomNumber == randomColor) {
		randomNumber++;	
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
	console.log("clicked color: " + clickedColor);
	console.log("correct color: " + colorView.style.color);
	if (clickedColor == colorView.style.color)
	{
		stroopAnswers++;
	}
	ResetTimer();
	turn++;
	getColor(view);
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
