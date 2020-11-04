<?php
require_once("../conn.php");
if(isset($_POST['saveMember'])){
$fname=$_POST['fname'];
$mname=$_POST['mname'];
$sname=$_POST['sname'];
$phone=$_POST['phone'];
$mID=$_POST['mID'];
$utype=$_POST['utype'];
$password=sha1($_POST['fname']);
$activation=$_POST['activation'];

$mRegDate=date("Y-m-d");
$check = $conn->prepare("SELECT * FROM user WHERE mID=?");
$check->execute([$mID]);
if($check->rowCount()==0){
	
		$result1 = $conn->prepare("INSERT INTO user(mID,fname, mname,sname,phone,ustatus,mRegDate,utype,password)values(?,?,?,?,?,?,?,?,?)");
		$result1->execute([$mID,$fname,$mname,$sname,$phone,1,$mRegDate,$utype,$password]);
	if($result1->rowCount()){
		
		echo "success";
	}else{
		echo "error";
	}

}else{
	echo "exists";
}
}else{
	echo "error";
}
?>