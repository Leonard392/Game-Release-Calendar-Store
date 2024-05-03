import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../store/Context";
import { GameCard } from "../../component/cards/gameCard.jsx"
import { SidebarUser } from "./sidebarUser.js";


export const FavoriteGames = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchUserFavoriteGames()
    }, []);

    return (
        <div>
            <SidebarUser/>
            <h2>Wish List</h2>
            <div className="row">
                {store.favoritesGames.map(game => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={game.id}>
                        <GameCard game={game} />
                    </div>
                ))}
            </div>
        </div>
    );
};