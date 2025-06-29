const API_KEY="650d05ed9cf45985298a702c5c2e855f"

const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies= async ()=>{
    const respons= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await respons.json()
    
    return data.results
};
export const searchMovies= async (query)=>{
    const respons= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`)
    const data = await respons.json()
    return data.results
};
