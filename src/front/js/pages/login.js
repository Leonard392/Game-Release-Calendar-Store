import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ProfilePic from "../../img/profile.png";
import "../../styles/login.css";

export const Login = () => {
	return (
		<div className="login">
			<img src={ProfilePic} />
			<h3>Welcome Back!</h3>
			<h2>Leo Rod</h2>	
			<form className="login-form">
				<input type="password" placeholder="Enter your passcode"/>
				<button type="submit">LOGIN</button>
				<a href="#">Forget your passcode?</a>
			</form>

		</div>
	);
};
