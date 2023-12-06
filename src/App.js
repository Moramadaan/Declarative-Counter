import React, { useState } from 'react'
import './App.css';


function App(){
    const [ counter, changeCounter ] = useState(1)
    const incrementCounter = () => {
      changeCounter(counter + 1);
    };
    return (
      <div className="App">
         <h1>Counter Value:{counter}</h1>
         <button onClick={incrementCounter}>Increment</button>
      </div>
       
    )
}

export default App;
