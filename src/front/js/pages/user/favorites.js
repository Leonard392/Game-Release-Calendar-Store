import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../store/Context";
import { GameCard } from "../../component/cards/gameCard.jsx"

export const Favorites = () => {
  const { store, actions } = useContext(Context);
  const [userFavorites, setUserFavorites] = useState([]);
  const KEY_API = "35e73496eb2c49af83d0f3f7074b875e";

  useEffect(() => {
      if (store.token) {
          actions.fetchUserFavorites(); // Llama a esta acción para cargar los juegos favoritos del usuario desde la API
      }
  }, [store.token]);

  useEffect(() => {
    const fetchGameData = async (gameId) => {
      try {
          const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${KEY_API}`);
          if (!response.ok) {
              throw new Error('Failed to fetch game data');
          }
          const gameData = await response.json();
          return gameData; // Devolver directamente los datos del juego
      } catch (error) {
          console.error('Error fetching game data:', error);
          return null;
      }
  };

      const fetchAllGameDetails = async () => {
          const gamesData = await Promise.all(store.favorites.games.map(id => fetchGameData(id)));
          setUserFavorites(gamesData.filter(game => game !== null)); // Filtrar juegos que no pudieron cargarse
      };

      if (store.favorites.games.length > 0) {
          fetchAllGameDetails();
      }
  }, [store.favorites.games]);

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