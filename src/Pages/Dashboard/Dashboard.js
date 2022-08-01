import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                {/* <!-- Page content here --> */}
                <h2 className='text-xl'>This is your Dashboard Page</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && < li >
                        <Link to='/dashboard'>My Orders</Link>

                    </li>
                    }
                    {admin ?
                        <li>
                            <Link to='/dashboard'>My Profile</Link>

                        </li>
                        :
                        <li>
                            <Link to='/dashboard/myprofile'>My Profile</Link>

                        </li>
                    }

                    {!admin && user &&
                        <li>
                            <Link to='/dashboard/addreview'>Add Review</Link>

                        </li>}

                    {
                        admin &&
                        <li>
                            <Link to='/dashboard/manageusers'>Make Admin</Link>

                        </li>

                    }
                    {
                        admin &&
                        <li>
                            <Link to='/dashboard/addproduct'>Add Product</Link>

                        </li>

                    }
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;