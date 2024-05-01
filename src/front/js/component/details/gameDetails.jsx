import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/details.css";

export const GameDetails = ({ gameId }) => {
    const params = useParams();
    const KEY_API = "35e73496eb2c49af83d0f3f7074b875e";
    const [gameDetails, setGameDetails] = useState(null);

    let url = 'https://api.rawg.io/api/games/' + params.id + "?key=" + KEY_API; 

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setGameDetails(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div  className="details">
            {gameDetails ? (
                <>
                    <div className="details-left">
                        {/* Imagen del juego */}
                        <img src={gameDetails.background_image} alt={gameDetails.name} className="details-img"/>
                    </div>
                    <div className="details-right">
                        {/* Detalles del juego */}
                        <h1><span>GAME</span> DETAILS</h1>
                        <h2 className="details-title">{gameDetails.name}</h2>
                        <p><strong><i class="fa-solid fa-clock"></i>  Release Date:</strong> {gameDetails.released}</p>
                        <p><strong><i class="fa-solid fa-desktop"></i> Platforms:</strong> {gameDetails.platforms.map(platform => platform.platform.name).join(', ')}</p>
                        <p><strong><i class="fa-solid fa-gear"></i> Developers:</strong> {gameDetails.developers.map(developer => developer.name).join(', ')}</p>
                        <p><strong><i class="fa-solid fa-gamepad"></i> Genres:</strong> {gameDetails.genres.map(genre => genre.name).join(', ')}</p>
                        <p><strong><i class="fa-solid fa-globe"></i> Publisher:</strong> {gameDetails.publishers.map(publisher => publisher.name).join(', ')}</p>
                        
                        {/* Puedes agregar más detalles del juego según sea necesario */}
                    </div>
                </>
            ) : (
                <p>Loading game details...</p>
            )}
        </div>
    );
};