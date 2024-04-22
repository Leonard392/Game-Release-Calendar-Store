import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const StoreDetails = ({ gameId }) => {
    const params = useParams()
    const KEY_API = "35e73496eb2c49af83d0f3f7074b875e";
    const [storeDetails, setStoreDetails] = useState(null);

    let url = 'https://api.rawg.io/api/stores/' + params.id + "?key=" + KEY_API; 

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setStoreDetails(data))
            .catch(err => err)
    }, []);

    const backgroundStyle = {
        backgroundImage: storeDetails ? `url(${storeDetails.image_background})` : 'none',
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
            {storeDetails ? (
                <div>
                    <h2>{storeDetails.name}</h2>
                    <p>{storeDetails.description}</p>
                    {/* Render more details as needed */}
                </div>
            ) : (
                <p>Loading game details...</p>
            )}
        </div>
    );
};