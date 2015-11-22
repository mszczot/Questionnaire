<?php

if  ($_POST) 
{
	$servername = "localhost";
	$username = "root";
	$password = "koltun123";
	$dbname = "questionnaire";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	$p1q1 = ($_POST['p1q1']);
	$p1q2 = json_decode($_POST['p1q2']);
	$p1q3 = json_decode($_POST['p1q3']);
	$p1q4 = json_decode($_POST['p1q4']);
	$p1q5 = ($_POST['p1q5']);
	$p1q6 = ($_POST['p1q6']);
	session_start();
	$_SESSION['p1q1']=$p1q;


	$sql = "INSERT INTO answers (p1q1, p1q2, p1q3, p1q4, p1q5, p1q6) 
				VALUES ('$p1q1', '$p1q2', '$p1q3', '$p1q4', '$p1q5', '$p1q6')";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	   echo "Error: " . $sql . "<br>" . $conn->error;
	}
	echo "<h2>Thank you for your Comment!</h2>";

	$conn->close();
}

?> 