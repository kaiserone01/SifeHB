import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { AllActivitiesInfo } from "../component/allactivitiesinfo";
import ReactPaginate from "react-paginate";
import { sweetNotify } from "../utils/sweetalertnotifier";

export const AllActivities = () => {

    const { store, actions } = useContext(Context);
    const [type, setType] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        actions.getAllActivities(1, 10, type);
    }, [type]);

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        actions.getAllActivities(currentPage, 10, type, query);
    };

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
                    <div className="row mb-3">
                        <div className="col-12 col-md-4 col-lg-6">
                            <div className="dropdown mb-4">
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    Filtrar por compra y venta
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><button className="dropdown-item" href="#" onClick={(e) => { setType("") }}>Todos</button></li>
                                    <li><button className="dropdown-item" href="#" onClick={(e) => { setType("Compra") }}> Compra </button></li>
                                    <li><button className="dropdown-item" href="#" onClick={(e) => { setType("Venta") }}> Venta </button></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-6 text-md-right text-lg-right">
                            <div className="input-group flex-nowrap">
                                <input type="text" className="form-control" placeholder="Buscar usuario ej. V12345678" aria-label="Username" aria-describedby="addon-wrapping"
                                    onChange={(e) => { setQuery(e.target.value) }}
                                    value={query}
                                />
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-search" onClick={() => { actions.getAllActivities("", "", type, query); }}></i></span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">

                        {store.allActivities.results && store.allActivities.results.length > 0 ? store.allActivities.results && store.allActivities.results.map((item, index) => {
                            return <AllActivitiesInfo key={index} data={item} type={type} />
                        }) : <div className="col"> <div className="d-flex justify-content-center align-items-center"><i className="nav-icon far fa-circle text-danger mr-2"></i>No hay actividades</div></div>}

                    </div>
                    {store.allActivities && store.allActivities.total_pages > 1 ? <ReactPaginate
                        previousLabel={"Anterior"}
                        nextLabel={"Siguiente"}
                        breakLabel={"..."}
                        pageCount={store.allActivities && store.allActivities.total_pages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination justify-content-center"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"active"}
                        renderOnZeroPageCount={null}
                    /> : ""}
                    
                </div>
            </section>
        </>)
};