import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return(
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light side col-lg-2 col-md-1 col-sm-1">
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <Link to="/genres/action">
                <p>ACTION</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/genres/adventure">
                <p>ADVENTURE</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/genres/arcade">
                <p>ARCADE</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/genres/casual">
                <p>CASUAL</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/genres/fighting">
                <p>FIGHTING</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/genres/indie">
                <p>INDIE</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/genres/puzzle">
                <p>PUZZLE</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/genres/racing">
                <p>RACING</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/genres/shooter">
                <p>SHOOTER</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/genres/simulation">
                <p>SIMULATION</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/genres/sports">
                <p>SPORTS</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/genres/strategy">
                <p>STRATEGY</p>
              </Link>
            </li>
          </ul>
    </div>
    )
}