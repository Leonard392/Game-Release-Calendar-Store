import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../store/Context";
import { Platformcard } from "../../component/cards/platformCard.jsx";
import { SidebarUser } from "./sidebarUser.js";
import "../../../styles/genres.css";


export const FavoritePlatforms = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchUserFavoritePlatforms()
    }, []);

    return (

        <div className="games-body">
            <div className="row">
                <SidebarUser />
                <div className="games-list">
                    <h1><span>MY</span> PLATFORMS</h1>
                    <div className="row small-games-list">
                        {store.favoritesPlatforms.map(platform => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={platform.id}>
                                <Platformcard platform={platform} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};