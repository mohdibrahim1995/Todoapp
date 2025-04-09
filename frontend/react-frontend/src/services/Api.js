const API_Key="9587cd03750c5ff487451838737a4ca5"
const BaseURL="https://api.themoviedb.org/3"

export const getPopluarMovies= async ()=>{
   const response= await fetch(`${BaseURL}/movie/popular?api_key=${API_Key}`)
   const data= await response.json()
   return data.results
}
export const searchMovies= async (query)=>{
   const response= 
   await fetch(`${BaseURL}/search/movie?api_key=${API_Key}$query=${encodeURIComponent(query)}`)
   const data= await response.json()
   return data.results
}