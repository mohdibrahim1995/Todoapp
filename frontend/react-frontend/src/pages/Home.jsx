import {useState} from 'react'
import Movies from '../components/MovieCard'

function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const movies=[
        {id:1, title:"John Wick", release_data:"2020-01-01"},
        {id:2, title:"Avengers", release_data:"2022-01-01"},
        {id:3, title:"Spiderman", release_data:"2023-01-01"},
        {id:4, title:"Iron Man", release_data:"2024-01-01"}
    
    ]
    const handleSearch = (e)=>{
        e.preventDefault()
        console.log(searchQuery)
        //fetch data from api
        
    }
  return (
    <div className='home'>
        <form onSubmit={handleSearch} className='search-form'>
            <input type="text" 
            placeholder='Search'
            className='search-input'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
             />
             <button type='submit' className='search-button'
            //  onClick={ searchbutton}
             >Search</button>
         </form>   
        <div className='movies-grid'>
        {movies.map(
            (movie)=>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            &&
           ( <Movies key={movie.id} movie={movie} />)

            )}
        </div>


    </div>
  )
}


export default Home