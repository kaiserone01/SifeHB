import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { Modal } from "./modal";


export const Users = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [actionType, setActionType] = useState("");

  let firstname = data.firstname.replace(/ /g, '');
  let lastname = data.lastname.replace(/ /g, '');


  useEffect(() => {

  }, [])
  return (

    <>

      <tr>
        <td>
          <div className="ms-3">
            <p className="fw-bold mb-1">{`${firstname} ${lastname}`}</p>
            <p className="text-muted mb-0">{data.email}</p>
          </div>

        </td>
        <td>
          {/* <p className="fw-normal mb-1">Usuario verificado</p> */}
          <p className="text-muted mb-0">{data.verified.toString() === "true" ? <span className="badge bg-success">Verificado en app</span> : <span className="badge bg-warning">No verificado</span>}</p>
        </td>
        <td>
          {data.status === "processing" ? <span className="badge bg-warning">En proceso</span> : <span className="badge bg-success">Verificado</span>}
        </td>
        <td>{data.role === "user" ? "Usuario" : "Admin"}</td>
        <td>{data.user_level}</td>
        <td>
          <div className="btn-group">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
              <i className="far fa-edit"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-right">
              <li><Link className="dropdown-item" to={`/user/activities/${data.id}`}>Ver Actividades</Link></li>
              <li><Link className="dropdown-item" to={`/user/investments/${data.id}`}>Ver Inversiones</Link></li>
              <li><button className="dropdown-item" onClick={() => { setModalOpen(true); setUserId(data.id); setActionType("changeLAStatus") }}>Cambiar estatus cuenta LA</button></li>
              <li><button className="dropdown-item" onClick={() => { setModalOpen(true); setUserId(data.id); setActionType("changeUserLevel")}}>Cambiar nivel de usuario</button></li>
            </ul>
          </div>
          {modalOpen && <Modal setOpenModal={setModalOpen} userId={userId} actionType={actionType}/>}
        </td>
      </tr>






    </>


  )
};

Users.propTypes = {
  data: PropType.object
};