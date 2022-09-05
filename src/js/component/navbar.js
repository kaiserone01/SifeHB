import React, {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Navbar.css';
import { Context } from "../store/appContext";
export const Navbar = () => {
    const {actions} = useContext(Context);
    const navigate = useNavigate();
    const handleSwitchTheme = () => {
        var element = document.getElementById("body")
        element.classList.toggle("dark-mode")
        let dark = JSON.parse(localStorage.getItem("bnci-dark-mode"))
        if (dark) {
            localStorage.setItem("bnci-dark-mode", JSON.stringify(false))
        }
        else {
            localStorage.setItem("bnci-dark-mode", JSON.stringify(true))
        }
    }
    const handleLogout = async () =>{
        if(await actions.logoutUser()){
            console.log("Logout")
            return navigate("/")
        }
    };
    useEffect(() => {

        //default is light mode
        console.log("dark mode is ", JSON.parse(localStorage.getItem("bnci-dark-mode")))
        let dark = JSON.parse(localStorage.getItem("bnci-dark-mode"))
        if (dark === null) {
            localStorage.setItem("bnci-dark-mode", JSON.stringify(false))
        }
        else if (dark === true) {
            document.getElementById("body").classList.add("dark-mode")

        }
    }, [])

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <button type="button" className="btn btn-block btn-danger btn-sm" onClick={handleLogout}>Cerrar sesión</button>
                </li>
                {/* <li className="nav-item">
                    <label className="switch">
                        <input type="checkbox" onClick={handleSwitchTheme} />
                        <span className="slider round"></span>
                    </label>
                </li> */}
            </ul>
        </nav>

    )
};