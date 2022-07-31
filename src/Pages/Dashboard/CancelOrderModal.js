import React from 'react';
import { toast } from 'react-toastify';

const CancelOrderModal = ({ cancelModal, setCancelModal, refetch }) => {
    console.log(cancelModal)
    const { _id, productName, price, orderQuantity } = cancelModal
    const handleCancle = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.deletedCount) {
                    toast.success(`${productName} has been successfully deleted`)
                    setCancelModal(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-user-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box text-center">
                    <h3 class="font-bold text-lg"> Order Cancelation !</h3>
                    <p class="py-2">Your Order will be cancelled!</p>
                    <p class="py-2">Product {productName}</p>
                    <p class="py-2">Quantity: {orderQuantity}</p>
                    <p class="py-2">Price: {price}</p>
                    <div class="modal-action justify-center">
                        <label onClick={() => handleCancle()} for="delete-user-modal" class="btn btn-error">Okay</label>
                        <label for="delete-user-modal" class="btn btn-modal">Back</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModal;