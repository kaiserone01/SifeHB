import React, { useState, useEffect, useContext } from "react";
import { UserActivitieInfo } from "../../js/component/useractivityinfo";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const UserActivities = () => {
    const { store, actions } = useContext(Context);

    const [type, setType] = useState("");

    const params = useParams();
    console.log(params)

    useEffect(() => {
        if (params.id) {
            actions.getUserActivites(params.id, type);
        }
    }, [type]);
    return (
        <>
            {/* Content Header (Page header) */}
            < section className="content-header" >
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Actividad de usuario</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to={"/users"}>Usuarios</Link></li>
                                <li className="breadcrumb-item active">Actividad de usuario</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section >
            <section className="content">
                <div className="container-fluid min-vh-100">

                    <div className="dropdown mb-4">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            Filtrar por compra y venta
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><button className="dropdown-item" href="#" onClick={(e) => { setType("Compra") }}>  Compra </button></li>
                            <li><button className="dropdown-item" href="#" onClick={(e) => { setType("Venta") }}>  Venta </button></li>

                        </ul>
                    </div>
                    <div className="row">

                        {store.userActivities && store.userActivities.length > 0 ? store.userActivities && store.userActivities.map((item, index) => {
                            return <UserActivitieInfo key={index} data={item} type={type} />
                        }) : <div className="col"> <div className="d-flex justify-content-center align-items-center"><i className="nav-icon far fa-circle text-danger mr-2"></i>El usuario no tiene actividades</div></div>}

                    </div>

                </div>
            </section>
        </>)
};