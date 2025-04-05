import { Button } from '@mui/material'
import React ,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
import {Add} from '../redux/actions/actions'
import { useDispatch } from 'react-redux';



function Home() {
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(Add(data))
  }
  const [data, setData] = useState("");
 console.log(data);
  return (
    <>
    <div className="container">
        <section className='mt-3 text-center'>
            <h1 className='text-primary'>Enter your Task</h1>

            <div className="todo col-lg-5 d-flex justify-content-between align-items-center mx-auto">
              <input className='form-control' value={data} onChange={(e)=>setData(e.target.value)} placeholder='Enter your task' />
              <Button variant='contained' style={{backgroundColor: 'green'}}
               className='mx-2'
               onClick={handleAdd()}
               ><AddIcon/></Button>
             
            </div>
            <Todo />
        </section>
    </div>
    </>
  )
}

export default Home