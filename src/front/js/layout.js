import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Creators } from "./pages/navbar/creators.js";
import { Platforms } from "./pages/navbar/platforms.js";
import { Stores } from "./pages/navbar/stores.js";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Profile } from "./pages/profile.js";
import injectContext from "./store/appContext";

//user
import { Favorites } from "./pages/user/favorites.js";


//import genres view
import { Action } from "./pages/genres/action.js";
import { Adventure} from "./pages/genres/adventure.js"
import { Arcade } from "./pages/genres/arcade.js";
import { Casual } from "./pages/genres/casual.js";
import { Fighting } from "./pages/genres/fighting.js";
import { Puzzle } from "./pages/genres/puzzle.js";
import { Indie } from "./pages/genres/indie.js";
import { Racing } from "./pages/genres/racing.js";
import { Shooter } from "./pages/genres/shooter.js";
import { Simulation } from "./pages/genres/simulation.js";
import { Sports } from "./pages/genres/sports.js";
import { Strategy } from "./pages/genres/strategy.js";

//import details
import { GameDetails } from "./component/details/gameDetails.jsx"; 
import { CreatorDetails } from "./component/details/creatorDetails.jsx";
import { StoreDetails } from "./component/details/storeDetails.jsx";
import { PlatformDetails } from "./component/details/platformDetails.jsx";


import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar/>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Creators />} path="/creators" />
                        <Route element={<Platforms />} path="/platforms" />
                        <Route element={<Stores />} path="/stores" />
                        <Route element={<Action />} path="/genres/action" />
                        <Route element={<Adventure />} path="/genres/adventure" />
                        <Route element={<Arcade />} path="/genres/arcade" />
                        <Route element={<Casual />} path="/genres/casual" />
                        <Route element={<Fighting />} path="/genres/fighting" />
                        <Route element={<Indie />} path="/genres/indie" />
                        <Route element={<Puzzle />} path="/genres/puzzle" />
                        <Route element={<Racing />} path="/genres/racing" />
                        <Route element={<Shooter />} path="/genres/shooter" />
                        <Route element={<Simulation />} path="/genres/simulation" />
                        <Route element={<Sports />} path="/genres/sports" />
                        <Route element={<Strategy />} path="/genres/strategy" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Favorites />} path="/favorites" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<GameDetails />} path="/gameDetails/:id" />
                        <Route element={<CreatorDetails />} path="/creatorDetails/:id" />
                        <Route element={<StoreDetails />} path="/storeDetails/:id" />
                        <Route element={<PlatformDetails />} path="/platformDetails/:id" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
