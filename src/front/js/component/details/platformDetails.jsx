import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const PlatformDetails = ({ gameId }) => {
    const params = useParams()
    const KEY_API = "36254294ed4b46ffbb02d560b2558d65";
    const [platformDetails, setPlatformDetails] = useState(null);

    let url = 'https://api.rawg.io/api/platforms/' + params.id + "?key=" + KEY_API; 

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPlatformDetails(data))
            .catch(err => err)
    }, []);

    const backgroundStyle = {
        backgroundImage: platformDetails ? `url(${platformDetails.image_background})` : 'none',
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
            {platformDetails ? (
                <div>
                    <h2>{platformDetails.name}</h2>
                    <p>{platformDetails.description}</p>
                    {/* Render more details as needed */}
                </div>
            ) : (
                <p>Loading game details...</p>
            )}
        </div>
    );
};