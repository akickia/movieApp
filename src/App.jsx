import './App.css'
import Footer from './Components/Footer'
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
      <Footer></Footer>
    </div>
  )
}

export default App
