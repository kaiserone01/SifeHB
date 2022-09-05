import React, {useEffect, useContext } from "react";
import { UserInvestmentsInfo } from "../../js/component/userinvestmentsinfo";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const UserInvestments = () => {
    const { store, actions } = useContext(Context);

    const params = useParams();

    useEffect(() => {
        if (params.id) {
            actions.getUserInvestments(params.id);
        }
    }, []);

    return (
        <>
            {/* Content Header (Page header) */}
            < section className="content-header" >
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Inversiones del usuario</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to={"/users"}>Usuarios</Link></li>
                                <li className="breadcrumb-item active">Inversiones de usuario</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section >
            <section className="content">
                <div className="container-fluid min-vh-100">
                    <div className="container mt-4">

                        <div className="row">
                            {store.userInvestments.userInvestList && store.userInvestments.userInvestList.length > 0 ? store.userInvestments.userInvestList && store.userInvestments.userInvestList.map((item, index) => {

                                return <UserInvestmentsInfo key={index} data={item} />
                            }) : <div className="col"> <div className="d-flex justify-content-center align-items-center"><i className="nav-icon far fa-circle text-danger mr-2"></i>El usuario no tiene inversiones</div></div>}
                        </div>
                    </div>
                </div>
            </section>
        </>)
};