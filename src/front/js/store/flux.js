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
					
					year = "2024";
					month="03";
					// fetching data from the backend
					const resp = await fetch("https://api.rawg.io/api/games?dates=" + year  + "-" + (month + 1) + "-01," + year + "-" + (month + 1) + "-30&key=" + KEY_API)
					.then(response => response.json())
					.then(data => {
						const games = data.results.map(item =>
							fetch(item.url)
							.then(response => response.json())
							.then(characterDetails => ({
								name: characterDetails.result.properties.name
							}))
						);
						
						Promise.all(games)
						.then(updatedCharactersList => {
						setStore({ getGamesList: updatedCharactersList });
						})
						.catch(err => console.error(err));
					});
					
					// don't forget to return something, that is how the async resolves

				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},


		}
	};
};

export default getState;