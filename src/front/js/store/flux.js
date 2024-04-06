export const getState = ({ getStore, getActions, setStore }) => {
	const KEY_API = "36254294ed4b46ffbb02d560b2558d65";
  
	return {
	  store: {
		getGamesList: [],
	  },
	  actions: {
		fetchGamesForYear: async () => {
		  try {
			// Fetching games for the year 2023 from the RAWG.io API
			const response = await fetch(`https://api.rawg.io/api/games?dates=2023-01-01,2023-12-31&key=${KEY_API}`);
			const data = await response.json();
  
			// Filter the fetched games to include only those with a background image
			const filteredGames = data.results.filter(game => game.background_image);
  
			setStore({ getGamesList: filteredGames });
		  } catch (error) {
			console.error('Error fetching games', error);
		  }
		}
	  }
	};
  };
  
  export default getState;