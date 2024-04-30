import React, { useContext, useEffect } from "react";
import { Context } from "../../store/Context.js";
import { StoreCard } from "../../component/cards/storeCard.jsx";

export const Stores = () => {
  const { store, actions } = useContext(Context);

  return (
        <div className="others-body">
            <div className="main-component">
                <h1>Stores</h1>
                <div className="row">
                    {store.Stores.map((store) => (
                    <div key={store.id} className="col-lg-3 col-md-6 col-sm-12 others-cards">
                        <StoreCard store={store} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
  );
};