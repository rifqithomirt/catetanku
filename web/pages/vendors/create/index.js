document.addEventListener("DOMContentLoaded", function (event) {
    var objCreateForm = {
      title: 'Create a Product or Service',
      titleID: 'invoicesHeader',
      arrayForm: [
        `<div class="row">
            <div class="col s12">
                <label for="vendorName">Vendor Name</label>
                <input id="vendorName" class="validate browser-default" type="text">
            </div>
        </div>`,
        `<div class="row">
            <div class="col s12">
                <label for="address">Address</label>
                <input id="address" class="validate browser-default" type="text">
            </div>
        </div>`,
        `<div class="row">
            <div class="col s12">
                <label for="email">Email</label>
                <input id="email" class="validate browser-default" type="text">
            </div>
        </div>`,
        `<div class="row">
            <div class="col s12">
                <label for="phone">Phone</label>
                <input id="phone" class="validate browser-default input-large" type="text">
            </div>
        </div>`,
        `<div class="row">
            <div class="col s12">
                <label for="notes">Notes</label>
                <textarea id="notes" class="validate browser-default input-xlarge"></textarea>
            </div>
        </div>`,
        `<div class="row">
            <div class="col s12">
                <label for=""></label>
                <a class="waves-effect waves-light btn">Save</a>
            </div>
        </div>`,
      ]
    };
    var str = createForm(objCreateForm);
    $('#main-container').html(str);
  
  });