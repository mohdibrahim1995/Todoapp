import {useState,useEffect} from 'react'
import Movies from '../components/MovieCard'
import '../css/Home.css'
import { searchMovies,getPopluarMovies } from '../services/Api'
function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError]= useState(null)
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        const loadPopular= async ()=>{
            try{
                const popularMovies=await getPopluarMovies()
                setMovies(popularMovies)
            }
            catch(err){
                console.log(err)
                setError("Failed to Load the API")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopular()
    },[])
 
    const handleSearch = async (e)=>{
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return
        try{
            const searchMovies= await searchMovies(searchQuery)
            setMovies(searchMovies)
            setError(null)
      
        }
        catch(err){
            setError(err)
            console.log("Failed to Load the API")
        }
        finally{
            setLoading(false)
        }

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
         {error && <div className='error-message'>{error} </div>}
         {loading ? <div className='loading'>Loading...</div>:
        <div className='movies-grid'>
        {movies.map(
            (movie)=>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            &&
           ( <Movies key={movie.id} movie={movie} />)

            )}
        </div>
        }


    </div>
  )
}


export default Home