import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import AdminAction from './AdminAction';
import DeleteUserModal from './DeleteUserModal';


const ManageUsers = () => {
    const [user] = useAuthState(auth)
    const [deleteModal, setDeleteModal] = useState(null)


    const { data, isLoading, refetch } = useQuery(['alluser', user], () => fetch('https://thawing-waters-08691.herokuapp.com/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    refetch()

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
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
                    data.map((allUser, index) => <AdminAction allUser={allUser} key={allUser._id} refetch={refetch} index={index} setDeleteModal={setDeleteModal}></AdminAction>)

                }
            </table>
            {deleteModal && <DeleteUserModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} refetch={refetch} ></DeleteUserModal>}
        </div>
    );
};

export default ManageUsers;