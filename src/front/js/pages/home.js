import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar.jsx";
import { HomeCarousel } from "../component/carousel.jsx";
import { Features } from "../component/features.jsx";
import logoImageUrl from "../../img/logo.png";
import logo3 from "../../img/5.webp";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Navbar/>
			<div className="main-content">
				<div className="left">
					<h1>Let's Get Some <span>Video Games</span></h1>
					<p>Welcome to our online video game store! Dive into a world where gaming dreams come true. With a curated selection of the latest titles and beloved classics, we cater to every gamer's taste.</p>
					<Link to="/main">
						<button className="left-btn">BUY NOW</button>
					</Link>
				</div>
				<img className="logo-img" src={logo3}/>
			</div>
			<HomeCarousel/>
			<Features/>
		</div>
	);
};
