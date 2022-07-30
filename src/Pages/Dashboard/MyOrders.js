import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const { data, isLoading, refetch, } = useQuery(['orders', user], () => fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/')
        }
        return res.json()
    }))
    if (isLoading) {
        return <Loading></Loading>
    }
    refetch()

    return (
        <>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">

                    <thead>
                        <tr className='text-center'>

                            <th>Image/Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment details</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {data.map(order => <tbody key={order._id}>

                        <tr className='text-center'>

                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={order.image} alt="product img" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">{order.productName}</div>
                                        <div class="text-sm opacity-50">{order.productId}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {order.orderQuantity} pcs
                            </td>
                            <td> $ {order.price}</td>


                            {order.payment === true ?
                                <td>
                                    <Link to={`/dashboard/payment/${order._id}`}>  <button class="btn btn-ghost btn-xs">Pay Now</button></Link>
                                </td>
                                :
                                <td> <span className='text-success '>paid</span></td>

                            }


                            {order.payment !== true ?
                                <td> <span className='text-cyan-600 '>Pending Delivery</span></td>

                                :
                                <td>
                                    <button class="btn btn-ghost btn-xs">cancel order</button>
                                </td>
                            }
                        </tr>

                    </tbody>)}
                </table>
            </div>
        </>
    );
};

export default MyOrders;