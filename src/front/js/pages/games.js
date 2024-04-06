import React, { useContext, useEffect } from "react";
import { Context } from "../store/Context";
import { Navbar } from "../component/navbar.jsx";
import GameCard from "../component/gameCard.jsx";
import "../../styles/games.css";

export const Games = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchGamesForYear(); // Fetch games when component mounts
  }, []);

  return (
    <div className="games-body">
        <Navbar/>
        <div className="games-list">
            <h1>Games of 2023</h1>
            <div className="row">
                {store.getGamesList.map(game => (
                <div className="col-lg-3 col-md-4 col-sm-2" key={game.id}>
                    <GameCard game={game} />
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};
