import '../css/MovieCard.css'
function Movies({movie}){

function onFavoriteClick(){
    alert("You liked this movie")
}

return(
    <>
    <div className="movie-card">
        <div className="movie-poster">
            <h3>{movie?.title}</h3>
            <div className="movie-overlay">
\            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>

            </div>
            <div className="movie-description">
               <button className="favorite-btn" onClick={onFavoriteClick}>❤</button> 
               
            </div>
     </div>
     <div className='movie-info'>
        <h3>{movie.title} </h3>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
     </div>
    </div>
    
    </>
)

}

export default Movies