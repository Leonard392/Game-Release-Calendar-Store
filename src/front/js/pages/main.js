import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavbarSignedIn } from "../component/navbarSignedIn.jsx";
import { Calendar } from "../component/calendar.jsx";
import "../../styles/main.css";

export const Main = () => {
  const { store, actions } = useContext(Context);
	
  return (
		<div>
      {console.log(store.getGamesList)}
      <NavbarSignedIn/>
      <Calendar/>
		</div>
	);
};
