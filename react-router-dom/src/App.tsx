import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Details from "./pages/Details.jsx"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App