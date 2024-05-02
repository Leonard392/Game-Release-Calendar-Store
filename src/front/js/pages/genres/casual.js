import React, { useContext, useEffect, useState, useCallback, useRef } from "react";
import { Context } from "../../store/Context.js";
import { GameCard } from "../../component/cards/gameCard.jsx"
import { Sidebar } from "../../component/sidebar.jsx";
import "../../../styles/genres.css";

export const Casual = () => {
    const { store, actions } = useContext(Context);
    const KEY_API = "35e73496eb2c49af83d0f3f7074b875e";
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
    const observer = useRef();
    const lastGameCard = useCallback(node => {
        if(loading) return ;
        if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting){
            console.log(entries[0]);
            setPage(page => page && page+1)
        }
    }, {threshold: 1})
    if (node) observer.current.observe(node);
    }, [loading])

    const getGames = () =>{
        setLoading(true);
        let url = `https://api.rawg.io/api/games?genres=casual&page=${page}&key=${KEY_API}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.next){
                    setPage(null);
                }
                    setGames((currentGamesList) => [...currentGamesList, ...data.results]);
                    setLoading(false);
            })
            .catch(err => console.error(err)); // Log error to console
    }


    useEffect(() => {
        if (page){
            getGames();
        }
    }, [page]); 

    return (
        <div className="games-body">
            <div className="row">
                <Sidebar/>
                <div className="games-list">
                <h1><span>Casual</span> Games</h1>
                    <div className="row small-games-list">
                        {games.map(game => (
                            <div className="col-lg-4 col-md-6 col-sm-9" key={game.id}>
                                <GameCard game={game} fowardRef={lastGameCard}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};