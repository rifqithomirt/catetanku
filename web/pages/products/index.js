document.addEventListener("DOMContentLoaded", function(event) {
    var str = `
  <div class="section">
      <div class="row">
          <div class="col s6 c-head-title">
              <div class="c-header">
                  <div class="c-title">Products & Services</div>
              </div>
          </div>
          <div class="col s6">
              <div class="c-header ">
                  <a href="/products/create/" class="waves-effect waves-light btn right">Add Products & Services</a>
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
                                  <th class="text-bold text-black">Name</th>
                                  <th class="text-bold text-black">Description</th>
                                  <th class="text-bold text-black">Price</th>
                                  <th class="text-bold text-black">Action</th>
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
          name: 'CCtv',
          description: '2020120001',
          price : 2000000
      },
      {
        name: 'Cofee',
        description: '2020120001',
        price : 2000000
      },
      {
        name: 'ice',
        description: '2020120001',
        price : 2000000
      }
  ];
      var strTbody = arrData.map( function( row ) {
          var str = `<tr>
          <td>${row.name}</td>
          <td>${row.description}</td>
          <td>
              <div class="text-black">${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(row.price * 1)}</div>
          </td>
          <td>
            <a href="#edit"data-target="modal1" class="btn-floating waves-effect waves-light btn modal-trigger hoverable"><i class="material-icons">edit</i></a>
            <a href="#delete" class="btn-floating waves-effect waves-light hoverable"><i class="material-icons">delete</i></a>
          </td>
      </tr>`;
          return str;
      });
      $('#data-body').html(strTbody)
  });