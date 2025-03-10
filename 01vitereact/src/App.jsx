import { useState } from "react";

function App() {
  let [Counter,setCounter]= useState(0);
  const addValue= ()=>{
    //console.log("Value Clicked",Math.random(),Counter)
    setCounter(Counter+1);
  }
  const removeValue= ()=>{
    //console.log("Value Clicked",Math.random(),Counter)
    setCounter(Counter-1);
  }
  return (
    <>
    <h1>Chai or Coffe</h1>
    <h2>Counter no {Counter}</h2>
    <button 
    onClick={addValue}>Add Value</button>
    <br></br>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
