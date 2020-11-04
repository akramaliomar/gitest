<?php
require_once("../conn.php");
if(isset($_POST['mID'])){
$mID=$_POST['mID'];
$check = $conn->prepare("DELETE FROM user WHERE mID=?");
$check->execute([$mID]);
	if($check->rowCount()==0){
		echo "error";
	}else{
		echo "success";
	}
}else{
	echo "error";
}
?>