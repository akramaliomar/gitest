
<?php
require_once("../conn.php");
$sql = "SELECT *FROM user";
$result = $conn->prepare($sql);
$result->execute();

?>
	<table id="example" class="display" style="width:100%">
			
			   <thead>
<tr><th>NO.</th><th>Full Name</th><th>Phone</th><th>Role</th><th>Status</th><th>Action</th><th width="40px"><span class="glyphicon glyphicon-remove btn"></span></th></tr>
   </thead>
   <tbody>

<?php
$n=1;
$month=array("January","February","March","April","May","June","July","August","September","October","November","December");
$status=array(0=>"Inactive",1=>"Active");
if(!empty($result)) {
while($row=$result->fetch()){
	$mID=$row["mID"];
	
?>
<tr><td><?php echo $n; ?></td>
<td><?php echo $row["fname"].' '.$row["mname"].' '.$row["sname"] ?></td>
<td><?php echo $row["phone"] ?></td>
<td><?php echo $row["utype"] ?></td>

		<td><?php echo $status[$row["ustatus"]]; ?></td>
	

<td><a id="<?php echo $n*$n*$n ?>" class="btn actionBtn" onClick="showModal('<?php echo $row["mID"] ?>','<?php echo $row["fname"].' '.$row["mname"].' '.$row["sname"] ?>')"    >option</a><input type="hidden" id="<?php echo "mID".($n*$n) ?>" value="<?php echo $row["mID"] ?>" /></td>

<td><a id="<?php echo $n*$n*$n ?>" onClick="deleteUser('<?php echo $row["mID"] ?>','<?php echo $row["fname"].' '.$row["mname"].' '.$row["sname"] ?>')" ><span class="glyphicon  glyphicon-remove btn "></span></a></td>
</tr>
<?php
$n++;
}
}

?>
  	</tbody>
   	<tfoot>
<tr><th>NO.</th><th>Full Name</th><th>Phone</th><th>Role</th><th>Status</th><th>Action</th><th width="40px"><span class="glyphicon glyphicon-remove btn"></span></th></tr>  </tfoot>
   
</table>
