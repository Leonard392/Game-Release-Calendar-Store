import React, { useContext, useState } from "react";
import { Context } from "../store/Context";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ProfilePic from "../../img/profile.png";
import "../../styles/login.css";

export const Login = () => {
    const { actions } = useContext(Context);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Evitar que el formulario se envíe automáticamente

        try {
            await actions.login(username, password);
            // Manejar la redirección después del inicio de sesión exitoso
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
                    <h3>Welcome Back!</h3>
                    <h2>GaMeR</h2>
                    {success && <div className="alert alert-success">Logged In successfully!</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form className="login-form" onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Enter your passcode"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit">LOGIN</button>
                        <Link to="#">Forget your passcode?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};