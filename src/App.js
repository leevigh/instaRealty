import React from 'react'
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Landlord from './pages/Landlord';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Listings from './pages/Listings';


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/dashboard" exact element={<Landlord />} />
          <Route path="/" exact element={<Listings />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </div>
  );
}

export default App;
