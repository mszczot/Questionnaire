var questions = document.getElementsByClassName("question");
var position = 0;
var nextPosition = position + 1;
var progress_bar = document.getElementById("progress_bar");
var progress_bar_width = 17;
var aria_valuenow = 1;
var vegetarianQuestions = document.getElementById("vegetarians");
var next = document.getElementById("next");

function nextPage(){
	if (nextPosition < questions.length) {
		if (questions[position].id == "p2")
		{
			showNextPage();
  				  		
			console.log("stroop test");
			next.style.display = "none";
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