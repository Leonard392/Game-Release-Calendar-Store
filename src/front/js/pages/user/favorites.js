import React, { useState, useEffect } from "react";
import { SidebarUser } from "./sidebarUser";
import { FavoriteGames } from "./favoriteGames";
import { FavoriteCreators } from "./favoriteCreators";
import { FavoritePlatforms } from "./favoritePlatforms";
import "../../../styles/user.css"


export const Favorites = () => {

  return (
      <div className="user-content">
        <SidebarUser/>
        <FavoriteGames/>
        <FavoritePlatforms/>
        <FavoriteCreators/>
      </div>
  );
};