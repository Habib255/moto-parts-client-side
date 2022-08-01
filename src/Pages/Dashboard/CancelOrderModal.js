import React from 'react';
import { toast } from 'react-toastify';

const CancelOrderModal = ({ cancelModal, setCancelModal, refetch }) => {
    console.log(cancelModal)
    const { _id, productName, price, orderQuantity } = cancelModal
    const handleCancle = () => {
        fetch(`https://thawing-waters-08691.herokuapp.com/order/${_id}`, {
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
            <input type="checkbox" id="delete-user-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                    <h3 className="font-bold text-lg"> Order Cancelation !</h3>
                    <p className="py-2">Your Order will be cancelled!</p>
                    <p className="py-2">Product {productName}</p>
                    <p className="py-2">Quantity: {orderQuantity}</p>
                    <p className="py-2">Price: {price}</p>
                    <div className="modal-action justify-center">
                        <label onClick={() => handleCancle()} for="delete-user-modal" className="btn btn-error">Okay</label>
                        <label for="delete-user-modal" className="btn btn-modal">Back</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModal;