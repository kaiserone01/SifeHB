import React from 'react'

export const Footer = () => {
    return (
        <footer className="main-footer">
            <strong>Copyright © {new Date().getFullYear()} SIFE HOME BANKING. C.A.</strong>
            Todos los derechos reservados.
            <div className="float-right d-none d-sm-inline-block">
                <b>Version</b> 1.0.0
            </div>
        </footer>

    )
}
