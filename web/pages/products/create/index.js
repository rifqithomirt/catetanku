document.addEventListener("DOMContentLoaded", function (event) {
    var objCreateForm = {
        title: 'Create a Product or Service',
        titleID: 'invoicesHeader',
        arrayForm: [
            `<div class="row">
            <div class="col s12">
                <label for="name">Name</label>
                <input id="name" class="validate browser-default" type="text">
            </div>
        </div>`,
            `<div class="row">
            <div class="col s12">
                <label for="description">Description</label>
                <textarea id="description" class="validate browser-default input-xlarge" type="text"></textarea>
            </div>
        </div>`,
            `<div class="row">
            <div class="col s12">
                <label for="price">Price</label>
                <input id="price" placeholder="0.00" class="validate browser-default input-large" type="text">
            </div>
        </div>`,
            `<div class="row">
            <div class="col s12">
                <label for="price">Income Account</label>
                <select id="select_account" class="browser-default validate input-large">
                </select>
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