import React, { useContext, useEffect } from "react";
import { Context } from "../store/Context";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar.jsx";
import GameCard from "../component/gameCard.jsx";
import { Action } from "../component/genres/action.js";
import "../../styles/games.css";

export const Games = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchBestGames2024(); // Fetch games when component mounts
  }, []);

  return (
    <div className="games-body">
        <Navbar/>
        <div className="row">
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light side col-lg-2 col-md-1 col-sm-1">
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <Link to="/">
                <p>ACTION</p>
              </Link>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
              Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
              Orders
              </a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
              Products
              </a>
            </li>
            <li>
              <a href="#" class="nav-link link-dark">
              Customers
              </a>
            </li>
          </ul>
        </div>
      <Action/>
      </div>
    </div>
  );
};
