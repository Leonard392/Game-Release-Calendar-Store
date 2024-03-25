import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<Link className="brand-link" to="/">
					<p className="brand">Ninja Station</p>
				</Link>

				<div>
					<a className="center-links" href="#features">Features</a>
					<a className="center-links" href="#footer">About Us</a>
				</div>


				<div className="ml-auto">
					<Link className="signup-link" to="/demo">
						<button className="signup-btn">Get Started</button>
					</Link>
					<Link className="signup-link" to="/login">
						<button className="login-btn">Log In</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
