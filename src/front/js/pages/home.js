import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { HomeCarousel } from "../component/carousel";
import { Features } from "../component/features";
import logoImageUrl from "../../img/logo.png";
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
					<Link to="/login">
						<button className="left-btn">BUY NOW</button>
					</Link>
				</div>
				<img className="logo-img" src={logoImageUrl}/>
			</div>
			<HomeCarousel/>
			<Features/>
		</div>
	);
};
