import React, { useContext, useEffect } from "react";
import { Context } from "../store/Context.js";
import { GameCard } from "./cards/gameCard.jsx";

export const TopGames = () => {
  const { store } = useContext(Context);

  // Only render the first 6 top games
  const sixTopGames = store.bestGames2024.slice(0,6);

  return (
    <div className="games-2024">
        <div className="games-list">
          <h1 className="best2024GamesTittle">Best 2024 Games</h1>
          <div className="row">
            {sixTopGames.map(game => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={game.id}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};