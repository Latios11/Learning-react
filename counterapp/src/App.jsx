import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount] = useState(15)

  const addValue = () => {
    if (count >= 20)
    { 
      ;
    }
    else
     {
      count = count + 1;
      setCount(count)
     }
  }

  const remValue = () =>{
    if (count <= 0) ;
    else{  
      count = count - 1;
      setCount(count)
    }
  }
  return(
    <>
        <h1>Counter App</h1>
        <h3>counter value: {count}</h3>
        <button onClick={addValue}>Add value</button>
        <br/>
        <button onClick={remValue}>Remove value</button>
    </>
  )
}

export default App
