import React from "react";
import "../../styles/features.css"

export const Features = () => {
	return (
		<div  className="features row">
            <h1 className="features-title">Features</h1>
            <h4 className="general-description">Explore our online video game store, where every gamer finds their perfect match.</h4>
            <div className="cards row">
            <div className="feature-card col-3">
                <h3 className="feat-name">Friendly Design</h3>
                <i class="feat-icon fa-solid fa-user-group fa-5x"></i> 
                <p className="feat-description">This page ensures effortless navigation with engaging visuals. Interactive features personalize the experience, enhancing enjoyment for all players.</p>
            </div>
            <div className="feature-card col-3">
                <h3 className="feat-name">WishList</h3>
                <i class="feat-icon fa-solid fa-heart fa-5x"></i> 
                <p className="feat-description">The gaming page's wishlist lets players easily save and track desired games, adding convenience and excitement to their gaming journey.</p>
            </div>
            <div className="feature-card col-3">
                <h3 className="feat-name">Games Reviews</h3>
                <i class="feat-icon fa-solid fa-comment fa-5x"></i> 
                <p className="feat-description">We offer insights into gameplay, graphics, and enjoyment, guiding players to discover new favorites and make informed choices.</p>
            </div>
            <div className="feature-card col-3">
                <h3 className="feat-name">Multiple Platforms</h3>
                <i class="feat-icon fa-brands fa-playstation fa-5x"></i> 
                <p className="feat-description">A gaming page supporting multiple platforms ensures players can enjoy their favorite titles seamlessly across consoles, PCs, and mobile devices.</p>
            </div>
            </div>
        </div>
	);
};
