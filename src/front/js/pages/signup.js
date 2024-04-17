import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/Context";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../component/navbar.jsx";
import ProfilePic from "../../img/profile.png";
import "../../styles/login.css";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        actions.signup(email, password);
    };


    if(store.token && store.token != "" && store.token!= undefined) {
        navigate('/');
        return true; // Indica que se redirigió exitosamente
    }

    return (
        <div>
            <Navbar />
            <div className="login-body">
                <div className="login">
                    <img src={ProfilePic} />
                    <h3>Welcome!</h3>
                    <h2>Create account</h2>
                    <div className="login-form">
                        <input type="text" placeholder="Enter your user" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Enter your passcode" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleClick}>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
