<?php
require_once("../connection.php");
if(isset($_POST['updateFamily'])){
$familyName=$connection->real_escape_string($_POST['familyName']);
$fID=$connection->real_escape_string($_POST['fID']);
$check = $connection->query("SELECT * FROM family WHERE familyName='$familyName' and fID!='$fID'")or die($connection->error);
if($check->num_rows==0){
		$result1 = $connection->query("UPDATE family SET familyName='$familyName' WHERE fID='$fID'")or die($connection->error);
	if($connection->affected_rows==1){
		echo "success";
	}else{
		echo "No Update is Made";
	}

}else{
	echo "Name already exists";
}
}else{
	echo "error";
}
?>