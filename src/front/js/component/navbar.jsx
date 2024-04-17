import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
	const dropDownMenu = document.querySelector(".Dropdown_menu");
	const toggleBtnIcon = document.querySelector(".toggle_btn ");


	const handleClick = () => {
		dropDownMenu.clasList.toggle("open");
		const isOpen = dropDownMenu.classList.contains("open");


	}

	return (
		<header>
		<div className="navBar">
			<div className="logo">
				<Link to="/" className="link-logo">
					<h1>Ninja Station</h1>
				</Link>
			</div>
			<ul className="links">
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
				<button className="action_btn">Get Started</button>
			</Link>
			<Link to="/login">
				<button className="action_btn">Log In</button>
			</Link>
			<div className="toggle_btn" onClick={handleClick}>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
  					<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
				</svg>
			</div>
		</div>

		<div className="Dropdown_menu open">
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
			<button className="action_btn">Get Started</button>
		</Link>
		</li>
		<li>
		<Link to="/login" className="naV-btn">
			<button className="action_btn">Log In</button>
		</Link>
		</li>
		</div>
		</header>
	);
};




<nav className="navbar bg-light">
			<div className="container-fluid">
				<Link className="brand-link" to="/">
					<h1 className="brand">Ninja Station</h1>
				</Link>

				<div className="center-links">
					<Link className="center-link" to="/platforms">
						<h4>PLATFORMS</h4>
					</Link>
					<Link className="center-link" to="/creators">
						<h4>CREATORS</h4>
					</Link>
					<Link className="center-link" to="/stores">
						<h4>STORES</h4>
					</Link>
					<Link className="center-link" to="/genres/action">
						<h4>GAMES</h4>
					</Link>
				</div>


				<div className="ml-auto">
					<Link className="signup-link" to="/signup">
						<button className="signup-btn">Get Started</button>
					</Link>
					<Link className="signup-link" to="/login">
						<button className="login-btn">Log In</button>
					</Link>
				</div>
			</div>
		</nav>