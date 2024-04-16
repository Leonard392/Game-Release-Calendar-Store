import React , { useContext } from "react";
import { Link } from "react-router-dom";

export const CreatorCard = ({ creator }) => {
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
          <button className="btn btn-primary">
          Favorite
          </button>
        </div>
      </div>
    );
  };