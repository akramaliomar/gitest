$(document).ready(function(){
    $("#myBtn").click(function(){
		$("#mID").val("");
		$("#fname").val("");
		$("#mname").val("");
		$("#sname").val("");
		$("#phone").val("");
		$("#utype").val("");
		$("#actMonth").val("");
		$(".InputBox").css('background-color','');
		$(".info").html('');
		$("#mID-info").css('color','#F00');
        $("#myModal").modal();
		$("#danger-alert").hide();
    });
});

function showModal(mID,membName){
	$("#actionModal").modal();
	$("#mID").val(mID);
	$("#userName").html(userName);
	viewUserProfile();
	$("#success-alert").hide();
	$("#danger-alert1").hide();
}

function deleteUser(mID,famName){
	
	var c =confirm("Are you sure want to delete "+famName+"?" )
	if(c){
		$.ajax({
		url:"deleteUser.php",
		type:"POST",
		data:{mID:mID},
		success:function(data){
							alert(data);

			if(data=="success"){
					getUserList('userList.php');
					$("#success-alert1").show();
					$("#danger-alert2").hide();
					$("#success-alert1").html("<strong>Congrat. </strong> Record Delete Successfully");
			}else{
					$("#success-alert1").hide();
					$("#danger-alert2").show();
					$("#danger-alert2").html("<strong>Delete Fail. </strong> This record maight reference another record");
			}
		}	
	});
	}else{
		
	}
}

function showEdit(){
		$.ajax({
		url:"editUser.php",
		type:"POST",
		data:{mID:$("#mID").val()},
		success:function(data){
			$("#activation1").html(data);
			$("#danger-alert1").hide();
			$("#success-alert").hide();
			$("#BtnSave").hide();
			$("#BtnEdit").show();
		}	
	});
}
/*
function updateFamily() {
	$(".InputBox").css('background-color','');
	$(".info").html('');
	if(!$("#newName").val()) {
		$("#newName-info").html("(*)");
		$("#newName").css('background-color','#FFFFDF');
		$("#newName-info").css('color','#F00');
	}else{
		$.ajax({
			url: "editFamilyHandler.php",
			type: "POST",
			data:  {familyName:$("#newName").val(),fID:$("#fID").val(),updateFamily:"updateFamily"},
			success: function(data){
				if(data=="success"){
					getFamilyList('familyList.php');
					$("#success-alert").show();
					$("#danger-alert1").hide();
					$("#success-alert").html("<strong>Congrat. </strong> Change Made Successfully");
				}else{
					$("#success-alert").hide();
					$("#danger-alert1").show();
					$("#danger-alert1").html(data);
				}
			}
		   });
	}
}*/

function loadActivationLogs(mID){
	$.ajax({
		url:"activationLogs.php",
		type:"POST",
		data:{mID:mID},
		success:function(data){
			$("#activation1").html(data);
			$("#BtnSave").hide();
			$("#BtnEdit").hide();
		}
	});
}

function getActivationList(){
	var mID=$("#mID").val();
	loadActivationLogs(mID);
	$("#success-alert").hide();
}

function activation(){

	$.ajax({
		url:"activation.php",
		type:"POST",
		data:{},
		success:function(data){
			$("#activation1").html(data);
			$("#danger-alert1").hide();
			$("#success-alert").hide();
			$("#BtnSave").show();
		}
	});
}

function saveActivation() {
	//alert($("#activMonth").val()+"-"+$("#activYear").val());
	var valid = validateActivation();
	if(valid) {
		$.ajax({
			url: "activationHandler.php",
			type: "POST",
			data:  {mID:$("#mID").val(),activation:$("#actStatus").val(),actYear:$("#activYear").val(),actMonth:$("#activMonth").val(),saveActivation:"activation"},
			success: function(data){
				//alert(data);
				if(data=="success"){
					getMemberList('familyList.php');
					$("#success-alert").show();
					$("#danger-alert1").hide();
					loadActivationLogs($("#mID").val());
				}else if(data=="invalid"){
					$("#danger-alert1").html("<strong>Error</strong> Invalid Activation");
					$("#danger-alert1").show();
					$("#success-alert").hide();
				}
				else{
					$("#danger-alert1").html("Error Occur!");
					$("#danger-alert1").show();
					$("#success-alert").hide();
				}
			}
		   });
		}
}

