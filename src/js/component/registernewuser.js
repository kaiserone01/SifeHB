import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export const RegisterNewUser = () => {
    const { actions } = useContext(Context);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [identityDocument, setIdentityDocument] = useState("");
    const [email, setEmail] = useState("");
    const [userNickname, setUserNickName] = useState("");
    const [tempPassword, setTempPassword] = useState("");
    const [questionOne, setQuestionOne] = useState("Seleccionar");
    const [answerOne, setAnswerOne] = useState("Seleccionar");
    const [questionTwo, setQuestionTwo] = useState("Seleccionar");
    const [answerTwo, setAnswerTwo] = useState("Seleccionar");
    const [userRole, setUserRole] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const handleChange = e => {
        if (e.target.checked) {
            setUserRole("admin");
        } else {
            setUserRole("user");
        }
        setIsAdmin(current => !current);
    };

    const handleNewUserRegistration = async () => {
        if (name === "" || lastName === ""
            || identityDocument === ""
            || email === "" || userNickname === ""
            || tempPassword === "" || questionOne === ""
            || answerOne === "") {
            return;
        }
        let data = {
            email: email,
            password: tempPassword,
            identitydocument: identityDocument,
            nickname: userNickname,
            firstname: name,
            lastname: lastName,
            questionone: questionOne,
            answerone: answerOne,
            questiontwo: questionTwo,
            answertwo: answerTwo,
            role: userRole
        };

        if (await actions.registerNewUser(data)) {
            setName("")
            setLastName("")
            setIdentityDocument("")
            setEmail("")
            setUserNickName("")
            setTempPassword("")
            setQuestionOne("")
            setAnswerOne("")
            setQuestionTwo("")
            setAnswerTwo("")
            setUserRole("")
            setIsAdmin(false)
            return console.log("Usuario registrado");
        }
        return console.log("Usuario no registrado");
    };

    useEffect(() => {

    }, []);
    return (
        <>
            {/* Content Header (Page header) */}
            <section className="content-header" >
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Registrar nuevo usuario</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to={"/"}>Inicio</Link></li>
                                <li className="breadcrumb-item active">Registrar nuevo usuario</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section >
            <section className="content">
                <div className="container-fluid min-vh-100">
                    <div className="row justify-content-center mb-3">
                        <div className='col-md-6'>
                            <div className="card rounded-0 shadow">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="inputName">Nombre: </label>
                                            <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Escriba el nombre" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputLastName">Apellido: </label>
                                            <input type="text" className="form-control" id="inputLastName" aria-describedby="emailHelp" onChange={(e) => { setLastName(e.target.value) }} value={lastName} placeholder="Escriba el apellido" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputID">Cédula: </label>
                                            <input type="text" className="form-control" id="inputID" aria-describedby="emailHelp" onChange={(e) => { setIdentityDocument(e.target.value) }} value={identityDocument} placeholder="Escriba el numero de cédula Ej. V12345678" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail">Correo:</label>
                                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Escriba el correo" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputNickName">Nickname: </label>
                                            <input type="text" className="form-control" id="inputNickName" aria-describedby="emailHelp" onChange={(e) => { setUserNickName(e.target.value) }} value={userNickname} placeholder="Escriba el nickname" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword">Contraseña temporal: </label>
                                            <input type="password" className="form-control" id="inputPassword" onChange={(e) => { setTempPassword(e.target.value) }} value={tempPassword} placeholder="Escriba una contraseña temporal" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputQuestion1">Pregunta seguridad 1: </label>
                                            <select className="form-control" name="securityquestion1" id="inputQuestion1" defaultValue={questionOne} onChange={(e) => { setQuestionOne(e.target.value); console.log(e.target.value) }}>
                                                <option>{questionOne}</option>
                                                <option value="pregunta_1">Pregunta 1</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputAnswer1">Respuesta 1</label>
                                            <select className="form-control" name="securityAnswer1" id="inputAnswer1" defaultValue={answerOne} onChange={(e) => { setAnswerOne(e.target.value) }} required>
                                                <option>{answerOne}</option>
                                                <option value="respuesta_1">Respuesta 1</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputQuestion2">Pregunta seguridad 2: </label>
                                            <select className="form-control" name="securityquestion2" id="inputQuestion2" defaultValue={questionTwo} onChange={(e) => { setQuestionTwo(e.target.value) }} required>
                                                <option>{questionTwo}</option>
                                                <option value="pregunta_2">Pregunta 2</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputAnswer2">Respuesta 1</label>
                                            <select className="form-control" name="securityAnswer1" id="inputAnswer2" defaultValue={answerTwo} onChange={(e) => { setAnswerTwo(e.target.value) }} required>
                                                <option>{answerTwo}</option>
                                                <option value="respuesta_2">Respuesta 2</option>
                                            </select>
                                        </div>
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="checkAdmin" value={isAdmin} onChange={handleChange} />
                                            <label className="form-check-label" htmlFor="checkAdmin">¿Registrar como administrador?</label>
                                        </div>
                                        <button type="button" onClick={handleNewUserRegistration} className="btn btn-primary">Registrar</button>
                                    </form>
                                    <small id="info" class="form-text text-muted"><span className='text-danger'>*</span> El usuario debera actualizar la contraseña temporal y las preguntas de seguridad desde su panel de cliente.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
