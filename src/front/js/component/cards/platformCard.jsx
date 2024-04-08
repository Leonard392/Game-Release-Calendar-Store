import React , { useContext } from "react";

export const Platformcard = ({ platform }) => {
    return (
      <div className="card">
        <img src={platform.image_background} className="card-img-top" alt={platform.name} />
        <div className="card-body">
          <h5 className="card-title">{platform.name}</h5>
          <p className="card-text">Popular Items: {platform.games_count}</p>
          <p className="card-text">Since: {platform.year_start}</p>
          <button className="btn btn-primary">
          Favorite
          </button>
        </div>
      </div>
    );
  };