import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/navbar";
import Login from "./components/Login/login";
import Features from "./components/Features/features";
import Solutions from "./components/Solutions/solutions";
import Signup from "./components/Signup/Signup";
import NotFound from "./components/Not-found/NotFound";
import VerifyEmail from "./components/verify-email/VerifyEmail";
import { useSelector } from "react-redux";
import ForgotPassword from "./components/Forgot-password/ForgetPassword";
import DashboardAdmin from "./components/DashboardAdmin/DashboardAdmin";
import ResetPassword from "./components/Reset-Password/ResetPassword";
import UsersTable from "./components/DashboardAdmin/UserTable";
import Footer from "./components/Footer/Footer";



function App() {
  const { user } = useSelector((state) => state.auth); 
  return (
   
      <Router>
        <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/features' element={<Features />} />
          <Route exact path='/solution' element={<Solutions />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/Signup' element={<Signup/>} />
          <Route
            path="/users/:userId/verify/:token"
            element={!user ? <VerifyEmail /> : <Navigate to="/" />} 
          />
           <Route path="/forgot-password" element={<ForgotPassword/>} />
           <Route path="/reset-password/:userId/:token" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />


        <Route path="/admin">
          <Route index element={user?.isAdmin ? <DashboardAdmin /> : <Navigate to="/" />} />
          <Route path="/admin/usertable" element={user?.isAdmin ? <UsersTable /> : <Navigate to="/" />} />
        </Route>

        </Routes>

        <Footer/>

      


        </div>
      </Router>
  );
}

export default App;
