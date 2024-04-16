import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const CreatorDetails = ({ gameId }) => {
    const params = useParams()
    const KEY_API = "36254294ed4b46ffbb02d560b2558d65";
    const [creatorDetails, setCreatorDetails] = useState(null);

    let url = 'https://api.rawg.io/api/creators/' + params.id + "?key=" + KEY_API; 

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCreatorDetails(data))
            .catch(err => err)
    }, []);

    const backgroundStyle = {
        backgroundImage: creatorDetails ? `url(${creatorDetails.image_background})` : 'none',
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
            {creatorDetails ? (
                <div>
                    <h2>{creatorDetails.name}</h2>
                    <p>{creatorDetails.description}</p>
                    {/* Render more details as needed */}
                </div>
            ) : (
                <p>Loading game details...</p>
            )}
        </div>
    );
};