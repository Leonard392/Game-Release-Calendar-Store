import React from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../../store/Context";
import { useNavigate } from 'react-router-dom';

export const GameCard = ({ game }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
  
    const handleAddToFavorites = (gameId) => {
        if (store.token) {
            actions.addGameToFavorites(gameId);
        } else {
            // Si el usuario no está autenticado, redirige a la página de inicio de sesión
           navigate("/login")
        }
    };
  
    const isGameInFavorites = (gameId) => {
        if (store.favoritesGames) {
            return store.favoritesGames.includes(gameId);
        }
        return false;
    };
  
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-12">
                    <img src={game.background_image} className="card-img" alt={game.name} />
                </div>
                <div className="col-md-12">
                    <div className="card-body">
                        <h5 className="card-title">{game.name}</h5>
                        <p className="card-text">Released Date: {game.released}</p>
                        <p className="card-text">Rating: {game.rating}</p>
                        <Link to={"/gameDetails/" + game.id}>
                            <button type="button" className="btn btn-outline mt-3 me-2 learnMoreBtn">See more! </button>
                        </Link>
                        <button className="btn btn-outline-secondary" onClick={() => handleAddToFavorites(game.id)}>
                            {isGameInFavorites(game.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
  };