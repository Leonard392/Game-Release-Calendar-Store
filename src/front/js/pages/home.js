import React, { useContext, useEffect } from "react";
import { Context } from "../store/Context";
import { Link } from "react-router-dom";
import { GamesSlide } from "../component/gamesSlide.jsx";
import { TopGames } from "../component/topGames.jsx";
import { Features } from "../component/features.jsx";
import logo3 from "../../img/logo.webp";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div>
			
			<div className="main-content">
				<div className="left">
					<h1>Let's Get Some <span>Video Games</span></h1>
					<p>Welcome to our online video game store! Dive into a world where gaming dreams come true. With a curated selection of the latest titles and beloved classics, we cater to every gamer's taste.</p>
					<Link to="/profile">
						<button className="left-btn">BUY NOW</button>
					</Link>
				</div>
				<div className="right">
					<img  className="logo-img" src={logo3}/>
				</div>
			</div>
			<TopGames/>
			<Features/>
		</div>
	);
};
