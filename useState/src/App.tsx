import { useState } from "react"
function App() {

  const [count, setCount] = useState(0);

  function incVal() {
    setCount(count+1);
  }
  function decVal() {
    setCount(count-1);
  }

  
  return (
    <div>
      <div className="container">
        <div className="box">
          {count}
        </div>
        <button onClick={incVal} className="increase">Increase</button>
        <button onClick={decVal} className="decrease">Decrease</button>
      </div>
    </div>
  )
}

export default App