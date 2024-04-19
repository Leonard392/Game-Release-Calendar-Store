import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/Context";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ProfilePic from "../../img/profile.png";
import "../../styles/login.css";

export const Signup = () => {
    const { actions } = useContext(Context);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async () => {
        setError(null);
        try {
            await actions.signUp(username, password);
            setSuccess(true);
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <div className="login-body">
                <div className="login">
                    <img src={ProfilePic} />
                    <h3>Welcome!</h3>
                    <h2>Create account</h2>
                    {success && <div className="alert alert-success">User created successfully!</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="login-form">
                        <input
                            type="text"
                            placeholder="Enter your user"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Enter your passcode"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button onClick={handleSignUp}>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    );
};