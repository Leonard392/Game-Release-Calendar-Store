import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { NavbarSignedIn } from "../component/navbarSignedIn.jsx";
import "../../styles/navbarSignedIn.css";

export const Main = () => {
	return (
		<div>
		    <NavbarSignedIn/>
            <h1>Hello I am Main Page</h1>
		</div>
	);
};
