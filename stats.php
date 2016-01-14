<?php
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

$sql = "SELECT * FROM answers";

if ($result=mysqli_query($conn,$sql))
{

	$num_rows = mysqli_num_rows($result);
	echo "Number of questionnaires completed: $num_rows <br><br>";
}

$sql1 = "SELECT p1q1, COUNT(*) as no FROM answers GROUP BY p1q1";

if ($result1=mysqli_query($conn,$sql1))
{
	while($row = $result1->fetch_assoc()) {
		echo $row['p1q1']. " " .$row['no']. "<br>";
	}
}
$conn->close();
?>
