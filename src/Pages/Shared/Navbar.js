import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from './Loading';
import useAdmin from '../Hooks/useAdmin';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {

    }
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (

        <div className="navbar bg-slate-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/home"> Home</Link></li>
                        <li><Link to="/products"> Products</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/myportfolio'>My Portfolio</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-smd" to="/home">MoTo PaRts</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal">
                    <li><Link to="/home"> Home</Link></li>
                    <li><Link to="/products"> Products</Link></li>

                    {user &&
                        <li> <Link to="/dashboard">Dashboard</Link></li>
                    }
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/myportfolio'>Portfolio</Link></li>
                    <li>
                        {user ?
                            <>

                                <div class="dropdown dropdown-end dropdown-hover">
                                    <label tabindex="3" class="">User
                                    </label>

                                    <ul tabindex="3" class="dropdown-content mt-36 menu  shadow bg-base-100 rounded-box w-36">
                                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                                        <li> <button onClick={logOut}> LogOut</button></li>
                                    </ul>
                                </div>

                            </>
                            :
                            <button> <Link to='/login'>Login</Link></button>
                        }
                    </li>

                </ul>
            </div>
            <div className='navbar-end lg:hidden'>
                {
                    user ?
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost text-lg"><svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7' fill='currentColor' viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                            </label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                {user && !admin && <li><Link to='/dashboard'>My Orders</Link></li>}
                                <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                                {user && !admin && <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                                }                                {admin &&
                                    <li><Link to='/dashboard/manageusers'>Make Admin</Link></li>
                                }
                                <li> <button onClick={logOut}> LogOut</button></li>

                            </ul>
                        </div>
                        :
                        <button className='btn btn-ghost'> <Link to='/login'>Login</Link></button>
                }

            </div>
        </div >
    );
};

export default Navbar;