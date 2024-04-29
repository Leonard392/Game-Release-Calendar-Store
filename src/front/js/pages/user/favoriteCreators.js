import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../store/Context";
import { CreatorCard } from "../../component/cards/creatorCard.jsx";


export const FavoriteCreators = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchUserFavoriteCreators()
    }, []);

    return (
        <div>
            <h2>Favorite Creators</h2>
            <div className="row">
                {store.favoritesCreators.map(creator => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={creator.id}>
                        <CreatorCard creator={creator} />
                    </div>
                ))}
            </div>
        </div>
    );
};