function Movies({movie}){

function onFavoriteClick(){
    alert("You liked this movie")
}

return(
    <>
    <div className="movie">
        <div className="movie-title">
            <h3>{movie?.title}</h3>
            <div className="movie-image">
            <img src={movie?.image} alt={movie?.title}/>
            </div>
            <div className="movie-description">
               <p>{movie?.description}</p>
               <button className="movie-button" onClick={onFavoriteClick}>❤</button> 
                <p className="movie-rating">{movie?.release_data} </p>
            </div>
     </div>
    </div>
    
    </>
)

}

export default Movies