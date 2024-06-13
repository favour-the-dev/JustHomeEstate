import { Routes, Route } from "react-router-dom"
import Home from "./pages/index/Home"
import Navbar from "./Layout/components/Navbar"
function App() {

  return (
    <>
      <div className="h-screen">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
