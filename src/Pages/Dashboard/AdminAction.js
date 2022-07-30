import React from 'react';
import { toast } from 'react-toastify'
const AdminAction = ({ allUser, index, refetch, setDeleteModal }) => {
    const { email, _id, role } = allUser
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Request Error')
                }
                return res.json()
            })
            .then(result => {
                if (result.modifiedCount > 0) {
                    refetch()
                    toast.success('succesfully make an Admin')
                }


            })


    }


    return (
        <tbody>
            <tr className={role === 'admin' && 'active'}>
                <th>{index + 1}</th>
                <td>{email}</td>
                {role ?
                    <td>{role}</td>
                    :
                    <td>General User</td>
                }
                {!role ?

                    < td >
                        <button onClick={makeAdmin} class="btn btn-xs">make admin</button>
                    </td> :

                    <td></td>
                }
                {email === 'arhabib255@gmail.com' || email === 'phero@gmail.com' ?
                    <td>
                    </td>
                    :

                    <td>
                        <label onClick={() => setDeleteModal(allUser)} for="delete-user-modal" class="btn btn-xs btn-error">Delete User</label>
                    </td>

                }
            </tr>
        </tbody >
    );
};

export default AdminAction;