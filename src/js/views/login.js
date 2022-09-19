import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { sweetNotify } from "../utils/sweetalertnotifier";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: false });
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleLogin = async () => {
        let data = {
            email: email,
            password: password
        };
        if (!errors.email) {
            sweetNotify("Email inválido", "error");
            return;
        }
        if (await actions.loginUser(data)) {
            return navigate("/")
        }

    };
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href="#"><b>SIFE</b>HomeBanking</a>
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Iniciar sesión</p>
                        <div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email"
                                    onChange={e => { setEmail(e.target.value); }} value={email} onBlur={(e) => {
                                        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                        if (regex.test(email)) {
                                            setErrors({ ...errors, email: true });
                                        } else {
                                            setErrors({ ...errors, email: false });
                                        }
                                    }} onKeyPress={e => {
                                        if (e.key == "Enter") {
                                            if (e.target.value == "") {
                                                sweetNotify("El campo email no puede estar vacío", "error");
                                                return;
                                            }}
                                    }}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                                {errors.email === true ? "" : (<div className="invalid-tooltip d-block">
                                    Email inválido
                                </div>)}
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password"
                                    onChange={e => { setPassword(e.target.value); }} value={password} onKeyPress={e => {
                                        if (e.key == "Enter") {
                                            if (e.target.value == "") {
                                                sweetNotify("El campo password no puede estar vacío", "error");
                                                return;
                                            }}
                                    }}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">
                  Remember Me
                </label>
              </div>
            </div> */}
                                {/* /.col */}
                                <div className="col">
                                    <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>Iniciar sesión</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </div>
                        {/* <p className="mb-1">
          <a href="#">I forgot my password</a>
        </p>
        <p className="mb-0">
          <a href="#" className="text-center">Register a new membership</a>
        </p> */}
                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>
            {/* /.login-box */}
        </div>

    )
};
