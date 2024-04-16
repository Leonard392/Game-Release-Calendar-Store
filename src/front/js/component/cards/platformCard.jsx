import React , { useContext } from "react";
import { Link } from "react-router-dom";

export const Platformcard = ({ platform }) => {
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
          <button className="btn btn-primary">
          Favorite
          </button>
        </div>
      </div>
    );
  };