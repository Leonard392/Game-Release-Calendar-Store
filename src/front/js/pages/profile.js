import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Profile = () => {
	return (
		<div>
		    <Link to="/favorites">
				<button>FAVORITES</button>
			</Link>
		</div>
	);
};
