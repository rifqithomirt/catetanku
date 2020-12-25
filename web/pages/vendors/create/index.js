document.addEventListener("DOMContentLoaded", async function (event) {
    var objCreateForm = {
        title: 'Create a Vendor',
        titleID: 'invoicesHeader',
        formID: 'create_vendor',
        arrayForm: [
            `<div class="row">
            <div class="col s12">
                <label for="vendorName" class="form">Vendor Name <span class="red-text">*</span> </label>
                <input id="vendorName" placeholder="PT. XYZ" minlength="3" class="validate browser-default" type="text" required>
            </div>
        </div>`,
            `<div class="row">
            <div class="col s12">
                <label for="address" class="form">Address</label>
                <textarea id="address" placeholder="Jl. Malang Surabaya" class="validate browser-default input-large"></textarea>
            </div>
        </div>`,
            `<div class="row">
            <div class="col s12">
                <label for="email" class="form">Email</label>
                <input id="email" placeholder="admin@xyz.com" class="validate browser-default" type="text">
            </div>
        </div>`,
            `<div class="row">
            <div class="col s12">
                <label for="phone" class="form">Phone</label>
                <input id="phone" placeholder="08123456789" class="validate browser-default input-large" type="text">
            </div>
        </div>`,
            `<div class="row">
            <div class="col s12">
                <label for="notes" class="form">Notes</label>
                <textarea id="notes" class="validate browser-default input-large"></textarea>
            </div>
        </div>`,
            `<div class="row">
            <div class="col s12">
                <label class="form"></label>
                <a id="save" class="waves-effect waves-light btn">Save</a>
            </div>
        </div>`
        ]
    };
    var str = createForm(objCreateForm);
    $('#main-container').html(str);
    $("#create_vendor").validate();

    $('#save').on('click', async function () {
        var check = $("#create_vendor").valid();
        if (check) {
            var id = uuidv4();
            $(this).attr('disabled', 'disabled')
            var obj = {
                name: $('#vendorName').val(),
                address: $('#address').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                notes: $('#notes').val()
            };
            var res = await R.apost('http://' + R.host + ':' + R.port + '/webapi/vendors/' + id, {}, obj);
            console.log(res)
        }
    })
});