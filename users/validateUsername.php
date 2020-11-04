<?php
if(isset($_POST['mID']) and !empty($_POST['mID'])){
	require_once("../conn.php");
	$mID=$_POST['mID'];
	$query="SELECT *FROM user where mID like '%?%'";
	$check=$conn->prepare($query);
	$check->execute([$mID]);
	$num=$check->rowCount();
	if($num>0){
		echo "Exist!";
	}
	
	}
?>