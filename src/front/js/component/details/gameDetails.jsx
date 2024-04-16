import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const GameDetails = ({ gameId }) => {
    const params = useParams()
    const KEY_API = "36254294ed4b46ffbb02d560b2558d65";
    const [gameDetails, setGameDetails] = useState(null);

    let url = 'https://api.rawg.io/api/games/' + params.id + "?key=" + KEY_API; 

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setGameDetails(data))
            .catch(err => err)
    }, []);

    const backgroundStyle = {
        backgroundImage: gameDetails ? `url(${gameDetails.background_image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
    };

    return (
        <div style={backgroundStyle}>
            {gameDetails ? (
                <div>
                    <h2>{gameDetails.name}</h2>
                    <p>{gameDetails.description}</p>
                    {/* Render more details as needed */}
                </div>
            ) : (
                <p>Loading game details...</p>
            )}
        </div>
    );
};