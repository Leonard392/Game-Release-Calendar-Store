import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/genres.css"

export const Sidebar = () => {

    return(
    <div class="sidebar-games d-flex flex-column flex-shrink-0 p-3 side">
          <ul class="nav nav-pills flex-column mb-auto">
          <li className="nav-item sidebar-li">
              <Link to="/genres/action" className="sidebar-link">
                <p className="sidebar-text">ACTION</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/adventure" className="sidebar-link">
                <p className="sidebar-text">ADVENTURE</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/arcade" className="sidebar-link">
                <p className="sidebar-text">ARCADE</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/casual" className="sidebar-link">
                <p className="sidebar-text">CASUAL</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/fighting" className="sidebar-link">
                <p className="sidebar-text">FIGHTING</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/indie" className="sidebar-link">
                <p className="sidebar-text">INDIE</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/puzzle" className="sidebar-link">
                <p className="sidebar-text">PUZZLE</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/racing" className="sidebar-link">
                <p className="sidebar-text">RACING</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/shooter" className="sidebar-link">
                <p className="sidebar-text">SHOOTER</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/simulation" className="sidebar-link">
                <p className="sidebar-text">SIMULATION</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/sports" className="sidebar-link">
                <p className="sidebar-text">SPORTS</p>
              </Link>
            </li>
            <li className="nav-item sidebar-li">
              <Link to="/genres/strategy" className="sidebar-link">
                <p className="sidebar-text">STRATEGY</p>
              </Link>
            </li>
          </ul>
    </div>
    )
}