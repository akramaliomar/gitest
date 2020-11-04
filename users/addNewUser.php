<form role="form">
              <div class="row">
              <div class="alert alert-danger col-sm-8 col-sm-offset-2" style="display: none; padding: 5px"   id="danger-alert">
    <strong>Error! </strong>
    Operation Fail.
</div>
              
                    <div class="alert alert-success col-sm-8 col-sm-offset-2" style="display: none; padding: 5px"   id="success-alert3">
    <strong>Congrat. </strong>
    User saved Successfully
</div>
               
                <div class="form-group col-sm-4">
                  <label for="nmID">Username <span id="nmID-info" class="info"></span></label>
                  <input type="text" class="form-control InputBox" id="nmID" onKeyUp="validateUserName()" placeholder="Enter Username">
                </div>
                 <div class="form-group col-sm-4">
                  <label for="fname">First Name <span id="fname-info" class="info"></span></label>
                  <input type="text" class="form-control InputBox" id="fname" placeholder="Enter First Name">
                </div>
                 
                 <div class="form-group col-sm-4">
                  <label for="mname">Middle Name <span id="mname-info" class="info"></span></label>
                  <input type="text" class="form-control InputBox" id="mname" placeholder="Enter Middle Name">
                </div>
                 
                 <div class="form-group col-sm-4">
                  <label for="sname">Surname <span id="sname-info" class="info"></span></label>
                  <input type="text" class="form-control InputBox" id="sname" placeholder="Enter Surname">
                </div>
                 
                 <div class="form-group col-sm-4">
                  <label for="phone">Phone <span id="phone-info" class="info"></span></label>
                  <input type="text" class="form-control InputBox" id="phone" placeholder="Enter Phone Number">
                </div>
                
                
                 
                
                <div class="form-group col-sm-4">
                  <label for="utype">Role <span id="utype-info" class="info"></span></label>
                  <select id="utype" class="form-control InputBox">
                   	<option value="">Choose..</option>
                  	<option value="Administrator">Administrator</option>
					<option value="Manager">Manager</option>
					<option value="Seller">Seller</option>
					<option value="Customer">Customer</option>
                  </select>
                </div> 
                 
                  
                    <div class="form-group col-sm-4">
                  <label for="activation">Activation <span id="activation-info" class="info"></span></label>
                  <select id="activation" class="form-control InputBox">
                   <option value="">Choose..</option>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div> 
               
              </div>
              <!-- /.box-body -->

            </form>
            
 