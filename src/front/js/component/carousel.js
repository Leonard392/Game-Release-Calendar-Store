import React from "react";
import { Link } from "react-router-dom";
import LOU from "../../img/last.png.webp"

export const HomeCarousel = () => {
	return (
        <div>
		<div class="featurette">
            <div class="example-left">
                <img src= {LOU} className="example-img"/>
            </div>
            <div class="example-text">
                <h2 class="featurette-heading fw-normal lh-1 example-title">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
                <p class="lead example-description">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            
        </div>
        <div class="row featurette">
        <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
            <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
        </div>
        <div class="col-md-5 order-md-1">
            <img src= {LOU}/>
        </div>
    </div>
    </div>
	);
};
