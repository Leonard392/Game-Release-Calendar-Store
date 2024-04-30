import React , { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../styles/card.css"

export const StoreCard = ({ store }) => {
    return (
      <div className="card">
        <img src={store.image_background} className="card-img-top" alt={store.name} />
        <div className="card-body">
          <h5 className="card-title">{store.name}</h5>
          <p className="card-text">Popular Items: {store.games_count}</p>
          <Link to={"/storeDetails/" + store.id}>
              <button type="button" className="btn btn-outline mt-3 me-2 learnMoreBtn">See more! </button>
          </Link>
        </div>
      </div>
    );
  };