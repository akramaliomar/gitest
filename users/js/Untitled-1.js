// JavaScript Document
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

function showModal(fID,famName){
	 $("#actionModal").modal();
	 $("#fID").val(fID);
	 $("#famName").html(famName);
	loadActivationLogs(fID);
	$("#success-alert").hide();
	$("#danger-alert1").hide();
}
function deleteFamily(fID,famName){
	
	var c =confirm("Are you sure want to delete "+famName+"?" )
	if(c){
		$.ajax({
		url:"deleteFamily.php",
		type:"POST",
		data:{fID:fID},
		success:function(data){
			if(data=="success"){
					getFamilyList('familyList.php');
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
		url:"editFamily.php",
		type:"POST",
		data:{fID:$("#fID").val()},
		success:function(data){
			$("#activation1").html(data);
			$("#danger-alert1").hide();
			$("#success-alert").hide();
			$("#BtnSave").hide();
			$("#BtnEdit").show();
		}	
	});
}

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
}

function loadActivationLogs(fID){
	$.ajax({
		url:"activationLogs.php",
		type:"POST",
		data:{fID:fID},
		success:function(data){
			$("#activation1").html(data);
			$("#BtnSave").hide();
			$("#BtnEdit").hide();
		}
	});
}

function getActivationList(){
	var fID=$("#fID").val();
	loadActivationLogs(fID);
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
			data:  {fID:$("#fID").val(),activation:$("#actStatus").val(),actYear:$("#activYear").val(),actMonth:$("#activMonth").val(),saveActivation:"activation"},
			success: function(data){
				//alert(data);
				if(data=="success"){
					getFamilyList('familyList.php');
					$("#success-alert").show();
					$("#danger-alert1").hide();
					loadActivationLogs($("#fID").val());
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

function getMemberList(url) { 
	"use strict";

	$("#success-alert1").hide();
	$("#danger-alert2").hide();
	$.ajax({
		url: url,
		type: "POST",
		data:  {},
		success: function(data){
				$("#memberList").show();$("#memberList").html(data);
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
	
function showAddNewFamily() {
	$.ajax({
		url: "addNewFamily.php",
		type: "POST",
		success: function(data){ $("#addNewFamily").show();$("#addNewFamily").html(data);$('addNewFamily').show(); }
	});
}
	
function addNewFamily() {
	//alert("xxxx");
	var valid = validate();

	if(valid) {
		$.ajax({
			url: "addNewFamilyHandler.php",
			type: "POST",
			data:  {familyName:$("#familyName").val(),activation:$("#activation").val(),actYear:$("#actYear").val(),actMonth:$("#actMonth").val(),saveFamily:"saveFamily"},
			success: function(data){

				if(data=="success"){
					$("#success-alert3").show();
					$("#danger-alert").hide();
					

					getFamilyList('familyList.php');


				}else{
					$("#danger-alert").show();
					$("#success-alert3").hide();

				}
			}
		   });
		}
	}
function validateUserName(){

	$.ajax({
			url: "validateUsername.php",
			type: "POST",
			data:  {mID:$("#mID").val()},
			success: function(data){
				if(data=="Exist!"){
					$("#btnSave").attr("disabled",true);
					$("#mID-info").css('color','#F00');
					$("#mID-info").html("Exists");
				}else if($("#mID").val()==""){
					$("#btnSave").attr("disabled",true);
					$("#mID-info").html("");

				}else{
					$("#btnSave").attr("disabled",false);
					$("#mID-info").css('color','#1E7B08');
					$("#mID-info").html("Ok");

				}
			}
		   });
	
    
  }
function validate() {
		var valid = true;	
		$(".InputBox").css('background-color','');
		$(".info").html('');
		if(!$("#familyName").val() ) {
			$("#familyName-info").html("(*)");
			$("#familyName").css('background-color','#FFFFDF');
			$("#familyName-info").css('color','#F00');
			valid = false;
		}
		if(!$("#activation").val()) {
			$("#activation-info").html("(*)");
			$("#activation").css('background-color','#FFFFDF');
			$("#activation-info").css('color','#F00');
			valid = false;
		}
			if(!$("#actMonth").val()) {
			$("#actMonth-info").html("(*)");
			$("#actMonth").css('background-color','#FFFFDF');
			$("#actMonth-info").css('color','#F00');
			valid = false;
		}
		if(!$("#actYear").val()) {
			$("#actYear-info").html("(*)");
			$("#actYear").css('background-color','#FFFFDF');
			$("#actYear-info").css('color','#F00');
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
		$("#familyName").val("");
		$("#activation").val("");
		$("#actYear").val("");
		$("#actMonth").val("");
		$(".InputBox").css('background-color','');
		$(".info").html('');
        $("#myModal").modal('hide').animate;
    });
});

window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
	$("#myModal").modal('hide').animate;
	$(".InputBox").css('background-color','');
	$(".info").html('');
	$("#familyName").val("");
	$("#activation").val("");
	$("#actYear").val("");
	$("#actMonth").val("");
    }
}
	// JavaScript Document