function validateActivation() {
	var valid = true;	
	$(".InputBox").css('background-color','');
	$(".info").html('');
	if(!$("#actStatus").val()) {
		$("#actStatus-info").html("(*)");
		$("#actStatus").css('background-color','#FFFFDF');
		$("#actStatus-info").css('color','#F00');
		valid = false;
	}
	if(!$("#activMonth").val()) {
		$("#activMonth-info").html("(*)");
		$("#activMonth").css('background-color','#FFFFDF');
		$("#activMonth-info").css('color','#F00');
		valid = false;
	}
	if(!$("#activYear").val()) {
		$("#activYear-info").html("(*)");
		$("#activYear").css('background-color','#FFFFDF');
		$("#activYear-info").css('color','#F00');
		valid = false;
	}
	return valid;
}

function getUserList(url) { 
	"use strict";

	$("#success-alert1").hide();
	$("#danger-alert2").hide();
	
	$.ajax({
		url: url,
		type: "POST",
		data:  {},
		success: function(data){

			$("#userList").show();
			$("#userLists").html(data);

				 $('#example').DataTable( {
				dom: 'lBfrtip',
				buttons: [
					{
						extend: 'colvis',
						postfixButtons: [ 'colvisRestore' ]
					}, 
					{
						extend: 'pdf',
						exportOptions: {
							columns: [':visible' ]
						}
					},
					{
						extend: 'print',
						exportOptions: {
							columns: [':visible' ]
						}
					},
					{
						extend: 'excel',
						exportOptions: {
							columns: [':visible' ]
						}
					}
				]
			} );

		}
	   });
}
	
function addNewUser() {
	var valid = validate();
	if(valid) {
	
		$.ajax({
			url: "addNewUserHandler.php",
			type: "POST",
			data:  {fname:$("#fname").val(),mname:$("#mname").val(),sname:$("#sname").val(),phone:$("#phone").val(),fID:$("#fID").val(),mID:$("#nmID").val(),activation:$("#activation").val(),utype:$("#utype").val(),saveMember:"saveUser"},
			success: function(data){
				if(data=="success"){
					$("#success-alert3").show();
					$("#danger-alert").hide();
					getUserList('userList.php');


				}else{
					$("#danger-alert").show();
					$("#success-alert3").hide();

				}
			}
		   });
		}
	}
function viewUserProfile() {
	
		$.ajax({
			url: "profile.php",
			type: "POST",
			data:  {mID:$("#mID").val(),profile:"profile"},
			success: function(data){
				$("#activation1").html(data);

				
			}
		   });
		
	}

function updateUser() {

	var valid = validate1();

	if(valid) {
							//alert(valid);

		$.ajax({
			url: "updateUserHandler.php",
			type: "POST",
			data:  {fname:$("#efname").val(),mname:$("#emname").val(),sname:$("#esname").val(),phone:$("#ephone").val(),mID:$("#emID").val(),activation:$("#eactivation").val(),actYear:$("#eactYear").val(),actMonth:$("#eactMonth").val(),utype:$("#eutype").val(),updateUser:"updateUser"},
			success: function(data){
				if(data=="success"){
					$("#success-alert4").show();
					//$("#danger-alert").hide();
					getUserList('userList.php');


				}else{
					//$("#danger-alert").show();
					$("#success-alert4").hide();

				}
			}
		   });
		}
	}
function validateUserName(){

	$.ajax({
			url: "validateUsername.php",
			type: "POST",
			data:  {mID:$("#nmID").val()},
			success: function(data){
				if(data=="Exist!"){
					$("#btnSave").attr("disabled",true);
					$("#nmID-info").css('color','#F00');
					$("#nmID-info").html("Exists");
				}else if($("#nmID").val()==""){
					$("#btnSave").attr("disabled",true);
					$("#nmID-info").html("");

				}else{
					$("#btnSave").attr("disabled",false);
					$("#nmID-info").css('color','#1E7B08');
					$("#nmID-info").html("Ok");

				}
			}
		   });
	
    
  }
function validateUserName1(){

	$.ajax({
			url: "validateUsername.php",
			type: "POST",
			data:  {mID:$("#emID").val()},
			success: function(data){
				if(data=="Exist!"){
					$("#BtnEdit").attr("disabled",true);
					$("#emID-info").css('color','#F00');
					$("#emID-info").html("Exists");
				}else if($("#emID").val()==""){
					$("#BtnEdit").attr("disabled",true);
					$("#emID-info").html("");

				}else{
					$("#BtnEdit").attr("disabled",false);
					$("#emID-info").css('color','#1E7B08');
					$("#emID-info").html("Ok");

				}
			}
		   });
	
    
  }
