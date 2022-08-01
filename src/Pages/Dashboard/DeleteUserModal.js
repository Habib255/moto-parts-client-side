import React from 'react';
import { toast } from 'react-toastify';

const DeleteUserModal = ({ setDeleteModal, deleteModal, refetch }) => {
    const { email } = deleteModal
    const handleDelete = () => {
        fetch(`https://thawing-waters-08691.herokuapp.com/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.deletedCount) {
                    toast.success(`${email} has been successfully deleted`)
                    setDeleteModal(null)
                    refetch()
                }
            })
    }

    return (

        <div>
            <input type="checkbox" id="delete-user-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg"> Want to Delete {email} !</h3>
                    <p className="py-4">All information about the user Will Removed after delete!</p>
                    <div className="modal-action">
                        <label onClick={() => handleDelete()} for="delete-user-modal" className="btn btn-error">Delete</label>
                        <label for="delete-user-modal" className="btn btn-modal">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUserModal;