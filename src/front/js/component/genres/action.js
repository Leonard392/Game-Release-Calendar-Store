import React, { useContext, useEffect } from "react";
import { Context } from "../../store/Context.js";
import { GameCard } from "../gameCard.jsx"

export const Action = () => {
  const { store, actions } = useContext(Context);

  return (
        <div className="games-list.  col-lg-9 col-md-8 col-sm-1">
            <h1>Games of 2024</h1>
            <div className="row">
                {store.bestGames2024.map(game => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={game.id}>
                    <GameCard game={game} />
                </div>
                ))}
            </div>
        </div>
  );
};