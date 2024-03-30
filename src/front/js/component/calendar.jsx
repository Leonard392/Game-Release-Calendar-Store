import React from "react";
import { Link } from "react-router-dom";

export const Calendar = () => {
	return (
		<div className="main">
            <h1>Video Games Release Calendar</h1>

            <div className="controls">
                <button className="prevMonth">Previous</button>
                <span className="currentMonthYear"></span>
                <button className="nextMonth">Next</button>
            </div>
        
            <div className="calendar"></div>

            <div id="gameModa" className="moda">
                <div className="moda-content">
                    <span className="close">&times;</span>
                    <img src="" className="gameImage"/>
                    <h2 className="gameTitle"></h2>
                    <p><strong>Description:</strong><span className="gameDescription"></span></p>
                    <p><strong>Release Date:</strong><span className="gameReleaseDate"></span></p>
                    <p><strong>Rating:</strong><span className="gameRating"></span></p>
                    <p><strong>Platforms:</strong><span className="gamePlatforms"></span></p>
                </div>
            </div>

       </div>  
	);
};
