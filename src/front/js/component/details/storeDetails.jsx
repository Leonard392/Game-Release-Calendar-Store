import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/details.css";


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

    return (
        <div className="details">
            {storeDetails ? (
                <>
                    <div className="details-left">
                        {/* Imagen del creador */}
                        <img src={storeDetails.image_background} alt={storeDetails.name} className="details-img" />
                    </div>
                    <div className="details-right">
                        {/* Detalles de la plataforma */}
                        <h1><strong>STORE</strong> DETAILS</h1>
                        <h2>{storeDetails.name}</h2>
                        <p><strong><i class="fa-solid fa-gamepad"></i> Games Count:</strong> {storeDetails.games_count}</p>
                        <p><strong><i class="fa-solid fa-globe"></i> You can find us:</strong> {storeDetails.domain}</p>
                    </div>
                </>
            ) : (
                <p>Loading platform details...</p>
            )}
        </div>
    );
};