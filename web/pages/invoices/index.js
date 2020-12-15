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
	<div class="card">
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
	</div>
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
						<tbody>
							<tr>
								<td>
									<div>
										<p>2020-12-15</p>
									</div>
								</td>
								<td>
									<div>
										<p>X001</p>
									</div>
								</td>
								<td>
									<div>
										<p class="text-bold">Tes</p>
										<p>Vendor</p>
									</div>
								</td>
								<td>
									<div class="text-black">Rp <span>0.00</span></div>
								</td>
								<td>
									<div class="text-black"><span class="new badge" data-badge-caption="">Paid</span></div>
								</td>
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