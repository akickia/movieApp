import { useEffect, useState } from "react";
import DisplayMovies from "./DisplayMovies";
import "../styles/searchMovies.css"




function SearchMovies() {
  
  const [search, setSearch] = useState("anna")
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
  async function fetchMovies() {
      let moviesList = await fetch('http://www.omdbapi.com/?apikey=37fe945a&s=' + search);
      moviesList = await moviesList.json()
      moviesList = moviesList.Search
      moviesList ? setMovies(moviesList) : setMovies([])
    }
fetchMovies()
}, [search])

  return ( 
    <>
    <section className="card search-card">
      <label htmlFor="search-field">Sök film</label>
      <input type="text" name="search" id="search-field" onChange={(e) => {setSearch(e.target.value)}}></input>
    </section>
    <DisplayMovies movies={movies}/>
    </>
   );
}

export default SearchMovies;