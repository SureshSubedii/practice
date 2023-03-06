import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './Navbar';
import {increment,decrement} from './features/counterSlice'

function App() {
  const dispatch=useDispatch();
  const handleclick1=()=>{
    dispatch( decrement()
)


  }
  const handleclick2=()=>{
    dispatch(increment())

  }
  return (
    <div>
      <Navbar/>
      <h1>Learnig Redux</h1>
      <div onClick={handleclick1} className="btn btn-primary mx-3"> -</div>
      <b>Add/Sub</b>

      <div onClick={handleclick2} className="btn btn-primary mx-3"> +</div>


    </div>
  );
}

export default App;
