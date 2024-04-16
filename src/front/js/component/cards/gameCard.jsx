import React from "react";
import { Link } from "react-router-dom";

export const GameCard = ({ game }) => {
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
            <button className="btn btn-outline-secondary">Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};