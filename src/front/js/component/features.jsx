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
                <svg className="feat-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                </svg>  
                <p className="feat-description">Some Explaning Text</p>
            </div>
            <div className="feature-card col-3">
                <h3 className="feat-name">WishList</h3>
                <svg className="feat-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>  
                <p className="feat-description">Some Explaning Text</p>
            </div>
            <div className="feature-card col-3">
                <h3 className="feat-name">Games Reviews</h3>
                <svg className="feat-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>  
                <p className="feat-description">Some Explaning Text</p>
            </div>
            <div className="feature-card col-3">
                <h3 className="feat-name">Multiple Platforms</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-playstation" viewBox="0 0 16 16">
                <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z"/>
                </svg>  
                <p className="feat-description">Some Explaning Text</p>
            </div>
            </div>
        </div>
	);
};
