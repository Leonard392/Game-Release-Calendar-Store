import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../store/Context";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export const Platformcard = ({ platform }) => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.fetchUserFavoritePlatforms()
  }, []);

  const handleAddToFavorites = async (platform) => {
    if (store.token) {
      await actions.addPlatformToFavorites(platform);
    } else {
      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
      navigate("/login");
    }
  };

  const handleRemoveFromFavorites = async (platformId) => {
    if (store.token) {
      await actions.removePlatformFromFavorites(platformId);
    }
  };

  const isPlatformInFavorites = (platformId) => {
    if (store.favoritesPlatforms) {
      return store.favoritesPlatforms.filter(platform => platform.id == platformId).length;
    }
    return false;
  };







  return (
    <div className="card">
      <img src={platform.image_background} className="card-img-top" alt={platform.name} />
      <div className="card-body">
        <h5 className="card-title">{platform.name}</h5>
        <p className="card-text">Popular Items: {platform.games_count}</p>
        <p className="card-text">Since: {platform.year_start}</p>
        <Link to={"/platformDetails/" + platform.id}>
          <button type="button" className="btn btn-outline mt-3 me-2 learnMoreBtn">See more! </button>
        </Link>
        {isPlatformInFavorites(platform.id) ? (
          <button className="btn btn-outline-secondary" onClick={() => handleRemoveFromFavorites(platform.id)}>
            Remove from Favorites
          </button>
        ) : (
          <button className="btn btn-outline-secondary" onClick={() => handleAddToFavorites(platform)}>
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
};