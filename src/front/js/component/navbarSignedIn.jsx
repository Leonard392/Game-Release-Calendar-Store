import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../img/profile.png";

export const NavbarSignedIn = () => {
	return (
		<nav className="navbar bg-light">
			<div className="container-fluid">
				<Link className="brand-link" to="/">
					<p className="brand">Ninja Station</p>
				</Link>

				<div className="ml-auto">
					<Link className="signup-link" to="/profile">
						<img src={ProfilePic} className="profile-img"/>
					</Link>
				</div>
			</div>
		</nav>
	);
};
