import React, { useState, useEffect } from "react";
import { Context } from "./Context";
import { getState } from "./flux"; // Import the modified getState function

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			// Fetch games when component mounts
			state.actions.fetchBestGames2024();
			state.actions.fetchBestGames2023();
			state.actions.fetchBestClassics();
			state.actions.fetchBestOfAllTimes();
			state.actions.fetchUpcomingReleases();
			state.actions.fetchActionGames();
			state.actions.fetchIndieGames();
			state.actions.fetchAdventureGames();
			state.actions.fetchStrategyGames();
			state.actions.fetchShooterGames();
			state.actions.fetchCasualGames();
			state.actions.fetchSimulationGames();
			state.actions.fetchPuzzleGames();
			state.actions.fetchArcadeGames();
			state.actions.fetchRacingGames();
			state.actions.fetchSportsGames();
			state.actions.fetchFightingGames();
		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;