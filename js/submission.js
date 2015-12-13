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