
import './css/App.css'
import Movies from './components/MovieCard'
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext';

function App() {

  return (
    <>
    <div>
      <NavBar />
      <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
      </main>
    </div>
 
    </>
  )
}



export default App
