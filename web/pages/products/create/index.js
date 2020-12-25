document.addEventListener("DOMContentLoaded", function (event) {
    var objCreateForm = {
        title: 'Create a Product or Service',
        titleID: 'productHeader',
        formID: 'productForm',
        arrayForm: [
            `<div class="row">
            <div class="col s12">
                <label for="name" class="form" >Name <span class="red-text">*</span></label>
                <input id="name" minlength="3" class="validate browser-default" type="text" required>
            </div>
        </div>`,
            `<div class="row">
            <div class="col s12">
                <label for="description" class="form">Description</label>
                <textarea id="description" class="validate browser-default input-large" type="text"></textarea>
            </div>
        </div>`,
            `<div class="row">
            <div class="col s12">
                <label for="price" class="form">Price <span class="red-text">*</span></label>
                <input id="price" name="price" placeholder="0.00" class="validate browser-default input-large" type="number" required>
            </div>
        </div>`,
            `<div class="row">
            <div class="col s12">
                <label for="price" class="form">Income Account</label>
                <select id="select_account" class="browser-default validate input-large">
                </select>
            </div>
        </div>`,
            `<div class="row">
        <div class="col s12">
            <label for="price" class="form">Purchase Account</label>
            <select id="select_account_purchase" class="browser-default validate input-large">
            </select>
        </div>
    </div>`,
            `<div class="row">
            <div class="col s12">
                <label class="form"></label>
                <a id="save" class="waves-effect waves-light btn">Save</a>
            </div>
        </div>`,
        ]
    };
    var str = createForm(objCreateForm);
    $('#main-container').html(str);
    var arrayAccounts = [{
        'KAS': [{
                code: '10001',
                name: 'KAS'
            },
            {
                code: '10002',
                name: 'Peralatan - Mesin Kopi'
            },
            {
                code: '10003',
                name: 'Peralatan - Cutlery'
            },
            {
                code: '10004',
                name: 'Inventory - Bahan Makanan'
            },
            {
                code: '10005',
                name: 'Inventory - Bahan Minuman'
            }
        ]
    }];
    var strSelectAccount = '<option></option>' + arrayAccounts.map(function (row) {
        return `<optgroup class="text-bold" label="${Object.keys(row)[0]}">
            ${ row[ Object.keys(row)[0] ].map(function( doc ){
                return '<option>'+ doc.name +'</option>' 
            }).join('') }
        </optgroup>`
    }).join('');
    $('#select_account').html(strSelectAccount).select2({
        placeholder: "Select an account",
        allowClear: true
    });
    $('#select_account_purchase').html(strSelectAccount).select2({
        placeholder: "Select an account",
        allowClear: true
    });

    $("#productForm").validate({
        rules: {
            price: {
            required: true,
            number: true
          }
        }
      });
      
    $('#save').on('click', async function () {
        var check = $("#productForm").valid();
        if (check) {
            var id = uuidv4();
            $(this).attr('disabled', 'disabled')
            var obj = {
                name: $('#name').val(),
                description: $('#description').val(),
                price: $('#price').val() * 1,
                incomeAccount: $('#select_account').val(),
                purchaseAccount: $('#select_account_purchase').val()
            };
            var res = await R.apost('http://' + R.host + ':' + R.port + '/webapi/products/' + id, {}, obj);
            console.log(res)
        }
    })


});