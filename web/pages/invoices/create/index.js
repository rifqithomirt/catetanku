document.addEventListener("DOMContentLoaded", function (event) {
  var objCreateForm = {
    title: 'Create Invoice',
    titleID: 'invoicesHeader',
    arrayForm: [
      `<div class="row">
                <div class="col s6">
                    <label for="customer">Customer</label>
                    <select id="select_customer" class="browser-default validate input-large">
                    </select>
                </div>
                <div class="col s6">
                    <label for="invoiceNumber">Invoice Number</label>
                    <input id="invoiceNumber" type="text" class="validate browser-default">
                </div>
            </div>`,
      `<div class="row">
                <div class="col s6"></div>
                <div class="col s6">
                    <label for="notes">P.O. Number</label>
                    <input id="notes" class="validate browser-default" type="text">
                </div>
            </div>`,
      `<div class="row">
                <div class="col s6"></div>
                <div class="col s6">
                    <label for="notes">Invoice Date</label>
                    <input id="notes" class="validate browser-default" type="date">
                </div>
            </div>`
    ]
  };
  var str = createForm(objCreateForm);
  $('#main-container').html(str);
  var str = `    
<div class="card">
<div class="card-content">
  <div class="table_data row">
    <div class="col s12">
      <table id="table_id" class="display">
        <thead>
          <tr>
            <th class="text-bold text-black t-center">Item</th>
            <th class="text-bold text-black t-center">Description</th>
            <th class="text-bold text-black t-center">Quantity</th>
            <th class="text-bold text-black t-center">Price</th>
            <th class="text-bold text-black t-center">Amount</th>
          </tr>
        </thead>
        <tbody id="body_data"></tbody>
        <tfoot>
          <tr>
            <td>
              <a class="add-row" id="add_data">
                <i class="material-icons md-18">control_point</i>Add
              </a>
            </td>
            <td></td>
            <td></td>
            <td class="text-bold text-black t-right">Total (IDR):	</td>
            <td>
              <div class="text-bold text-black right"> 
                <span id="sum">0.00</span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <div class="row">
    <div class="col s12 right">
      <div class="button_save">
        <a class="waves-effect waves-light btn right">Save</a>
      </div>
    </div>
  </div>
</div>
</div>

`;
  $('#main-container').append(str);
  $('#select_customer').select2({
      placeholder: "Select a vendor",
      allowClear: true
    })
    .on('select2:open', () => {
      $(".select2-results:not(:has(a))").append('<a href="/vendors/create/" style="padding: 6px;height: 20px;display: inline-table;">Create new item</a>');
    });

  var strEmptyTable = `
<tr>
	<td class="t-center">
    <select class="select_item browser-default validate input-medium">
    </select>
	</td>
	<td class="t-center">
		<textarea type="text" class="input-small"></textarea>
	</td>
	<td class="t-center">
		<input type="number" value=1 class="t-right browser-default input-tiny qty">
	</td>
	<td class="t-center">
		<input type="number" value="0" class="t-right browser-default input-medium price">
	</td>
	<td>
		<div class="text-black right"><span class="calculatedAmount">0.00</span>
		</div>
	</td>
</tr>`;
  //$('#body_data').append(strEmptyTable);
  $('#add_data').on('click', function () {
    $('#body_data').append(strEmptyTable);
    $('.select_item').select2({
      placeholder: "Select an item",
      allowClear: true
    }).on('select2:open', () => {
      $(".select2-results:not(:has(a))").html('<a href="/products/create/">Create a new item</a>');
    });
  });

  $('table').delegate('td input.qty', 'change', function(e){
    var thisval = $(this).val();
    thisval = _.isNumber(thisval * 1 ) ? thisval : 0;
    var tdPrice = $(this.parentNode.parentNode).find( 'input.price' );
    var price = $( tdPrice ).val();
    price = _.isNumber(price * 1 ) ? price : 0;
    console.log(thisval, price)
    var tdCalcAmount = $(this.parentNode.parentNode).find( 'span.calculatedAmount' );
    $(tdCalcAmount).text(new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(thisval * price))
    $(tdCalcAmount).data('ori',thisval * price)
    setSum();
  });
  $('table').delegate('td input.price', 'change', function(e){
    var thisval = $(this).val();
    thisval = _.isNumber(thisval * 1) ? thisval : 0;
    var tdQty = $(this.parentNode.parentNode).find( 'input.qty' );
    var qty = $( tdQty ).val();
    qty = _.isNumber(qty * 1) ? qty : 0;
    var tdCalcAmount = $(this.parentNode.parentNode).find( 'span.calculatedAmount' );
    $(tdCalcAmount).text(new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(thisval * qty))
    $(tdCalcAmount).data('ori',thisval * qty)
    setSum();
  });
  var setSum = function() {
    var total = Array.from($('.calculatedAmount')).reduce(function(old, now){
      old += ($(now).data('ori') * 1)
      return old;
    }, 0)
    $('#sum').text( new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total * 1) )
  }

  $('#add_data').trigger('click')
  
  $('.modal').modal();


});