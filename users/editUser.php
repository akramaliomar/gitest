<form role="form">
       
                    <div class="alert alert-success col-sm-8 col-sm-offset-2" style="display: none; padding: 5px"   id="success-alert4">
    <strong>Congrat. </strong>
    User Updated Successfully
</div>
             <?php
require_once("../conn.php");
if(isset($_POST['mID'])){
$mID=$_POST['mID'];
$check = $conn->prepare("SELECT * FROM user WHERE mID=?");
$check->execute([$mID]);
$row=$check->fetch();

	?>
             <div class="form-group col-sm-4">
                  <label for="emID">Username <span id="emID-info" class="info"></span></label>
                  <input readonly type="text" class="form-control InputBox" id="emID" value="<?php echo $row["mID"]?>"  onKeyUp="validateUserName1()" placeholder="Enter Username">      
                  <input type="hidden"  id="oldmID" value="<?php echo $row["mID"]?>">
                </div>
                 <div class="form-group col-sm-4">
                  <label for="efname">First Name <span id="efname-info" class="info"></span></label>
                  <input type="text" value="<?php echo $row["fname"]?>" class="form-control InputBox" id="efname" placeholder="Enter First Name">
                </div>
                 
                 <div class="form-group col-sm-4">
                  <label for="emname">Middle Name <span id="emname-info" class="info"></span></label>
                  <input type="text" class="form-control InputBox" id="emname" value="<?php echo $row["mname"]?>" placeholder="Enter Middle Name">
                </div>
                 
                 <div class="form-group col-sm-4">
                  <label for="esname">Surname <span id="esname-info" class="info"></span></label>
                  <input type="text"  class="form-control InputBox" value="<?php echo $row["sname"]?>" id="esname" placeholder="Enter Surname">
                </div>
                 
                 <div class="form-group col-sm-4">
                  <label for="ephone">Phone <span id="ephone-info" class="info"></span></label>
                  <input type="text" value="<?php echo $row["phone"]?>" class="form-control InputBox" id="ephone" placeholder="Enter Phone Number">
                </div>
                
                
                 
                
    <div class="form-group col-sm-4">
     <label for="eutype">Role <span id="eutype-info" class="info"></span></label>
     <select id="eutype" class="form-control InputBox">
     <option value="">Choose..</option>
     <option <?php if($row['utype']=="Administrator"){ ?> selected <?php } ?> value="Administrator">Administrator</option>
	 <option <?php if($row['utype']=="Manager"){ ?> selected <?php } ?> value="Manager">Manager</option>
	<option <?php if($row['utype']=="Seller"){ ?> selected <?php } ?> value="Seller">Seller</option>
	<option <?php if($row['utype']=="Customer"){ ?> selected <?php } ?> value="Customer">Customer</option>
	
                  </select>
                </div> 
                 
               <div class="form-group col-sm-4">
                  <label for="activation">Activation <span id="activation-info" class="info"></span></label>
                  <select id="activation" class="form-control InputBox">
                   <option value="">Choose..</option>
                    <option <?php if($row['ustatus']==1){ ?> selected <?php } ?> value="1">Active</option>
                    <option <?php if($row['ustatus']==0){ ?> selected <?php } ?> value="0">Inactive</option>
                  </select>
                </div>  <div class="form-group col-sm-4">
                  
                </div>  <div class="form-group col-sm-4">
                  
                </div> 
              <!-- /.box-body -->
<?php
}
	?>

            </form>
  