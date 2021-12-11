import React from 'react'
import './App.css';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Landlord from './pages/Landlord';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Listings from './pages/Listings/Listings';
import RentalForm from './components/RentalForm';
import Listing from './pages/Listing';
import Stripe from './components/StripeContainer';


function App() {

  const { user, isLoggedIn } = useSelector(state => state.auth)

  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Listings />} />
          <Route path=":id" exact element={<Listing />} />
          <Route path=":id/payment" element={isLoggedIn && user.role==="regular" ? <Stripe /> : <Navigate to="/login" replace={true} />} />
          <Route path="/dashboard" exact element={<Landlord />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/create-rental" exact 
          element={isLoggedIn && user.role==='landlord' ? <RentalForm /> : <Navigate to="/login" replace={true} />} />
          <Route path="*" element={"404 Page Not Found"} />
        </Routes>
      </div>
  );
}

export default App;
