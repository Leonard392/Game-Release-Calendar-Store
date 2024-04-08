import React, { useContext, useEffect } from "react";
import { Context } from "../../store/Context.js";
import { Navbar } from "../../component/navbar.jsx";
import { Platformcard } from "../../component/cards/platformCard.jsx";

export const Platforms = () => {
  const { store, actions } = useContext(Context);

  return (
        <div className="games-body">
            <Navbar/>
            <div className="main-component">
                <h1>Platforms</h1>
                <div className="row">
                    {store.Platforms.map((platform) => (
                    <div key={platform.id} className="col-lg-3 col-md-6 col-sm-12">
                        <Platformcard platform={platform} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
  );
};