import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../store/Context";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const CreatorCard = ({ creator }) => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
      actions.fetchUserFavoriteCreators()
  }, []);

  const handleAddToFavorites = async (creator) => {
      if (store.token) {
          await actions.addCreatorToFavorites(creator);
          // Después de agregar el juego a favoritos, actualiza el estado del store
          console.log(store.favoritesCreators);
      } else {
          // Si el usuario no está autenticado, redirige a la página de inicio de sesión
          navigate("/login");
      }
  };

  const handleRemoveFromFavorites = async (creatorId) => {
      if (store.token) {
          await actions.removeCreatorFromFavorites(creatorId);
          // Espera a que se complete removeGameFromFavorites antes de llamar a fetchUserFavoriteGames
          console.log(store.favoritesCreators);
      }
  };

  const isCreatorInFavorites = (creatorId) => {
      if (store.favoritesCreators) {
          console.log(store.favoritesCreators, "lista de juegos favoritos");
          return store.favoritesCreators.filter(creator => creator.id == creatorId).length;
      }
      return false;
  };








  return (
    <div className="card">
      <img src={creator.image} className="card-img-top" alt={creator.name} />
      <div className="card-body">
        <h5 className="card-title">{creator.name}</h5>
        <p className="card-text">Rating: {creator.rating}</p>
        <p className="card-text">Games Created: {creator.games_count}</p>
        <Link to={"/creatorDetails/" + creator.id}>
          <button type="button" className="btn btn-outline mt-3 me-2 learnMoreBtn">See more! </button>
        </Link>
        {isCreatorInFavorites(creator.id) ? (
          <button className="btn btn-outline-secondary" onClick={() => handleRemoveFromFavorites(creator.id)}>
            Remove from Favorites
          </button>
        ) : (
          <button className="btn btn-outline-secondary" onClick={() => handleAddToFavorites(creator)}>
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
};