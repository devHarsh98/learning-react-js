import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 2;
  
  const addValue = () => {
    if(counter >= 20) {
      setCounter(20);
    }
    else {
      counter = counter + 1;
      setCounter(counter);
    }
    console.log('clicked', counter);
  }

  const subValue = () => {
    if(counter === 0) {
      setCounter(0);
    }
    else {
      counter = counter - 1;
      setCounter(counter);
    }
    console.log('clicked', counter);
  }

  return (
    <>
     <h1>Add to Cart : {counter}</h1>
    <button onClick={subValue}>-</button> 
    <button onClick={addValue}>+</button>
    </>
  )
}

export default App
