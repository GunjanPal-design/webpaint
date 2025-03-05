import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sign from "./Sign"
import Login from "./Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign />} />
        <Route path='/Login' element={<Login/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
