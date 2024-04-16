import React, { useContext } from "react";
import { Context } from "../store/Context";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavbarSignedIn } from "../component/navbarSignedIn.jsx";
import "../../styles/main.css";

export const Main = () => {
   const { store } = useContext(Context); // Get the store from the context
   const { getGamesList } = store; // Destructure getGamesList from the store
	
   console.log(getGamesList);
  return(
   <div>
   </div>
 );
};
