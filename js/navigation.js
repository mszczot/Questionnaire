var questions = document.getElementsByClassName("question");
var position = 0;
var nextPosition = position + 1;
var progress_bar = document.getElementById("progress_bar");
var progress_bar_width = 12.5;
var aria_valuenow = 1;
var vegetarianQuestions = document.getElementById("vegetarians");
var next = document.getElementById("next");



function nextPage(){
	if (nextPosition < questions.length) {
		if (questions[position].id == "p2") //stroop test
		{
			showNextPage();
  				  		
			document.getElementById("p3test").style.display = "none";
//uncomment this line after finishing development
			//next.style.display = "none";
		}
		else if (questions[position].id == "p3") //n-back test
		{
			showNextPage();
			
			document.getElementById("p4test").style.display = "none";
			//next.style.display = "none";
		}
		else if (questions[position].id == "p4") //advanced stroop test
		{
			showNextPage();
  				  		
			document.getElementById("p5test").style.display = "none";
//uncomment this line after finishing development
			//next.style.display = "none";
		} else {
			next.style.display = "block";
			showNextPage();
  		}	
  	} else {
  		progress_bar.setAttribute("style", "width:100%");
		questions[position].style.display="none";		
		next.style.display = "none";
		document.getElementById("submit_button").style.display = "block";
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
  	progress_bar_width += 12.5;
  		
  	window.scrollTo(0,0);
}



