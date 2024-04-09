import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/Context";

export const CreatorDetails = ({ creatorId }) => {
    const { store, actions } = useContext(Context);
    const [creatorDetails, setCreatorDetails] = useState(null);

    useEffect(() => {
        // Fetch creator details when component mounts
        if (creatorId) {
            actions.fetchCreatorDetails(creatorId);
        }
    }, [creatorId, actions]);

    useEffect(() => {
        // Set creator details from store when it updates
        if (store.creatorDetails) {
            setCreatorDetails(store.creatorDetails);
        }
    }, [store.creatorDetails]);

    if (!creatorDetails) {
        return <div>Loading...</div>; // Render loading indicator while fetching data
    }

    return (
        <div className="creator-details">
            <h2>{creatorDetails.name}</h2>
            <p>Games Count: {creatorDetails.gamesCount}</p>
            <p>Rating: {creatorDetails.rating}</p>
            <p>Games Created:</p>
            <ul>
                {creatorDetails.games.map((game) => (
                    <li key={game.id}>{game.title}</li>
                ))}
            </ul>
            {/* Add favorite button and other details as needed */}
        </div>
    );
};