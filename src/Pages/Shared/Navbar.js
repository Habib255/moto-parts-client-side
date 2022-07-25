import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {

    }
    const logOut = () => {
        signOut(auth)
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
                <Link className="btn btn-ghost normal-case lg:text-xl text-sm" to="/home">MoTo PaRts</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal">
                    <li><Link to="/home"> Home</Link></li>
                    <li><Link to="/products"> Products</Link></li>

                    {user &&
                        <li> <Link to="/dashboard">Dashboard</Link></li>
                    }

                    <li>
                        {user ?
                            <>
                                <div class="dropdown dropdown-end dropdown-hover">
                                    <label tabindex="11" class=""><li>{user?.displayName?.slice(0, 8) || 'User'}</li></label>
                                    <ul tabindex="11" class="dropdown-content mt-36 menu  shadow bg-base-100 rounded-box w-36">
                                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                                        <li> <button onClick={logOut}> LogOut</button></li>
                                    </ul>
                                </div>

                            </>
                            :
                            <button> <Link to='/login'>Login</Link></button>
                        }
                    </li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/myportfolio'>Portfolio</Link></li>
                </ul>
            </div>
            <div className='navbar-end lg:hidden'>
                {
                    user ?
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/dashboard'>My Orders</Link></li>
                                <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                                <li><Link to='/dashboard/addreview'>Add Review</Link></li>
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