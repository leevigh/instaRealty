import React from 'react'
import './App.css';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Landlord from './pages/Landlord';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Listings from './pages/Listings';
import ProtectedRoute from './components/ProtectedRoute';
import RentalForm from './components/RentalForm';


function App() {

  const { user, isLoggedIn } = useSelector(state => state.auth)

  return (
    <div className="App">
        <Routes>
          <Route path="/dashboard" exact element={<Landlord />} />
          <Route path="/" exact element={<Listings />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/create-rental" exact 
          element={isLoggedIn && user.role==='landlord' ? <RentalForm /> : <Navigate to="/login" replace={true} />} />
        </Routes>
      </div>
  );
}

export default App;
