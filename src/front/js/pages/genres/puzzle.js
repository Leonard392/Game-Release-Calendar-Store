import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/Context.js";
import { GameCard } from "../../component/cards/gameCard.jsx"
import { Navbar } from "../../component/navbar.jsx";
import { Sidebar } from "../../component/sidebar.jsx";
import "../../../styles/genres.css";

export const Puzzle = () => {
    const { store, actions } = useContext(Context);

    const KEY_API = "36254294ed4b46ffbb02d560b2558d65";
    const [games, setGames] = useState([]);

    let url = `https://api.rawg.io/api/games?genres=puzzle&key=${KEY_API}`;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setGames(data.results)) // Update state with results array
            .catch(err => console.error(err)); // Log error to console
    }, []); // Include url in dependency array

    return (
        <div className="games-body">
            <Navbar/>
            <div className="row">
                <Sidebar/>
                <div className="games-list col-lg-9 col-md-8 col-sm-1">
                    <h1>Puzzle Games</h1>
                    <div className="row">
                        {games.map(game => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={game.id}>
                                <GameCard game={game} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};