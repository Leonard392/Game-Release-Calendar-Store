const getState = ({ getStore, getActions, setStore }) => {
	const KEY_API = "36254294ed4b46ffbb02d560b2558d65";
	let currentMonth = new Date().getMonth();
	let currentYear = new Date().getFullYear();

	return {
		store: {
			getGamesList: "",
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			fetchGamesForMonth: async (year, month) => {
				try{
					// Function to fetch games for a given year and month from Api
					
					
					// fetching data from the backend
					const resp = await fetch("https://api.rawg.io/api/games?dates=" + year  + "-" + (month + 1) + "-01," + year + "-" + (month + 1) + "-30&key=" + KEY_API)
					const data = await resp.json()
					setStore({ getGamesList: data.results})
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