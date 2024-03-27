import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../img/profile.png";

export const NavbarSignedIn = () => {
	return (
		<nav className="navbar bg-light">
			<div className="container-fluid">
				<Link className="brand-link" to="/">
					<p className="brand">Ninja Station</p>
				</Link>

				<div className="ml-auto">
					<div class="dropdown signup-link">
  						<button className="btn-profile btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					  		<img src={ProfilePic} className="profile-img "/>
  						</button>
  					
 				 		<ul class="dropdown-menu">
   				 			<li>
								<Link to="/profile">
									<p>My Games</p>
								</Link>	
							</li>
							<li>
								<Link  to="/profile">
									<p>WishList</p>
								</Link>	
							</li>
				  		</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

