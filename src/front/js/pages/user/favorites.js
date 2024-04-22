import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../store/Context";
import { GameCard } from "../../component/cards/gameCard.jsx"

export const Favorites = () => {
    const { store, actions } = useContext(Context);
    const [userFavorites, setUserFavorites] = useState([]);
  
    useEffect(() => {
      if (store.token) {
        actions.fetchUserFavorites(); // Llama a esta acción para cargar los juegos favoritos del usuario desde la API
      }
    }, [store.token]);
  
    useEffect(() => {
      if (store.favorites && store.favorites.games) {
        setUserFavorites(store.favorites.games);
      }
    }, [store.favorites]);
  
    return (
      <div>
        <h2>User Favorites</h2>
        <div className="row">
          {userFavorites.map((game, index) => (
            <div className="col-md-4" key={index}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    );
  };