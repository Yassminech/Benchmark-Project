import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Profile from "../pages/Profile"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Header from "../components/Header"



export default function App() {
  return (
    <BrowserRouter>
    {/* header */}
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Profile' element={<Profile />} />
    <Route path='/Login' element={<Login />} />
    <Route path='/Register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}
