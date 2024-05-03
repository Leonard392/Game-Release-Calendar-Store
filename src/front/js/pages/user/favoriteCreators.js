import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../store/Context";
import { CreatorCard } from "../../component/cards/creatorCard.jsx";
import { SidebarUser } from "./sidebarUser.js";
import "../../../styles/genres.css";


export const FavoriteCreators = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchUserFavoriteCreators()
    }, []);

    return (
        
            <div className="games-body">
                <div className="row">
                    <SidebarUser/>
                    <div className="games-list">
                        <h1><span>MY</span> CREATORS</h1>
                        <div className="row small-games-list">
                        {store.favoritesCreators.map(creator => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={creator.id}>
                        <CreatorCard creator={creator} />
                    </div>
                ))}
                        </div>
                    </div>
                </div>
            </div>
        )
};