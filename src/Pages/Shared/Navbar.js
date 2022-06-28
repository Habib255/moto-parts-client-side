import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        console.log(error)
    }
    const logOut = () => {
        signOut(auth)
    }
    return (
        <div class="navbar bg-slate-700">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/home"> Home</Link></li>
                        <li><Link to="/products"> Products</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>


                    </ul>

                </div>
                <Link class="btn btn-ghost normal-case lg:text-xl text-sm" to="/home">Moto Parts</Link>

            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to="/home"> Home</Link></li>
                    <li><Link to="/products"> Products</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>

                    <li>
                        {user ?
                            <>



                                <button onClick={logOut} className='btn btn-ghost'>LogOut({user?.displayName?.slice(0, 2)})  </button>

                            </>
                            :

                            <button className='btn btn-ghost'> <Link to='/login'>Login</Link></button>

                        }
                    </li>
                </ul>
            </div>
            <div className='navbar-end lg:hidden'>
                {user ?

                    <button onClick={logOut} className='btn btn-ghost'><small>({user?.displayName?.slice(0, 2)})</small><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg> </button>

                    :

                    <Link to='/login'> <button className='btn btn-ghost' to='/login' ><small>login</small><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg></button></Link>

                }
            </div>
        </div >

























    );
};

export default Navbar;