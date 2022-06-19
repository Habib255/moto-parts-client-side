import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Products from './Pages/Home/Products';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="products" element={<Products></Products>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="dashboard" element={<Dashboard></Dashboard>} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
