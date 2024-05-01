import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/details.css";

export const PlatformDetails = () => {
    const params = useParams();
    const KEY_API = "35e73496eb2c49af83d0f3f7074b875e";
    const [platformDetails, setPlatformDetails] = useState(null);

    let url = `https://api.rawg.io/api/platforms/${params.id}?key=${KEY_API}`;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPlatformDetails(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="details">
            {platformDetails ? (
                <>
                    <div className="details-left">
                        {/* Imagen del creador */}
                        <img src={platformDetails.image_background} alt={platformDetails.name} className="details-img" />
                    </div>
                    <div className="details-right">
                        {/* Detalles de la plataforma */}
                        <h1><strong>PLATFORM</strong> DETAILS</h1>
                        <h2>{platformDetails.name}</h2>
                        <p><strong><i class="fa-solid fa-gamepad"></i> Games Count:</strong> {platformDetails.games_count}</p>
                    </div>
                </>
            ) : (
                <p>Loading platform details...</p>
            )}
        </div>
    );
};