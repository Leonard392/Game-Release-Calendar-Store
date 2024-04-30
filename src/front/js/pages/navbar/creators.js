import React, { useContext, useEffect } from "react";
import { Context } from "../../store/Context.js";
import { CreatorCard } from "../../component/cards/creatorCard.jsx"
import "../../../styles/others.css"

export const Creators = () => {
  const { store, actions } = useContext(Context);

  return (
        <div className="others-body">
            <div className="main-component">
                <h1>Top Creators</h1>
                <div className="row">
                    {store.topCreators.map((creator) => (
                    <div key={creator.id} className="col-lg-3 col-md-6 col-sm-12 others-cards">
                        <CreatorCard creator={creator} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
  );
};