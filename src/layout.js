import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./js/views/home";

import injectContext from "./js/store/appContext";

import { Navbar } from "./js/component/navbar";
import { Footer } from "./js/component/footer";
import { NotFound404 } from "./js/component/notFound404";
import Sidebar from "./js/component/sidebar";
import { UsersView } from "./js/views/usersview";
import { UserActivities } from "./js/views/useractivities";
import { UserInvestments } from "./js/views/userinvestments";
import { Login } from "./js/views/login";
import { AllActivities } from "./js/views/allactivities";
import { RegisterNewUser } from "./js/component/registernewuser";

// import { Users } from "./views/users";
// import { UserActivities } from "./views/useractivities";
// import { UserInvestments } from "./views/userinvestments";
// import { Login } from "./views/login";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    let isAuth;
    let token = localStorage.getItem("token");
    console.log(token, "Line 25")
    if (token === undefined) {
        isAuth = false;
    } else if (token == null) {
        isAuth = false;
    } else {
        isAuth = true;
    }
    console.log(isAuth)
    return (
        <div className="wrapper">



            <BrowserRouter basename={basename}>
                {isAuth ? <>
                    <Navbar />
                    <Sidebar />
                    <div className="content-wrapper">
                        <Routes>
                            <Route exact path="/login" element={<Login />} />
                            <Route exact path="/"
                                element={isAuth ? <Home /> : <Navigate to="/login" />} />
                            <Route exact path="/users"
                                element={isAuth ? <UsersView /> : <Navigate to="/login" />} />
                            <Route exact path="/user/activities/:id"
                                element={isAuth ? <UserActivities /> : <Navigate to="/login" />} />
                            <Route exact path="/user/investments/:id"
                                element={isAuth ? <UserInvestments /> : <Navigate to="/login" />} />
                            <Route exact path="/allactivities"
                                element={isAuth ? <AllActivities /> : <Navigate to="/login" />} />
                                <Route exact path="/register-new-user"
                                element={isAuth ? <RegisterNewUser /> : <Navigate to="/login" />} />
                            <Route
                                path="*"
                                element={<NotFound404 />}>

                            </Route>
                        </Routes>
                    </div>
                    <Footer />
                </> : <Routes>
                    <Route exact path="/" element={<Login />} /> </Routes>}



            </BrowserRouter>

        </div>
    );
};

export default injectContext(Layout);
