import React, { useState, useEffect } from "react";
import { FavoriteGames } from "./favoriteGames";
import { FavoriteCreators } from "./favoriteCreators";
import { FavoritePlatforms } from "./favoritePlatforms";


export const Favorites = () => {

  return (
      <div>
        <FavoriteGames/>
        <FavoritePlatforms/>
        <FavoriteCreators/>
      </div>
  );
};