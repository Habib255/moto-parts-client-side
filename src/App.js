import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Products from './Pages/Products/Products';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import Blogs from './Blogs/Blogs';
import MyPortfolio from './MyPortfolio/MyPortfolio';
import { ToastContainer } from 'react-toastify';
import ManageUsers from './Pages/Dashboard/ManageUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import NotFound from './Pages/Shared/NotFound';
import Payment from './Pages/Dashboard/Payment';
import useAdmin from './Pages/Hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import AddProduct from './Pages/Dashboard/AddProduct';
import Loading from './Pages/Shared/Loading';
import ManageAllPd from './Pages/Dashboard/ManageAllPd';

function App() {
  const [user] = useAuthState(auth)
  const [admin, adminLoading] = useAdmin(user)
  if (adminLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="products" element={<Products></Products>} />
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        } />
        <Route path="register" element={<Register></Register>} />
        <Route path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          {admin &&
            <Route index element={<MyProfile></MyProfile>}></Route>}
          {!admin && <Route index element={<MyOrders></MyOrders>}></Route>
          }
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          {!admin && <Route path='addreview' element={<AddReview></AddReview>}></Route>}
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='manageusers' element={<RequireAdmin><ManageUsers></ManageUsers></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageAllPd></ManageAllPd></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
