import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="#" className="brand-link">
                <img src="https://pbs.twimg.com/profile_images/1496846694910210053/1JEHFnbN_400x400.jpg" alt="BNCI Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">BNCI Admin Panel</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
              
               
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                       
                        <li className="nav-item">
                            <Link to={"/users"} className="nav-link">
                                <i className="nav-icon fas fa-users" />
                                <p>
                                    Usuarios
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/allactivities"} className="nav-link">
                                <i className="nav-icon fas fa-chart-line" />
                                <p>
                                    Actividades
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}
