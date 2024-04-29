import { useState } from "react";

export const getState = ({ getStore, getActions, setStore }) => {
	const KEY_API = "35e73496eb2c49af83d0f3f7074b875e";
	const PAGE_SIZE = 20; // Number of games per page
	const [error, setError] = useState(null);

	return {
		store: {
			token: null,
			error: null,
			favoritesGames: [],
			favoritesCreators: [],
			favoritesStores: [],
			favoritesPlatforms: [],
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
			//Fetchs From my API

			signUp: async (username, password) => {
				try {
					const response = await fetch('https://special-potato-x7wxx6965vq2p9qp-3001.app.github.dev/api/signup', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ username, password })
					});

					if (!response.ok) {
						throw new Error('Failed to sign up');
					}

					const data = await response.json();
					const currentToken = data.access_token;
					localStorage.setItem('token', currentToken);
					setStore({ token: currentToken });
					setError(null);
					console.log('store.token:', currentToken); // Accedemos directamente al token actual
					console.log('localStorage.token:', localStorage.getItem('token'));
				} catch (error) {
					console.error('Error signing up:', error);
					setError(error.message);
					throw error;
				}
			},

			login: async (username, password) => {
				try {
					// Realiza una solicitud POST al endpoint de login
					const response = await fetch('https://special-potato-x7wxx6965vq2p9qp-3001.app.github.dev/api/login', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ username, password })
					});

					// Verifica si la solicitud fue exitosa
					if (!response.ok) {
						throw new Error('Failed to log in.');
					}

					const data = await response.json();
					const currentToken = data.access_token;
					localStorage.setItem('token', currentToken);
					setStore({ token: currentToken });
					setError(null);
					console.log('store.token:', currentToken); // Accedemos directamente al token actual
					console.log('localStorage.token:', localStorage.getItem('token'));
				} catch (error) {
					console.error('Error logging in:', error);
					setError(error.message);
					throw error;
				}
			},

			logout: () => {
				console.log("Logged Out");
				localStorage.removeItem('token');
				setStore({ token: null });
				console.log('store.token:', null); // Accedemos directamente al token actual
				console.log('localStorage.token:', localStorage.getItem('token'));
			},


			addGameToFavorites: async (game) => {
				try {
					const response = await fetch("https://special-potato-x7wxx6965vq2p9qp-3001.app.github.dev/api/favorites/games", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${localStorage.getItem("token")}`
						},
						body: JSON.stringify({ game_id: game.id })
					});
					if (!response.ok) {
						throw new Error("Failed to add game to favorites");
					}
					// Manejar éxito
					const updatedFavorites = [...getStore().favoritesGames, game];
					setStore({ favoritesGames: updatedFavorites });
				} catch (error) {
					console.error("Error adding game to favorites:", error);
				}
			},

			removeGameFromFavorites: async (gameId) => {
				try {
					const token = localStorage.getItem('token');
					const response = await fetch(`https://special-potato-x7wxx6965vq2p9qp-3001.app.github.dev/api/favorites/games/${gameId}`, {
						method: 'DELETE',
						headers: {
							'Authorization': `Bearer ${token}`
						}
					});

					if (!response.ok) {
						throw new Error('Failed to remove game from favorites');
					}

					console.log('Game removed from favorites successfully');
					// Puedes hacer algo aquí, como actualizar el estado para reflejar el cambio
					const updatedFavorites = getStore().favoritesGames.filter(favoriteId => favoriteId.id !== gameId);
					setStore({ favoritesGames: updatedFavorites });
				} catch (error) {
					console.error('Error removing game from favorites:', error);
					throw error;
				}
			},
			fetchUserFavoriteGames: async () => {
				try {
					const { token } = getStore(); // Obtener el token del store
					if (!token) {
						throw new Error("User not authenticated"); // Lanzar un error si el usuario no está autenticado
					}

					// Define la función fetchGameData aquí
					const fetchGameData = async (gameId) => {
						const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${KEY_API}`);
						const gameData = await response.json();
						return gameData;
					};

					const response = await fetch("https://special-potato-x7wxx6965vq2p9qp-3001.app.github.dev/api/favorites/games", {
						headers: {
							Authorization: `Bearer ${token}`
						}
					});
					if (response.ok) {
						const data = await response.json();
						const gamesData = await Promise.all(data.map(id => fetchGameData(id)));
						
						const listaDeJuegosFavoritos = [...getStore().favoritesGames, ...gamesData];

						let unicos = [];

						// Declare an empty object
						let objetonUnicos = {};

						// Loop for the array elements
						for (let i in listaDeJuegosFavoritos) {
							console.log(i);
							// Extract the title
							let objTitle = listaDeJuegosFavoritos[i]['id'];
							console.log(objTitle);

							// Use the title as the index
							objetonUnicos[objTitle] = listaDeJuegosFavoritos[i];
							console.log(listaDeJuegosFavoritos[i]);
						}

						// Loop to push unique object into array
						for (let i in objetonUnicos) {
							unicos.push(objetonUnicos[i]);
							console.log(unicos);
						}

						setStore({

							favoritesGames: unicos
						});
					} else {
						throw new Error("Failed to fetch user favorites");
					}
				} catch (error) {
					console.error("Error fetching user favorites:", error);
				}
			},




			//Fetchs from Rawg.io API
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
