import React from 'react'
import '../css/Favorites.css'
import { UseMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'
const Favorites = () => {
    const{favorites}=UseMovieContext();

    if(favorites){
        return <div className='favorites'>
            <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map(
            (movie) =>(
             
                <MovieCard movie={movie} key={movie.id} />
              
          ))}
        </div>
        </div>
    }
  return (
    <div className='favorites-empty'>
        <h2>No Favorites Movies Yet</h2>
      <p>Strat adding movies to your favorites and they will appear here</p>
    </div>
  )
}

export default Favorites
