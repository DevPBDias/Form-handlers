import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPassword from './pages/LoginPassword';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/home" /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/login&pwd" element={ <LoginPassword /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}

export default App;
