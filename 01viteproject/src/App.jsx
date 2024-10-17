import React, { useEffect, useState } from "react"
import axios from 'axios'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard"

 const API_URL = `http://omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`

function App() {

  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const searchMovies = async (title)=>{
    const data = await axios.get(`${API_URL}&s=${title}`);
    console.log(data.data.Search);
    setMovies(data.data.Search);
  }

  useEffect(()=>{
    searchMovies('Batman')
  },[])

  return (
   <div className="app">
    <h1>MoviesLand</h1>

    <div className="search">
      <input placeholder="Search for a movie"
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}/>
  
      <img
     src={SearchIcon}
     alt='search'
     onClick={()=>searchMovies(searchTerm)} />
    </div>

    <div className="container">
    {movies.map((movie)=>(
      <MovieCard key={movie.imdbID} movie={movie}/>
    ))}
    </div>
   </div>
  )
}

export default App
