<?php
	mysql_connect("localhost","root","sophia<2006");
	@mysql_select_db("baudo") or die( "Unable to select database");

	$query = "SELECT * FROM keys";
	$result = mysql_query($query);
	$num=mysql_numrows($result);
	echo $num;
	mysql_close();

?>