import React from "react";
import { Link } from "react-router-dom";
import logoImageUrl from "../../img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="brand">Samurai Station</span>
				</Link>

				<div>
					<a href="#features">Features</a>
					<a href="#footer">About Us</a>
				</div>


				<div className="ml-auto">
					<Link to="/demo">
						<button className="login-btn">Log In</button>
					</Link>
					<Link to="/demo">
						<button className="login-btn">Sign Up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
