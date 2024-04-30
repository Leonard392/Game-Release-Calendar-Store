import React, { useContext, useEffect } from "react";
import { Context } from "../store/Context.js";
import { GameCard } from "./cards/gameCard.jsx";
import "../../styles/home.css"

export const TopGames = () => {
  const { store } = useContext(Context);

  // Only render the first 6 top games
  const sixTopGames = store.bestGames2024.slice(0,6);

  return (
    <div className="games-2024">
        <div className=" games-list-2024">
          <h1 className="best2024GamesTittle">Best 2024 Games</h1>
          <div className="row mg2024">
            {sixTopGames.map(game => (
              <div className="g2024" key={game.id}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};