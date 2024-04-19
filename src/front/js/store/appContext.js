import React, { useState, useEffect } from "react";
import { Context } from "./Context";
import { getState } from "./flux";

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [token, setToken] = useState(localStorage.getItem('token'));
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					}),
				token: token
			})
		);
	
		useEffect(() => {
			localStorage.setItem('token', token);
		}, [token]);
	
		useEffect(() => {
			if (token) {
				state.actions.fetchBestGames2024();
				state.actions.fetchBestGames2023();
				state.actions.fetchBestClassics();
				state.actions.fetchBestOfAllTimes();
				state.actions.fetchUpcomingReleases();
				state.actions.fetchTopCreators();
				state.actions.fetchPlatforms();
				state.actions.fetchStores();
			}
		}, [token]);
	
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;