import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Profile = () => {
	return (
		<div>
		    <NavbarSignedIn/>
            <h1>Hello I am Profile Page</h1>
		</div>
	);
};
