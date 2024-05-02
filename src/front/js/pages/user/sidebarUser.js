import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/genres.css";

export const SidebarUser = () => {

    return(
    <div class="sidebar-games d-flex flex-column flex-shrink-0 p-3 side">
          <ul class="nav nav-pills flex-column mb-auto">
          <li className="nav-item sidebar-li">
              <Link to="/genres/action" className="sidebar-link">
                <p className="sidebar-text">WISH LIST</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/adventure" className="sidebar-link">
                <p className="sidebar-text">MY PLATFORMS</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/arcade" className="sidebar-link">
                <p className="sidebar-text">FAVORITE CREATORS</p>
              </Link>
            </li>
          </ul>
    </div>
    )
}