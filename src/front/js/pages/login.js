import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import ProfilePic from "../../img/profile.png";
import "../../styles/login.css";

export const Login = () => {
	return (
		<div>
		<Navbar/>
		<div className="login-body">
		<div className="login">
			<img src={ProfilePic} />
			<h3>Welcome Back!</h3>
			<h2>GaMeR</h2>	
			<form className="login-form">
				<input type="text" placeholder="Enter your user"/>
				<input type="password" placeholder="Enter your passcode"/>
				<button type="submit">LOGIN</button>
				<a href="#">Forget your passcode?</a>
			</form>
		</div>
		</div>
		</div>
	);
};
