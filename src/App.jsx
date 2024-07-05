import { Routes, Route } from "react-router-dom"
import Home from "./pages/index/Home";
import Navbar from "./Layout/components/Navbar";
import Loader from "./Layout/components/Loader";
import stateContext from "./context/StateContext";
import { useContext, useEffect } from "react";
function App() {
  const {loading} = useContext(stateContext);
  // function handleLoading(){
  //   // setTimeout(()=>{
  //   //   setIsLoading(true)
  //   // }, 500)
  // }
  // useEffect(()=>{
  //   window.addEventListener('load', handleLoading())
  //   return(
  //     window.removeEventListener('load', handleLoading())
  //   )
  // })
  return (
    <>
        <div className="h-screen">
        {loading && <Loader/>}
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </>
  )
}

export default App
