import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sign from "./Sign"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
