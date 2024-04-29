import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../store/Context";
import { Platformcard } from "../../component/cards/platformCard.jsx";


export const FavoritePlatforms = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchUserFavoritePlatforms()
    }, []);

    return (
        <div>
            <h2>My Stores</h2>
            <div className="row">
                {store.favoritesPlatforms.map(platform => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={platform.id}>
                        <Platformcard platform={platform} />
                    </div>
                ))}
            </div>
        </div>
    );
};