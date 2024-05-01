import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/details.css";

export const CreatorDetails = () => {
    const params = useParams();
    const KEY_API = "35e73496eb2c49af83d0f3f7074b875e";
    const [creatorDetails, setCreatorDetails] = useState(null);

    let url = `https://api.rawg.io/api/creators/${params.id}?key=${KEY_API}`;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCreatorDetails(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="details">
            {creatorDetails ? (
                <>
                    <div className="details-left">
                        {/* Imagen del creador */}
                        <img src={creatorDetails.image_background} alt={creatorDetails.name} className="details-img" />
                    </div>
                    <div className="details-right">
                        {/* Detalles del creador */}
                        <h1><span>CREATOR</span> DETAILS</h1>
                        <h2 className="details-title">{creatorDetails.name}</h2>
                        <p><strong>Description:</strong> {creatorDetails.description}</p>
                        <p><strong><i class="fa-solid fa-gamepad"></i> Games Created:</strong> {creatorDetails.games_count}</p>
                    </div>
                </>
            ) : (
                <p>Loading creator details...</p>
            )}
        </div>
    );
};