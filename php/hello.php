<?php
	$ip = $_SERVER['REMOTE_ADDR'];
	$res = mail('baudo81@gmail.com','new visit at baudo.hol.es',$ip);
	echo $res;
?>