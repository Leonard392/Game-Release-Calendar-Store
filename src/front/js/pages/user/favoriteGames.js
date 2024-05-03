import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../store/Context";
import { GameCard } from "../../component/cards/gameCard.jsx"
import { SidebarUser } from "./sidebarUser.js";
import "../../../styles/genres.css";


export const FavoriteGames = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchUserFavoriteGames()
    }, []);

    return (
        
        <div className="games-body">
            <div className="row">
                <SidebarUser/>
                <div className="games-list">
                    <h1><span>WISH</span> LIST</h1>
                    <div className="row small-games-list">
                    {store.favoritesGames.map(game => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={game.id}>
                    <GameCard game={game} />
                </div>
            ))}
                    </div>
                </div>
            </div>
        </div>
    )
};