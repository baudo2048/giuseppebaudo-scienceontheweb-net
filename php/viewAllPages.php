<?php

$servername = "localhost";
$username = "root";
$password = "sophia<2006";
$dbname = "baudo";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM pages";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    echo "<ul>";
    while($row = $result->fetch_assoc()) {
    	echo '<li><a href="' . $row["title"] . '">' .$row["name"] . '</a></li>';
        
    }
    echo "</ul>";

} else {
    echo "0 results";
}
$conn->close();

?>