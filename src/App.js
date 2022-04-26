import logo from './logo.svg';
import './App.css';
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
import funTalking from './funTalking1.jpg'

function App() {
  const [contacts, setContacts] = useState([]);
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          
          <Route path="/Register" element={<Register />} />
          
          <Route path="/Talk" element={<Talk/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
