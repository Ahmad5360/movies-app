import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import icon from "./icon.png"
import ToggleSwitch from "./toggle";

const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";


const App = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  // const [theme,setTheme] = useState("light-theme");
  // const toggletheme = () => 
  // {
    
  //   theme ==='dark-theme' ? setTheme='light-theme' : setTheme='dark-theme';
  // }
 
  
  // useEffect (() => {
  //   document.body.className=theme;

  // },[theme]);

  useEffect(() => {
    searchMovies("superman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    
    <div className="app">
      
      <div className="title"><h1>Moviedom</h1><img src={icon} alt='icon' height='80px' width='80px' className="icon"/></div>
      
      {/* <button className="btn" onClick={() => (toggletheme())}>Toggle</button> */}
      <ToggleSwitch label="." />

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search For Movies"
        />
        
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => searchMovies(searchTerm)}>
      <path d="M29.8594 29.8594L39.4219 39.4219"  stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z"  stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;