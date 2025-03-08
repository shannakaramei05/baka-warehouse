import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Inventory from "./pages/Inventory.jsx";
import Navbar from "./component/Navbar.jsx";
import ConsumerRequest from "./pages/ConsumerRequest.jsx";

function App() {

  return (
    <>
    <Navbar/>
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/home" element={<Home/>}/>
             <Route path="/inventory" element={<Inventory/>}/>
             <Route path="/request" element={<ConsumerRequest/>} />
         </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
