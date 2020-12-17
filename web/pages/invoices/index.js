document.addEventListener("DOMContentLoaded", function(event) {
  var str = `
<div class="section">
	<div class="row">
		<div class="col s6 c-head-title">
			<div class="c-header">
				<div class="c-title">Invoices</div>
			</div>
		</div>
		<div class="col s6">
			<div class="c-header ">
				<a href="/invoices/create/" class="waves-effect waves-light btn right">Create</a>
			</div>
		</div>
	</div>
	<!--div class="card">
		<div class="card-content">
			<div class="row">
				<div class="col s6">
					<div class="row">
						<div class="col mb-2">Total of this Month</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="text-large text-black">
								<span>Rp </span><span>0.00</span></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col s6">
				</div>
			</div>
		</div>
	</div-->
	<div class="card">
		<div class="card-content">
			<div class="table_data row">
				<div class="col s12">
					<table id="table_id" class="display">
						<thead>
							<tr>
								<th class="text-bold text-black">Date</th>
								<th class="text-bold text-black">Number</th>
								<th class="text-bold text-black">Customer</th>
								<th class="text-bold text-black">Amount</th>
								<th class="text-bold text-black">Payment status</th>
							</tr>
						</thead>
						<tbody id="data-body">
						</tbody>
					</table>
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
		customer: 'PT. Torabika',
		amount : 2000000,
		paymentStatus : 'Paid'
	},
	{
		date: '2020-12-17',
		number: '2020120002',
		customer: 'PT. Mocacino',
		amount : 2000000,
		paymentStatus : 'Paid'
	},
	{
		date: '2020-12-18',
		number: '2020120003',
		customer: 'PT. Kretek',
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
				<p class="text-bold">${row.customer}</p>
				<p class="description">Customer</p>
			</div>
		</td>
		<td>
			<div class="text-black">${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(row.amount * 1)}</div>
		</td>
		<td>
			<div class="text-black"><span class="new badge" data-badge-caption="">${row.paymentStatus}</span></div>
		</td>
	</tr>`;
		return str;
	});
	$('#data-body').html(strTbody)
});