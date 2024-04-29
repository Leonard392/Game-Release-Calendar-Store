import React, { useState, useEffect } from "react";
import { FavoriteGames } from "./favoriteGames";
import { FavoriteCreators } from "./favoriteCreators";


export const Favorites = () => {

  return (
      <div>
        <FavoriteGames/>
        <FavoriteCreators/>
      </div>
  );
};