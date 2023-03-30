import "../styles/moviecard.css"


function MovieCard({movie}) {
  // console.log(movie)
  // console.log(i)
  return ( 
    <section className="card">
      
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt="" />
      <p>Year: {movie.Year}</p>
      <p>ImdbID: {movie.imdbID}</p>
    </section>
   );
}

export default MovieCard;