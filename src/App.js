import logo from './logo.svg';
import './App.css';
import searchContact from './searchContact/searchContact';
import {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';
import Talk from './Talk/Talk';
import Massage from './massage/Massage'
import Contact from './contact/Contact';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="/Register" element={<Register />} />
          
          <Route path="/talk" element={<Talk />} />
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
