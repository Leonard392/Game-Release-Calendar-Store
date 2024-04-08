import React, { useContext, useEffect } from "react";
import { Context } from "../../store/Context.js";
import { Navbar } from "../../component/navbar.jsx";
import { StoreCard } from "../../component/cards/storeCard.jsx";

export const Stores = () => {
  const { store, actions } = useContext(Context);

  return (
        <div className="games-body">
            <Navbar/>
            <div className="main-component">
                <h1>Stores</h1>
                <div className="row">
                    {store.Stores.map((store) => (
                    <div key={store.id} className="col-lg-3 col-md-6 col-sm-12">
                        <StoreCard store={store} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
  );
};