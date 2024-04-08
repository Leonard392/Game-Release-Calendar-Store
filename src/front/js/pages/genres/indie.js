import React, { useContext, useEffect } from "react";
import { Context } from "../../store/Context.js";
import { GameCard } from "../../component/cards/gameCard.jsx"
import { Navbar } from "../../component/navbar.jsx";
import { Sidebar } from "../../component/sidebar.jsx";
import "../../../styles/genres.css";

export const Indie = () => {
  const { store, actions } = useContext(Context);

  return (
        <div className="games-body">
            <Navbar/>
            <div className="row">
                <Sidebar/>
            <div className="games-list.  col-lg-9 col-md-8 col-sm-1">
                <h1>Indie Games</h1>
                <div className="row">
                    {store.indieGames.map(game => (
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