import React , { useContext } from "react";

export const StoreCard = ({ store }) => {
    return (
      <div className="card">
        <img src={store.image_background} className="card-img-top" alt={store.name} />
        <div className="card-body">
          <h5 className="card-title">{store.name}</h5>
          <p className="card-text">Popular Items: {store.games_count}</p>
          <button className="btn btn-primary">
          Favorite
          </button>
        </div>
      </div>
    );
  };