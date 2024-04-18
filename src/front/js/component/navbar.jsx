import React, { useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="navBar">
                <div className="logo">
                    <Link to="/" className="link-logo">
                        <h1>Ninja Station</h1>
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
                <Link to="/signup">
                    <button className="action_btn signup-btn">Get Started</button>
                </Link>
                <Link to="/login">
                    <button className="action_btn login-btn">Log In</button>
                </Link>
                <div className="toggle_btn" onClick={handleClick}>
                    <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
                </div>
            </div>

            <div className={`Dropdown_menu ${isOpen ? "open" : ""}`}>
                <ul>
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
                    <li>
                        <Link to="/signup" className="naV-btn">
                            <button className="action_btn signup-btn">Get Started</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="naV-btn">
                            <button className="action_btn login-btn">Log In</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};