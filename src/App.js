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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/talk" element={<Talk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
