<?php
include("../session.php");
require_once("../conn.php");
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>

<link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="../bower_components/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="../bower_components/Ionicons/css/ionicons.min.css">
  <link rel="stylesheet" href="../dist/css/AdminLTE.min.css">
  <link rel="stylesheet" href="../dist/css/skins/_all-skins.min.css">
	<link type="text/css" rel="stylesheet" href="../css/jquery.dataTables.min.css"/>
	<link type="text/css" rel="stylesheet" href="../css/buttons.dataTables.min.css"/>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
	<script src="../bower_components/jquery/dist/jquery.min.js"></script>
<script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="../bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<script src="../bower_components/fastclick/lib/fastclick.js"></script>
<script src="../dist/js/adminlte.min.js"></script>
<script src="../dist/js/demo.js"></script>
<script src="../js/jquery.dataTables.min.js"></script>
<script src="../js/dataTables.buttons.min.js"></script>
<script src="../js/buttons.colVis.min.js"></script>
<script src="../js/jszip.min.js"></script>
<script src="../js/pdfmake.min.js"></script>
<script src="../js/vfs_fonts.js"></script>
<script src="../js/buttons.html5.min.js"></script>
<script src="../js/buttons.print.min.js"></script>
<script src="js/user.js"></script>

	<script type="text/javascript">
		
		$(document).ready(function() {
   

	 $('.sidebar-menu').tree();

} );

	</script>
   <style>


/* The Modal (background) */
.modal {
    
    width: 100%; /* Full width */
 
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 5px;
    border: 1px solid #888;
    width: 100%;
	
}
.modal-dialog {
    width: 80%;
}
	   td,th,table,tr{
		border: 1px solid #026BC0 !important;
		padding: 3px !important;
	}
	  table{
			border-collapse: collapse !important;
  
	  }
	</style>
</head>

<body class="hold-transition skin-blue sidebar-mini" onLoad="getUserList('userList.php')">



<div class="wrapper">

  <?php
include("../mainHeader.php");
	?>

  <!-- =============================================== -->

  <!-- Left side column. contains the sidebar -->
  <?php
	include("../sideBar.php");
	?>

  <!-- =============================================== -->

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
       User Pannel
      </h1>
      
    </section>

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">List of Regitered Users</h3>

          <div  class="box-tools pull-right">
           <button type="button" class="btn btn-primary " id="myBtn"   > New</button>
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                    title="Collapse">
              <i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
          </div>
        </div>
        <div  class="box-body">
        
        
              <div class="alert alert-success col-sm-8 col-sm-offset-2"  style="display: none; padding: 5px"  id="success-alert1">
    <strong>Congrat. </strong>
    Activation saved Successfully
</div>
            <div class="alert alert-danger col-sm-8 col-sm-offset-2" style="display: none; padding: 5px" id="danger-alert2">
   
   
</div>
        
        <div class="modal fade" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
    <span class=" close BtnClose" >&times;</span>
                 
                <h4 class="modal-title">Register New User</h4>
              </div>
              <div class="modal-body">
          
                <?php
				  include("addNewUser.php");
				  
				  ?>
             
              </div>
              <div class="modal-footer">
                <button type="button" type="button" id="BtnClose"  class="btn btn-default pull-left BtnClose" >Close</button>
                <button type="button" id="btnSave" onClick="addNewUser();" class="btn btn-primary">Save</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
         
         <div class="modal fade" id="actionModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
    <span class="close" onClick="closeModal();" >&times;</span>
                 <h4 class="modal-title"  >
              <strong>User :</strong> <span id="userName"></span>
				  </h4>
                <h4 class="modal-title"><button  onClick="showEdit()" type="button" class="btn btn-default" >
                Edit Profile
              </button>
               <button  onClick="viewUserProfile()" type="button" class="btn btn-success" >
                Profile
              </button>
       </h4>
              
              </div>
              <div class="modal-body" >
              	<div class="row">
              <div class="alert alert-success col-sm-8 col-sm-offset-2" style="display: none; padding: 5px"   id="success-alert">
    <strong>Congrat. </strong>
    Activation saved Successfully
</div>
            <div class="alert alert-danger col-sm-8 col-sm-offset-2 " style="display: none; padding: 5px" id="danger-alert1">
   
   
</div>
             	
             	
             	</div>
              	
              	
               	<input type="hidden"  id="mID">

                <div id="activation1">
                	
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" type="button"  onClick="closeModal();" id="BtnClose1"  class="btn btn-default pull-left BtnClose1" >Close</button>
                <button type="button" id="BtnSave" onClick="saveActivation();" class="btn btn-primary">Save</button>
                <button type="button" id="BtnEdit" onClick="updateUser();" class="btn btn-primary">Save Change</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        
       <div id="userLists">

</div>
  
     </div>
        <!-- /.box-body -->
        <div class="box-footer">
          
          
        </div>
        <!-- /.box-footer-->
      </div>
      <!-- /.box -->

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

    <?php
	include("../footer.php");
	?>

  <!-- Control Sidebar -->
  <?php
	include("../controlSidebar.php");
	?>

  <div class="control-sidebar-bg"></div>
</div>


</body>


</html>