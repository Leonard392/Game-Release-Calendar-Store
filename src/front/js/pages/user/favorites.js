import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../store/Context";
import { GameCard } from "../../component/cards/gameCard.jsx"
import { Link, useHistory } from "react-router-dom";


export const Favorites = () => {
  const { store, actions } = useContext(Context);
  const [userFavorites, setUserFavorites] = useState([]);
  const KEY_API = "35e73496eb2c49af83d0f3f7074b875e";

  useEffect(() => {
    actions.fetchUserFavoriteGames()
}, []);


    console.log(store.favoritesGames);
  return (
      <div>
          <h2>User Favorites</h2>
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