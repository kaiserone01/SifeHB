import React from "react";
import PropType from "prop-types";

export const UserActivitieInfo = ({ data }) => {
  console.log(data)

  return (

    // <div className="col-xl-3 col-md-4 col-lg-3 mt-3">
    // <div className="card h-100" style={{minWidth: "300px"}}>
    //   {/* <img src="https://picsum.photos/200" className="card-img-top" alt="..."/> */}
    //   <div className="card-body">
    //     <h5 className="card-title">Tipo Transacción {data.type_transaction == "Compra" ? <span className="badge rounded-pill bg-success">{data.type_transaction}</span> : <span className="badge rounded-pill bg-danger">{data.type_transaction}</span>}</h5>
    //     <h5 className="card-title">{`Desde : ${data.from_account}`}</h5>
    //     <h5 className="card-title">{`Hacia : ${data.to_account}`}</h5>
    //     <h5 className="card-title">{`Monto: ${data.amount}`}</h5>
    //     <h5 className="card-title">{`Promedio : ${data.unitPrice}`}</h5>
    //     <h5 className="card-title">{`Fecha : ${data.date.toLocaleString()}`}</h5>
    //     <h5 className="card-title">{`Acciones : ${data.share_of_stock}`}</h5>
    //     <h5 className="card-title">{`Referencia: ${data.refTransaction}`}</h5>
    //   </div>
    // </div>
    //         </div>
    <div class="col-12 col-md-6 col-lg-3 mb-4">
      <div className="card h-100">

        <div className="card-header px-4 pt-4">
          {/* <div className="card-actions float-right">
						<div className="dropdown show">
							<a href="#" data-toggle="dropdown" data-display="static">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal align-middle"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
							</a>

							<div className="dropdown-menu dropdown-menu-right">
								<a className="dropdown-item" href="#">Action</a>
								<a className="dropdown-item" href="#">Another action</a>
								<a className="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
					</div> */}
          <h5 className="card-title mb-0">Tipo Transacción {data.type_transaction === "Compra" ? <span className="badge bg-success">{data.type_transaction}</span> : <span className="badge bg-danger">{data.type_transaction}</span>}</h5>
          {/* <div className="badge bg-info text-dark">Finished</div> */}
        </div>
        <div className="card-body px-4 pt-2">
          <p className="card-title">{`Desde : ${data.from_account}`}</p>
          <p className="card-title">{`Hacia : ${data.to_account}`}</p>
          <p className="card-title">{`Monto: ${data.amount}`}</p>
          <p className="card-title">{`Promedio : ${data.unitPrice}`}</p>
          <p className="card-title">{`Fecha : ${data.date.toLocaleString()}`}</p>
          <p className="card-title">{`Acciones : ${data.share_of_stock}`}</p>
          <p className="card-title">{`Referencia: ${data.refTransaction}`}</p>
          <p className="card-title">{`IP: ${data.ip}`}</p>
          {/* <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle me-1" alt="Avatar" width="28" height="28" />
          <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle me-1" alt="Avatar" width="28" height="28" />
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle me-1" alt="Avatar" width="28" height="28" /> */}
        </div>
        {/* <ul className="list-group list-group-flush">
					<li className="list-group-item px-4 pb-4">
						<p className="mb-2 font-weight-bold">Progress <span className="float-right">100%</span></p>
						<div className="progress progress-sm">
							<div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
							</div>
						</div>
					</li>
				</ul> */}
      </div>
    </div>
  )
};

UserActivitieInfo.propTypes = {
  data: PropType.object
};