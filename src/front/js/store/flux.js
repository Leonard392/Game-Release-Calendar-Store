export const getState = ({ getStore, getActions, setStore }) => {
	const KEY_API = "36254294ed4b46ffbb02d560b2558d65";
	const PAGE_SIZE = 20; // Number of games per page
  
	return {
	  store: {
		token: null,
		bestGames2024: [],
		bestGames2023: [],
		bestClassics: [],
		bestOfAllTimes: [],
		upcomingReleases: [],
		actionGames: [],
      	indieGames: [],
      	adventureGames: [],
      	strategyGames: [],
      	shooterGames: [],
      	casualGames: [],
      	simulationGames: [],
      	puzzleGames: [],
      	arcadeGames: [],
      	racingGames: [],
      	sportsGames: [],
      	fightingGames: [],
		topCreators: [],
		Platforms: [],
		Stores: []
	  },
	  actions: {
		syncTokenFromSessionStore: () => {
			const token = sessionStorage.getItem("token");
			console.log("Application is loaded synching the session storage token.")
			if (token && token != "" && token!= undefined ) setStore({ token: token});
		},
		signup: async (email, password) =>{
			const opts = {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					"email": email,
					"password": password
				})
			};
			try{
				const resp = await fetch('https://automatic-halibut-9r9wwvqrvwx2x6r-3001.app.github.dev/api/token', opts)
				if(resp.status !== 200){
				alert("There has been an error.");
				return false
			}
			
			const data = await resp.json();
			console.log("this came from the backend", data);
			sessionStorage.setItem("token", data.access_token);
			setStore({token: data.access_token})
			return true
			}
		catch(error){
			console.log("there has been an error", error)
		}
		},
		fetchBestGames2024: async () => {
		  try {
			// Fetch best games of 2024 from the API
			const response = await fetch(`https://api.rawg.io/api/games?dates=2024-01-01,2024-12-31&ordering=-added&page_size=${PAGE_SIZE}&key=${KEY_API}`);
			const data = await response.json();
			setStore({ bestGames2024: data.results });
		  } catch (error) {
			console.error('Error fetching best games of 2024', error);
		  }
		},
		fetchBestGames2023: async () => {
		  try {
			// Fetch best games of 2023 from the API
			const response = await fetch(`https://api.rawg.io/api/games?dates=2023-01-01,2023-12-31&ordering=-added&page_size=${PAGE_SIZE}&key=${KEY_API}`);
			const data = await response.json();
			setStore({ bestGames2023: data.results });
		  } catch (error) {
			console.error('Error fetching best games of 2023', error);
		  }
		},
		fetchBestClassics: async () => {
		  try {
			// Fetch best classic games from the API
			const response = await fetch(`https://api.rawg.io/api/games?genres=classic&page_size=${PAGE_SIZE}&key=${KEY_API}`);
			const data = await response.json();
			setStore({ bestClassics: data.results });
		  } catch (error) {
			console.error('Error fetching best classic games', error);
		  }
		},
		fetchBestOfAllTimes: async () => {
		  try {
			// Fetch best games of all times from the API
			const response = await fetch(`https://api.rawg.io/api/games?ordering=-rating&page_size=${PAGE_SIZE}&key=${KEY_API}`);
			const data = await response.json();
			setStore({ bestOfAllTimes: data.results });
		  } catch (error) {
			console.error('Error fetching best games of all times', error);
		  }
		},
		fetchUpcomingReleases: async () => {
			try {
			  const today = new Date();
			  const nextWeek = new Date();
			  nextWeek.setDate(nextWeek.getDate() + 7);
	
			  // Format dates as YYYY-MM-DD strings
			  const todayString = today.toISOString().slice(0, 10);
			  const nextWeekString = nextWeek.toISOString().slice(0, 10);
	
			  // Fetch games scheduled for release in the next week
			  const response = await fetch(`https://api.rawg.io/api/games?dates=${todayString},${nextWeekString}&ordering=-added&page_size=${PAGE_SIZE}&key=${KEY_API}`);
			  const data = await response.json();
			  setStore({ upcomingReleases: data.results });
			} catch (error) {
			  console.error('Error fetching upcoming releases', error);
			}
		},
		fetchActionGames: async () => {
			try {
			  // Fetch action games from the API
			  const response = await fetch(`https://api.rawg.io/api/games?genres=action&page_size=${PAGE_SIZE}&key=${KEY_API}`);
			  const data = await response.json();
			  setStore({ actionGames: data.results });
			} catch (error) {
			  console.error('Error fetching action games', error);
			}
		  },
		  fetchIndieGames: async () => {
			// Fetch indie games
			try {
				const response = await fetch(`https://api.rawg.io/api/games?genres=indie&page_size=${PAGE_SIZE}&key=${KEY_API}`);
				const data = await response.json();
				setStore({ indieGames: data.results });
			  } catch (error) {
				console.error('Error fetching action games', error);
			  }
		  },
		  fetchAdventureGames: async () => {
			// Fetch adventure games
			try {
				const response = await fetch(`https://api.rawg.io/api/games?genres=adventure&page_size=${PAGE_SIZE}&key=${KEY_API}`);
				const data = await response.json();
				setStore({ adventureGames: data.results });
			  } catch (error) {
				console.error('Error fetching action games', error);
			  }
		  },
		  fetchStrategyGames: async () => {
			// Fetch strategy games
			try {
				const response = await fetch(`https://api.rawg.io/api/games?genres=strategy&page_size=${PAGE_SIZE}&key=${KEY_API}`);
				const data = await response.json();
				setStore({ strategyGames: data.results });
			  } catch (error) {
				console.error('Error fetching action games', error);
			  }
		  },
		  fetchShooterGames: async () => {
			// Fetch shooter games
			try {
				// Fetch action games from the API
				const response = await fetch(`https://api.rawg.io/api/games?genres=shooter&page_size=${PAGE_SIZE}&key=${KEY_API}`);
				const data = await response.json();
				setStore({ shooterGames: data.results });
			  } catch (error) {
				console.error('Error fetching action games', error);
			  }
		  },
		  fetchCasualGames: async () => {
			// Fetch casual games
			try {
				const response = await fetch(`https://api.rawg.io/api/games?genres=casual&page_size=${PAGE_SIZE}&key=${KEY_API}`);
				const data = await response.json();
				setStore({ casualGames: data.results });
			  } catch (error) {
				console.error('Error fetching action games', error);
			  }
		  },
		  fetchSimulationGames: async () => {
			// Fetch simulation games
			try {
				const response = await fetch(`https://api.rawg.io/api/games?genres=simulation&page_size=${PAGE_SIZE}&key=${KEY_API}`);
				const data = await response.json();
				setStore({ simulationGames: data.results });
			  } catch (error) {
				console.error('Error fetching action games', error);
			  }
		  },
		  fetchPuzzleGames: async () => {
			// Fetch puzzle games
			try {
				const response = await fetch(`https://api.rawg.io/api/games?genres=puzzle&page_size=${PAGE_SIZE}&key=${KEY_API}`);
				const data = await response.json();
				setStore({ puzzleGames: data.results });
			  } catch (error) {
				console.error('Error fetching action games', error);
			  }
		  },
		  fetchArcadeGames: async () => {
			// Fetch arcade games
			try {
				const response = await fetch(`https://api.rawg.io/api/games?genres=arcade&page_size=${PAGE_SIZE}&key=${KEY_API}`);
				const data = await response.json();
				setStore({ arcadeGames: data.results });
			  } catch (error) {
				console.error('Error fetching action games', error);
			  }
		  },
		  fetchRacingGames: async () => {
			// Fetch racing games
			try {
				const response = await fetch(`https://api.rawg.io/api/games?genres=racing&page_size=${PAGE_SIZE}&key=${KEY_API}`);
				const data = await response.json();
				setStore({ racingGames: data.results });
			  } catch (error) {
				console.error('Error fetching action games', error);
			  }
		  },
		  fetchSportsGames: async () => {
			// Fetch sports games
			try {
				const response = await fetch(`https://api.rawg.io/api/games?genres=sports&page_size=${PAGE_SIZE}&key=${KEY_API}`);
				const data = await response.json();
				setStore({ sportsGames: data.results });
			  } catch (error) {
				console.error('Error fetching action games', error);
			  }
		  },
		  fetchFightingGames: async () => {
			// Fetch fighting games
			try {
				const response = await fetch(`https://api.rawg.io/api/games?genres=fighting&page_size=${PAGE_SIZE}&key=${KEY_API}`);
				const data = await response.json();
				setStore({ fightingGames: data.results });
			  } catch (error) {
				console.error('Error fetching action games', error);
			  }
		  },
		  fetchTopCreators: async () => {
			try {
			  // Fetch top creators from the API
			  const response = await fetch(`https://api.rawg.io/api/creators?key=${KEY_API}&page_size=${PAGE_SIZE}`);
			  const data = await response.json();
			  setStore({ topCreators: data.results });
			} catch (error) {
			  console.error('Error fetching top creators', error);
			}
	  	  },
		  fetchPlatforms: async () => {
			try {
			  // Fetch top creators from the API
			  const response = await fetch(`https://api.rawg.io/api/platforms?key=${KEY_API}&page_size=${PAGE_SIZE}`);
			  const data = await response.json();
			  setStore({ Platforms: data.results });
			} catch (error) {
			  console.error('Error fetching top creators', error);
			}
		   },
		   fetchStores: async () => {
			try {
			  // Fetch top creators from the API
			  const response = await fetch(`https://api.rawg.io/api/stores?key=${KEY_API}&page_size=${PAGE_SIZE}`);
			  const data = await response.json();
			  setStore({ Stores: data.results });
			} catch (error) {
			  console.error('Error fetching top creators', error);
			}
		   }
		}
	};
  };
  