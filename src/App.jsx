import './App.css'
import DisplayMovies from './Components/DisplayMovies'
import MovieCard from './Components/MovieCard'
import SearchMovies from './Components/SearchMovies'
// import SearchMovies from './Components/SearchMovies'

function App() {


  return (
    <div className="App">     
    <header>
      <h1>Filmbibliotek</h1>
      <p>Sök filmer från OMDb API</p>
    </header> 
      <SearchMovies />
    </div>
  )
}

export default App
