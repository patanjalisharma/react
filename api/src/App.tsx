import axios from "axios";
function App() {
  async function getData() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await res.json()
    // console.log(data)
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(res.data)

  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;
