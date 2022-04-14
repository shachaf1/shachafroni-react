import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';
import Talk from './Talk/Talk';
import Massage from './massage/Massage'

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
