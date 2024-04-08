import React , { useContext } from "react";

export const CreatorCard = ({ creator }) => {
    return (
      <div className="card">
        <img src={creator.image} className="card-img-top" alt={creator.name} />
        <div className="card-body">
          <h5 className="card-title">{creator.name}</h5>
          <p className="card-text">Rating: {creator.rating}</p>
          <p className="card-text">Games Created: {creator.games_count}</p>
          <button className="btn btn-primary">
          Favorite
          </button>
        </div>
      </div>
    );
  };