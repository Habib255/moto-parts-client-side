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
            <input type="checkbox" id="delete-user-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg"> Want to Delete {email} !</h3>
                    <p class="py-4">All information about the user Will Removed after delete!</p>
                    <div class="modal-action">
                        <label onClick={() => handleDelete()} for="delete-user-modal" class="btn btn-error">Delete</label>
                        <label for="delete-user-modal" class="btn btn-modal">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUserModal;