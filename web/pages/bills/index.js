document.addEventListener("DOMContentLoaded", function(event) {
  var strHtml = `
<div class="section">
	<div class="row">
		<div class="col s6 c-head-title">
			<div class="c-header">
				<div class="c-title">Bills</div>
			</div>
		</div>
		<div class="col s6">
			<div class="c-header ">
				<a href="/bills/create/" class="waves-effect waves-light btn right">Create</a>
			</div>
		</div>
	</div>
	<div class="vx-card">
        <div class="vx-card__collapsible-content">
        <div class="vx-card__body">
			<div class="table_data row">
				<div class="col s12">
					<table id="table_id" class="display">
						<thead>
							<tr>
								<th class="text-bold text-black">Date</th>
								<th class="text-bold text-black">Number</th>
								<th class="text-bold text-black">Vendor</th>
								<th class="text-bold text-black">Amount</th>
								<th class="text-bold text-black">Payment status</th>
							</tr>
						</thead>
						<tbody id="data_bills">
							
						</tbody>
					</table>
				</div>
			</div>
		</div>
		</div>
	</div>
</div>`;
$('#main-container').html(strHtml);
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
	var strTbody = arrData.map( function( row ) {
		var str = `<tr>
		<td>${row.date}</td>
		<td>${row.number}</td>
		<td>
			<div>
				<p class="text-bold">${row.vendor}</p>
				<p>Vendor</p>
			</div>
		</td>
		<td>
			<div class="text-black">Rp <span>${row.amount}</span></div>
		</td>
		<td>
			<div class="text-black"><span class="new badge" data-badge-caption="">${row.paymentStatus}</span></div>
		</td>
	</tr>`;
		return str;
	});
	$('#data_bills').html(strTbody)
});

