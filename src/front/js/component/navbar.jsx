import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/Context";
import "../../styles/navbar.css"

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="navBar">
                <div className="logo">
                    <Link to="/" className="link-logo">
                        <h1><span>Ninja</span> Station</h1>
                    </Link>
                </div>
                <ul className={`links ${isOpen ? "open" : ""}`}>
                    <li>
                        <Link to="/platforms" className="naV-link">
                            <h4>PLATFORMS</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/creators" className="naV-link">
                            <h4>CREATORS</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/stores" className="naV-link">
                            <h4>STORES</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/genres/action" className="naV-link">
                            <h4>GAMES</h4>
                        </Link>
                    </li>
                </ul>
                {!store.token ? (
                    <div className="login-signup">
                        <Link to="/signup">
                            <button className="action_btn signup-btn">Get Started</button>
                        </Link>
                        <Link to="/login">
                            <button className="action_btn login-btn">Log In</button>
                        </Link>
                    </div>
                ) : (
                    <div className="signup-login">
                        <Link to="/favorites/games" className="signup-login-link">
                            <button className="action_btn signup-btn">Me!</button>
                        </Link>
                        <Link to="/" className="signup-login-link"> {/*Cambiado a '/logout' para enlazar a la página de cierre de sesión */}
                            <button onClick={() => actions.logout(store)} className="action_btn login-btn">Logout</button>
                        </Link>
                    </div>
                )}

                <div className="toggle_btn" onClick={handleClick}>
                    <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
                </div>
            </div>

            <div className={`Dropdown_menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <Link to="/platforms" className="naV-link">
                            <h4 className="dropdown-h4">PLATFORMS</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/creators" className="naV-link">
                            <h4 className="dropdown-h4">CREATORS</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/stores" className="naV-link">
                            <h4 className="dropdown-h4">STORES</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/genres/action" className="naV-link">
                            <h4 className="dropdown-h4">GAMES</h4>
                        </Link>
                    </li>
                    {!store.token ? (
                        <div className="signup-login">
                            <Link to="/signup" className="signup-login-link">
                                <button className="action_btn signup-btn">Get Started</button>
                            </Link>
                            <Link to="/login" className="signup-login-link">
                                <button className="action_btn login-btn">Log In</button>
                            </Link>
                        </div>
                    ) : (
                        <div className="signup-login">
                            <Link to="/favorites/games" className="signup-login-link">
                                <button className="action_btn signup-btn">Me!</button>
                            </Link>
                            <Link to="/" className="signup-login-link"> {/*Cambiado a '/logout' para enlazar a la página de cierre de sesión */}
                                <button onClick={() => actions.logout(store)} className="action_btn login-btn">Logout</button>
                            </Link>
                        </div>

                    )}
                </ul>
            </div>
        </header>
    );
};