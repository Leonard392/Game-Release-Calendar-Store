const getState = ({ getStore, getActions, setStore }) => {
	const KEY_API = "36254294ed4b46ffbb02d560b2558d65";

	return {
		store: {
			message: null,
			gamesGenre: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			getGamesList: ""
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getGames: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch("https://api.rawg.io/api/games?key=" + KEY_API)
					const data = await resp.json()
					setStore({ getGamesList: data.results.name })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},


		}
	};
};

export default getState;