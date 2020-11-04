<table id="bootstrap-data-table" class="table table-striped table-bordered">

            		<?php 
require_once("../conn.php");
$mID=$_POST['mID'];
$check = $conn->prepare("SELECT * FROM user WHERE mID=?");
$check->execute([$mID]);
$row=$check->fetch();
$path="../picture/".$row["photo"];

$status=array(0=>"Inactive",1=>"Active");
	
	
		?>
				    <tr><td width="25%">User ID:</td><td align="left" ><?php echo $row['mID']; ?></td><td width="25%" rowspan="9">
					  	
					  	<img class="img-circle" src="<?php echo $path ?>"  alt="User Avatar"/>
					  		<button type="button"  class="btn btn-block btn-success">CHANGE PICTURE</button>				  	

					  </td></tr>
					  <tr><td>Full Name:</td><td align="left" ><?php echo $row['fname'].' '.$row['mname'].' '.$row['sname']; ?></td></tr>
					  <tr><td>Phone:</td><td align="left" ><?php echo $row['phone']; ?></td></tr>
					  <tr><td>Date Registered:</td><td align="left" ><?php echo $row['mRegDate']; ?></td></tr>
					  <tr><td>Role:</td><td align="left" ><?php echo $row['utype']; ?></td></tr>
					  <tr><td>Status:</td><td align="left" ><?php echo $status[$row["ustatus"]]; ?></td></tr>		 
				
                  </table>