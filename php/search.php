<?php
	include_once './connection.php';

	echo "search<br />";

	// qui prendo le chiavi le splitto etc.
	$keys = explode(" ", trim($_GET['key']));
	
	// faccio la ricerca sul db
	$stmt = $dbh->prepare("SELECT * FROM key = ?");
	if ($stmt->execute($keys[0])) {
  		while ($row = $stmt->fetch()) {
    		print_r($row);
  		}
	}
	


?>