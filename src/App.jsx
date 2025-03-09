import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Inventory from "./pages/Inventory.jsx";
import Navbar from "./component/Navbar.jsx";
import ConsumerRequest from "./pages/ConsumerRequest.jsx";
import Login from "./component/Login.jsx";
import Register from "./component/Register.jsx";

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
             <Route path="/register" element={<Register/>} />
             <Route path="/login" element={<Login/>} />
         </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
