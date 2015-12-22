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

	$email = ($_POST['email']);

	$sql = "INSERT INTO emails (email) VALUES ('$email')";


	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	   echo "Error: " . $sql . "<br>" . $conn->error;
	}
	echo "<h2>Thank you for your Comment!</h2>";

	$conn->close();
}

?> 
