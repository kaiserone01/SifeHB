import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/App.css';

export const Home = () => {
  return (
    <>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">SIFE Panel</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to={'/'}>Inicio</Link></li>
                <li className="breadcrumb-item active">Panel</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">New Members</span>
                  <span className="info-box-number">2,000</span>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

    </>);
};
