document.addEventListener("DOMContentLoaded", function(event) {
  var objCreateForm = {
    title: 'Create Invoice',
    titleID: 'invoicesHeader',
    arrayForm: [
      `<div class="row">
                <div class="col s6">
                    <label for="vendor">Customer</label>
                    <select class="js-example-basic-single browser-default validate input-large" name="state">
                      <option value="AL">Alabama</option>
                      <option value="WY">Wyoming</option>
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
  var str = `</div>
            <div class="card">
              <div class="card-content">
                <div class="table_data row">
                  <div class="col s12">
                    <table id="table_id" class="display">
                      <thead>
                        <tr>
                          <th class="text-bold text-black">Item</th>
                          <th class="text-bold text-black">Description</th>
                          <th class="text-bold text-black">Quantity</th>
                          <th class="text-bold text-black">Price</th>
                          <th class="text-bold text-black">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="text" class="browser-default input-small">
                          </td>
                          <td>
                            <textarea type="text" class="input-small"></textarea>
                          </td>
                          <td>
                            <input type="text" class="browser-default input-mini">
                          </td>
                          <td>
                            <input type="text" class="browser-default input-medium">
                          </td>
                          <td>
                            <div class="text-black">Rp <span>0.00</span></div>
                          </td>
                        </tr>
                       </tbody>
                       <tfoot>
                       		<tr>
                          <td>
                            <a>
                            	<i class="material-icons">control_point</i>
                            	<span>Add</span>
                            </a>
                          </td>
                          <td></td>
                          <td></td>
                          <td class="text-bold text-black">Total (IDR):	</td>
                          <td>
                            <div class="text-bold text-black">Rp <span>0.00</span></div>
                          </td>
                        </tr>
                       </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>`;
  $('#main-container').append(str);
      $('.js-example-basic-single').select2();

});