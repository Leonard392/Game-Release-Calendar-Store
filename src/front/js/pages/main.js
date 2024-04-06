import React, { useContext } from "react";
import { Context } from "../store/Context";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavbarSignedIn } from "../component/navbarSignedIn.jsx";
import { Calendar } from "../component/calendar.jsx";
import "../../styles/main.css";

export const Main = () => {
   const { store } = useContext(Context); // Get the store from the context
   const { getGamesList } = store; // Destructure getGamesList from the store
	
   console.log(getGamesList);
  return(
   <div>
     <h2>List of Games</h2>
     <ul>
       {getGamesList.map(game => (
         <li key={game.id}>{game.name}</li>
       ))}
     </ul>
   </div>
 );
};
