document.addEventListener("DOMContentLoaded", function(event) {
  var objCreateForm = {
    title: 'Add bill',
    titleID: 'billsHeader',
    arrayForm: [
      `<div class="row">
                <div class="col s6">
                    <label for="vendor">Vendor</label>
                    <select id="select_vendor" class="browser-default validate input-large"></select>
                </div>
                <div class="col s6">
                    <label for="date">Date</label>
                    <input id="date" type="date" class="validate browser-default">
                </div>
            </div>`,
      `<div class="row">
                <div class="col s6">
                    <label for="bill_number">Bill Number #</label>
                    <input id="bill_number" type="text" class="validate browser-default">
                </div>
                <div class="col s6">
                    <label for="notes">Notes</label>
                    <textarea id="notes" class="input-large" type="text" tabindex="12"></textarea>
                </div>
            </div>`
    ]
  };
  var str = createForm(objCreateForm);
  $('#main-container').html(str);
  var str = `</div>
            <div class="card">
              <div class="card-content">
                <div class="table_data row">
                  <div class="col s12">
                    <table id="table_id" class="display">
                      <thead>
                        <tr>
                          <th class="text-bold text-black">Item</th>
                          <th class="text-bold text-black">Expense Category</th>
                          <th class="text-bold text-black">Description</th>
                          <th class="text-bold text-black">Qty</th>
                          <th class="text-bold text-black">Price</th>
                          <th class="text-bold text-black">Amount</th>
                        </tr>
                      </thead>
                      <tbody id="body_data">
                        
                       </tbody>
                       <tfoot>
                       		<tr>
                          <td>
                            <a id="add_data" class="add-row"><i class="material-icons md-18">control_point</i>Add</a>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td class="text-bold text-black">Total (IDR):	</td>
                          <td>
                            <div class="text-bold text-black" id="sum">0.00</div>
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
            </div>`;
  $('#main-container').append(str);
  var arrData = [
    {
      date: '2020-12-17',
      number: '2020120001',
      vendor: 'PT. Torabika',
      amount : 2000000,
      paymentStatus : 'Paid'
    },
    {
      date: '2020-12-17',
      number: '2020120002',
      vendor: 'PT. Mocacino',
      amount : 2000000,
      paymentStatus : 'Paid'
    },
    {
      date: '2020-12-18',
      number: '2020120003',
      vendor: 'PT. Kretek',
      amount : 2000000,
      paymentStatus : 'Paid'
    }
  ];
  var strOption = '<option></option>' + arrData.map( function( row ) {
    return `<option value="${row.vendor}">${row.vendor}</option>`;
  });
  $('#select_vendor').html(strOption).select2({
    placeholder: "Select a vendor",
    allowClear: true
  });
  var strEmptyTable = `<tr>
                          <td>
                            <input type="text" class="browser-default input-small">
                          </td>
                          <td>
                            <input type="text" class="browser-default input-medium">
                          </td>
                          <td>
                            <textarea type="text" class="input-small"></textarea>
                          </td>
                          <td>
                            <input type="number" class="browser-default input-mini qty" value=0>
                          </td>
                          <td>
                            <input type="number" class="browser-default input-medium price" value=0>
                          </td>
                          <td>
                            <div class="text-black"><span class="calculatedAmount">0.00</span></div>
                          </td>
                        </tr>`;
  $('#body_data').append(strEmptyTable);
  $('#add_data').on('click', function () {
    $('#body_data').append(strEmptyTable);
  })
  $('table').delegate('td input.qty', 'change', function(e){
    console.log(this.parentNode.parentNode)
    var thisval = $(this).val();
    thisval = _.isNumber(thisval) ? thisval : 0;
    var tdPrice = $(this.parentNode.parentNode).find( 'input.qty' );
    var price = $( tdPrice ).val();
    price = _.isNumber(price) ? price : 0;
    var tdCalcAmount = $(this.parentNode.parentNode).find( 'span.calculatedAmount' );
    $(tdCalcAmount).text(new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(thisval * price))
    setSum();
  });
  $('table').delegate('td input.price', 'change', function(e){
    console.log(this.parentNode.parentNode)
    
    var thisval = $(this).val();
    thisval = _.isNumber(thisval) ? thisval : 0;
    var tdQty = $(this.parentNode.parentNode).find( 'input.qty' );
    var qty = $( tdQty ).val();
    qty = _.isNumber(qty) ? qty : 0;
    var tdCalcAmount = $(this.parentNode.parentNode).find( 'span.calculatedAmount' );
    $(tdCalcAmount).text(new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(thisval * qty))
    setSum();
  });
  var setSum = function() {
    var total = Array.from($('.calculatedAmount')).reduce(function(old, now){
      old += ($(now).text().replace('Rp', '') * 1)
      return old;
    }, 0)
    $('#sum').text( new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total * 1) )
  }
});