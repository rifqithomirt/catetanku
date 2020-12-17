document.addEventListener("DOMContentLoaded", function(event) {
	var objCreateForm = {
    title: 'Journals',
    titleID: 'billsHeader',
    arrayForm: [
      `<div class="row">
                <div class="col s4">
                    <label for="date" class="input-small">Date Start</label>
                    <input id="date" type="date" class="input-medium validate browser-default">
                </div>
                <div class="col s4">
                    <label for="date" class="input-small">Date Stop</label>
                    <input id="date" type="date" class="input-medium validate browser-default">
                </div>
                <div class="col s4 ">
                    <a class="right waves-effect waves-light btn">Update Report</a>
                </div>
            </div>`
    ]
  };
  var str = createForm(objCreateForm);
  $('#main-container').html(str);
  var str = `
<div class="section">
	<div class="card">
		<div class="card-content">
			<div class="table_data row">
				<div class="col s12">
					<table id="table_id" class="display">
						<thead>
							<tr>
								<th class="text-bold text-black2">DATE</th>
								<th class="text-bold text-black2">TRANSACTION</th>
								<th colspan=2 class="text-bold text-black2">ACCOUNTS</th>
								<th class="text-bold text-black2">DEBIT</th>
								<th class="text-bold text-black2">CREDIT</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td rowspan=2 ><a>2020-12-15</a></td>
								<td rowspan=2 >Pembelian Gula</td>
								<td class="grey lighten-4">KAS</td>
								<td class="grey lighten-4"></td>
								<td class="grey lighten-4"><div class="text-black text-bold">Rp <span>0.00</span></div></td>
								<td class="grey lighten-4"></td>
							</tr>
							<tr>
								<td></td>
								<td>KAS</td>
								<td></td>
								<td><div class="text-black text-bold">Rp <span>0.00</span></div></td>
							</tr>
							<tr>
								<td rowspan=2 ><a>2020-12-15</a></td>
								<td rowspan=2 >Pembelian Air Tebu</td>
								<td class="grey lighten-4">KAS</td>
								<td class="grey lighten-4"></td>
								<td class="grey lighten-4"><div class="text-black text-bold">Rp <span>0.00</span></div></td>
								<td class="grey lighten-4"></td>
							</tr>
							<tr>
								<td></td>
								<td>KAS</td>
								<td></td>
								<td><div class="text-black text-bold">Rp <span>0.00</span></div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>`;
  $('#main-container').append(str);
});