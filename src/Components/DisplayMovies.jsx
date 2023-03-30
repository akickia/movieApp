import MovieCard from "./MovieCard";
import "../styles/displaymovies.css"

function DisplayMovies({movies}) {
  // console.log(movies)
  return ( 
    <article className="container">
      {
       movies.map((movie, i) => {   
    return(
      <MovieCard key={i} movie={movie} />
      )
    })
      }
    </article>

  );
}



export default DisplayMovies;