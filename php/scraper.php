<?php

	$url = $_GET['textToSearch'];
	$result_page = file_get_contents($url);
	echo $result_page;
?>