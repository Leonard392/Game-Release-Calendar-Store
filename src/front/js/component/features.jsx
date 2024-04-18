import React from "react";
import { Link } from "react-router-dom";

export const Features = () => {
	return (
		<div  className="features row">
            <h1 className="features-title">Features</h1>
            <p className="features-description">Explore our online video game store, where every gamer finds their perfect match.</p>
            <div className="cards row">
            <div className="feature-card col-3">
                <h3 className="feat-name">User Friendly Design</h3>
                <i class="fa-solid fa-user-group"></i> 
                <p className="feat-description">Some Explaning Text</p>
            </div>
            <div className="feature-card col-3">
                <h3 className="feat-name">WishList</h3>
                <i class="fa-solid fa-heart"></i> 
                <p className="feat-description">Some Explaning Text</p>
            </div>
            <div className="feature-card col-3">
                <h3 className="feat-name">Games Reviews</h3>
                <i class="fa-solid fa-comment"></i> 
                <p className="feat-description">Some Explaning Text</p>
            </div>
            <div className="feature-card col-3">
                <h3 className="feat-name">Multiple Platforms</h3>
                <i class="fa-brands fa-playstation"></i> 
                <p className="feat-description">Some Explaning Text</p>
            </div>
            </div>
        </div>
	);
};