function validate() {
		var valid = true;	
		$(".InputBox").css('background-color','');
		$(".info").html('');
		if(!$("#fname").val() ) {
			$("#fname-info").html("(*)");
			$("#fname").css('background-color','#FFFFDF');
			$("#fname-info").css('color','#F00');
			valid = false;
			
		}
	if(!$("#nmID").val() ) {
			$("#nmID-info").html("(*)");
			$("#nmID").css('background-color','#FFFFDF');
			$("#nmID-info").css('color','#F00');
			valid = false;
			
		}
		if(!$("#mname").val()) {
			$("#mname-info").html("(*)");
			$("#mname").css('background-color','#FFFFDF');
			$("#mname-info").css('color','#F00');
			valid = false;
		}
			if(!$("#sname").val()) {
			$("#sname-info").html("(*)");
			$("#sname").css('background-color','#FFFFDF');
			$("#sname-info").css('color','#F00');
			valid = false;
		}
			if(!$("#phone").val()) {
			$("#phone-info").html("(*)");
			$("#phone").css('background-color','#FFFFDF');
			$("#phone-info").css('color','#F00');
			valid = false;
		}
		
		if(!$("#utype").val()) {
			$("#utype-info").html("(*)");
			$("#utype").css('background-color','#FFFFDF');
			$("#utype-info").css('color','#F00');
			valid = false;
		}
		
		if(!$("#activation").val()) {
			$("#activation-info").html("(*)");
			$("#activation").css('background-color','#FFFFDF');
			$("#activation-info").css('color','#F00');
			valid = false;
		}
			
		return valid;
	}
function validate1() {
		var valid = true;	
		$(".InputBox").css('background-color','');
		$(".info").html('');
		if(!$("#efname").val() ) {
			$("#efname-info").html("(*)");
			$("#efname").css('background-color','#FFFFDF');
			$("#efname-info").css('color','#F00');
			valid = false;

		}
	if(!$("#emID").val() ) {
			$("#emID-info").html("(*)");
			$("#emID").css('background-color','#FFFFDF');
			$("#emID-info").css('color','#F00');
			valid = false;
			
		}
		if(!$("#emname").val()) {
			$("#emname-info").html("(*)");
			$("#emname").css('background-color','#FFFFDF');
			$("#emname-info").css('color','#F00');
			valid = false;
		}
			if(!$("#esname").val()) {
			$("#esname-info").html("(*)");
			$("#esname").css('background-color','#FFFFDF');
			$("#esname-info").css('color','#F00');
			valid = false;
				
		}
			if(!$("#ephone").val()) {
			$("#ephone-info").html("(*)");
			$("#ephone").css('background-color','#FFFFDF');
			$("#ephone-info").css('color','#F00');
			valid = false;
				
		}
		
		if(!$("#eutype").val()) {
			$("#eutype-info").html("(*)");
			$("#eutype").css('background-color','#FFFFDF');
			$("#eutype-info").css('color','#F00');
			valid = false;
			
		}
		
		return valid;
	}

function closeModal(){
	$(".InputBox").css('background-color','');
	$(".info").html('');
	$("#actStatus").val("");
	$("#activYear").val("");
	$("#activMonth").val("");
	 $("#actionModal").modal('hide').animate;
}

$(document).ready(function(){
    $(".BtnClose").click(function(){
		$("#mID").val("");
		$("#fname").val("");
		$("#mname").val("");
		$("#sname").val("");
		$("#phone").val("");
		$("#utype").val("");
		$("#actMonth").val("");
		$(".InputBox").css('background-color','');
		$(".info").html('');
		$("#mID-info").css('color','#F00');
        $("#myModal").modal('hide').animate;
    });
});

window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
	$("#myModal").modal('hide').animate;
		$("#mID").val("");
		$("#fname").val("");
		$("#mname").val("");
		$("#sname").val("");
		$("#phone").val("");
		$("#utype").val("");
		$("#actMonth").val("");
		$(".InputBox").css('background-color','');
		$(".info").html('');
		$("#mID-info").css('color','#F00');
    }
}
	// JavaScript Document