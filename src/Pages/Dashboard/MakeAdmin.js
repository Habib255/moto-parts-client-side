import React from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MakeAdmin = () => {
    const [user] = useAuthState(auth)

    const { data, isLoading, refetch } = useQuery(['alluser', user], () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const makeAdmin = () => {

    }
    const deleteUser = () => {

    }
    refetch()

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Promotion</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    data.map((allUser, index) => <tbody>
                        <tr>
                            <th>{index + 1}</th>
                            <td>{allUser.email}</td>
                            <td>admin</td>
                            <td>
                                <button onClick={makeAdmin} class="btn btn-xs">make admin</button>
                            </td>
                            <td>
                                <button onClick={deleteUser} class="btn btn-xs">Delete User</button>
                            </td>
                        </tr>
                    </tbody>)

                }
            </table>
        </div>
    );
};

export default MakeAdmin;