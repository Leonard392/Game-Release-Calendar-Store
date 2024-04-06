export const getState = ({ getStore, getActions, setStore }) => {
	const KEY_API = "36254294ed4b46ffbb02d560b2558d65";

	return {
		store: {
			getGamesList: [],
		},
		actions: {
			fetchGamesForYear: async () => {
				try {
				  const year = 2023;
			  
				  // Fetching games for the year 2023 from the RAWG.io API
				  const response = await fetch(`https://api.rawg.io/api/games?dates=${year}-01-01,${year}-12-31&key=${KEY_API}`);
				  const data = await response.json();
			  
				  console.log(data); // Log API response
			  
				  setStore({ getGamesList: data.results });
				} catch (error) {
				  console.error('Error fetching games', error);
				}
			  }
		}
	};
};

export default getState;