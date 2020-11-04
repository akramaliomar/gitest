<?php
require_once("../conn.php");
if(isset($_POST['updateUser'])){
$fname=$_POST['fname'];
$mname=$_POST['mname'];
$sname=$_POST['sname'];
$phone=$_POST['phone'];
$mID=$_POST['mID'];
$utype=$_POST['utype'];
$password=sha1($_POST['fname']);
$result1 = $conn->prepare("UPDATE user SET fname=?, mname=?,sname=?,phone=?,utype=? WHERE mID=?");
$result1->execute([$fname,$mname,$sname,$phone,$utype,$mID]);
	if($result1->rowCount()==1){
		echo "success";
	}else{
		echo "No Update is Made";
	}

}else{
	echo "error";
}
?>