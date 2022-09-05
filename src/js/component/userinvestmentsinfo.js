import React from "react";
import PropType from "prop-types";
import '../../styles/investments.css'
export const UserInvestmentsInfo = ({ data }) => {
  console.log(data)
  return (
    <div className="col-xl-3 col-md-4 col-lg-3">
      <div className="investments-card radius-10 border-start border-0 border-3 border-warning">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <p className="mb-0 font-13">{` Balance Total : ${parseFloat(data.total_balance).toFixed(2)}`}</p>
              <p className="mb-0 font-13">{`Acciones : ${data.qty_share_of_stock}`}</p>
              <p className="mb-0 font-13">{`Nombre : ${data.name}`}</p>
              <p className="mb-0 font-13">{`Simbolo: ${data.userMarket.symbol}`}</p>
              <p className="mb-0 font-13">{`Isin : ${data.userMarket.isin}`}</p>
            </div>
            <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
              <img
              src={data.userMarket.img}
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

UserInvestmentsInfo.propTypes = {
  data: PropType.object
};