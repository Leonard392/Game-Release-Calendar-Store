import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar.jsx";
import ProfilePic from "../../img/profile.png";
import "../../styles/login.css";

export const Signup = () => {
	return (
		<div>
		<Navbar/>
		<div className="login-body">
		<div className="login">
			<img src={ProfilePic} />
			<h3>Welcome!</h3>
			<h2>Create account</h2>	
			<form className="login-form">
				<input type="text" placeholder="Enter your user"/>
				<input type="password" placeholder="Enter your passcode"/>
                <input type="password" placeholder="Repeat your passcode"/>
				<button type="submit">SIGN UP</button>
			</form>
		</div>
		</div>
		</div>
	);
};
