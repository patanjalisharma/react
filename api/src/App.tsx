import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  //async function getData() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await res.json()
    // console.log(data)
    // const res = await axios.get('https://jsonplaceholder.typicode.com/users')

    // console.log(res.data)

    
  //}

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)
  useEffect(function(){
    console.log("first")
  }, [num])

  function changeVal() {
    setNum(num+1);
  }
  function changeVal2() {
    setNum2(num2+1);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeVal}>click</button>
      <h2>{num2}</h2>
      <button onClick={changeVal2}>click2</button>
    </div>
  );
}

export default App;
