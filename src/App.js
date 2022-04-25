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

function App() {
  const [contacts, setContacts] = useState([]);
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setConatcts={setContacts} />} />
          
          <Route path="/Register" element={<Register />} />
          
          <Route path="/Talk" element={<Talk contacts={contacts}/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
