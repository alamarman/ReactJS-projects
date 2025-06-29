import React from 'react'
import '../css/MovieCard.css'
import { UseMovieContext } from '../context/MovieContext'
const MovieCard = ({movie}) => {
const {isFavorites,addtoFavorites,removeFromFavorites}=UseMovieContext()
  
const favorites=isFavorites(movie.id)

function onFavoriteCilck(e){
        e.preventDefault()
          if(favorites) removeFromFavorites(movie.id)
            else addtoFavorites(movie)

    }

  return (
    <div className='movie-card'>
       <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <div className='movie-overlay'>
            <button className={`favotite-btn ${favorites ? "active":""}`} onClick={onFavoriteCilck}>
                🤍
            </button>
        </div>
       </div>
       <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0]}</p>
       </div>
    </div>
  )
}

export default MovieCard
