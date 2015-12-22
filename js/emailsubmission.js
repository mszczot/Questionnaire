$(document).ready(function() {
  $("#addEmail").click(function()  {
	var email = document.getElementById("emailValue").value;
	console.log(email);
    $.ajax({
      type: "POST",
      url: "php/email.php",
      data: {email: email},
		
        success: function() {
	  console.log("Success");
          document.getElementById("email").innerHTML = "Thank you for entering into the draw";
        },
        error: function() {
          alert("There was an error. Try submit again, please!");
        }
   });
});
});
