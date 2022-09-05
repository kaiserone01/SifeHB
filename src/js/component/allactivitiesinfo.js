import React from "react";
import PropType from "prop-types";

export const AllActivitiesInfo = ({ data }) => {

  let borderColor = data.type_transaction === "Compra" ? "border-success" : "border-danger";

  return (
    <div className="col-xl-3 col-md-4 col-lg-3">
      <div className={`investments-card radius-10 border-start border-0 border-3 ${borderColor}`}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <p className="mb-0 font-13">{`Nombre y Apellido : ${data.userInfo.firstname} ${data.userInfo.lastname}`}</p>
              <p className="mb-0 font-13">{`C.I : ${data.userInfo.identitydocument}`}</p>
              <p className="mb-0 font-13">{`Ticker : ${data.refTransact.symbol}`}</p>
              <p className="mb-0 font-13">{`Nombre : ${data.refTransact.name}`}</p>
              <p className="mb-0 font-13">{`Acciones : ${data.share_of_stock}`}</p>
            </div>
            <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
              <img
                src={data.refTransact.img}
                alt=""
                style={{ width: "56px", height: "56px" }}
                className="rounded-circle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

AllActivitiesInfo.propTypes = {
  data: PropType.object
};