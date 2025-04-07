import { useState } from 'react'


function App() {
  const [count, setCount]=useState(0);

  return(
    <div>
      <h2>Dynamic list item </h2>
      <input type="text" ></input>
      <button >Add item</button>
    </div>
    
  )
}

export default App
