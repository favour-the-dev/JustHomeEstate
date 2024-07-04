import { Routes, Route } from "react-router-dom"
import Home from "./pages/index/Home";
import Navbar from "./Layout/components/Navbar";
import {StateProvider} from './context/StateContext';
function App() {

  return (
    <>
      <StateProvider>
        <div className="h-screen">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </StateProvider>
    </>
  )
}

export default App
