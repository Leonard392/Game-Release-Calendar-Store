import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Features } from "../component/features";
import logoImageUrl from "../../img/logo.png";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Navbar/>
			<div className="main-content">
				<div>
					<h1>Let's Get Some Video Games</h1>
					<p>Welcome to our online video game store! Dive into a world where gaming dreams come true. With a curated selection of the latest titles and beloved classics, we cater to every gamer's taste.</p>
					<Link to="/login">
						<button>BUY NOW</button>
					</Link>
				</div>
				<div>
					<img src={logoImageUrl}/>
				</div>
			</div>
			<Features/>
		</div>
	);
};
