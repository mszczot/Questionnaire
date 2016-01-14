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

$sql = "SELECT max(id) FROM answers";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Number of questionnaire completed: " . $row["id"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>